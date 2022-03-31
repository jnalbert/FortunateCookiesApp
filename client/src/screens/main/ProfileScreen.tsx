import React, { FC, useContext, useEffect, useState } from 'react';
import { Alert, RefreshControl, View } from 'react-native';
import { _getStoredUuid, AuthContext } from '../../AppContext';
import ScreenWrapperComp from '../../shared/ScreenWrapperComp';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { logoutRed, Pink, Poppins, Purple, Text200, Text400 } from '../../shared/colors';
import BasicButton from '../../shared/BasicButton';
import ProfileInfoSection from '../../components/mainComps/Settings/ProfileInfoSection';
import { deleteAccount, GetProfileData } from '../../../firebase/FirestoreFunctions';


const Thumbnail = styled.View`
  align-self: center;
  width: 130px;
  height: 130px;
  border-radius: 65px;
  margin-top: 20px;
  overflow: hidden;
`

const InnerWrapper = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

const ThumbnailLetter = styled.Text`
  font-family: ${Poppins};
  font-size: 60px;
  letter-spacing: -1.5px;
  color: #FFFFFF;
  padding-bottom: 5px;
  padding-left: 2px;
  padding-right: 2px;
`

const ProfileHeaderWrapper = styled.View`
  flex-direction: column;
  align-items: flex-start;
  width: 96%;
  padding-top: 8%;
  border-bottom-color: ${Text200};
  border-bottom-width: 1.5px;
  padding-bottom: 7px;
`

const ProfileHeader = styled.Text`
  font-family: ${Poppins};
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.25px;
  color: ${Text400};
`

const InformationWrapper = styled.View`
  align-items: center;
  padding-top: 25px;
  width: 92%;
`

const ChangePasswordWrapper = styled.View`
  width: 70%;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
`

const LogoutButtonWrapper = styled.View`
  padding-top: 5%;
  width: 97%;
`


interface UserInfoType {
  name: string;
  email: string;
  dateJoined: string;
  totalCookiesPurchased: number;
  totalRewardsEarned: number;
  totalPointsEarned: number;
}

const ProfileScreen: FC<any> = ({navigation}) => {

  const [userInfo, setUserInfo] = useState<UserInfoType>({ name: "", email: "", dateJoined: "", totalCookiesPurchased: 0, totalRewardsEarned: 0, totalPointsEarned: 0 });
  const [initials, setInitials] = useState({ firstInitial: "", lastInitial: "" })
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchInitialData = async () => {
    // get data from api
    setIsRefreshing(true);
    const uuid = await _getStoredUuid();
    // console.log(uuid, "stored")

    const res = await GetProfileData(uuid || "");
    
    const rawData = { name: res?.name, email: res?.email, dateJoined: new Date(res?.dateJoined).toString(), totalCookiesPurchased: res?.totalCookiesPurchased, totalRewardsEarned: res?.totalPointsEarned, totalPointsEarned: res?.totalRewardsEarned }
    const { name, email, dateJoined, totalCookiesPurchased, totalRewardsEarned, totalPointsEarned } = rawData;
    
    const newDate = getFormattedDate(new Date(dateJoined).toString());

    setUserInfo({ name: name, email: email, dateJoined: newDate, totalCookiesPurchased: totalCookiesPurchased, totalRewardsEarned: totalRewardsEarned, totalPointsEarned: totalPointsEarned });
    getThumbnailInitials(name);
    setIsRefreshing(false)
  }

  const { signOut } = useContext(AuthContext);



  useEffect(() => {
    fetchInitialData()
  }, [])

  const getFormattedDate = (date: string) => {
    const formattedDate = new Date(date).toLocaleDateString(undefined, { month: "long", day: "2-digit", year: "numeric" })
    return formattedDate;
  }

  const getThumbnailInitials = (name: string) => {
    try {
      const splitString = name.split(" ")
      const firstInitial = splitString[0].substring(0, 1);
      const lastInitial = splitString[1].substring(0, 1);

      setInitials({firstInitial: firstInitial, lastInitial: lastInitial})
    } catch (error) {
      setInitials({firstInitial: "", lastInitial: ""})
    }
    
  }

  const handleChangePassword = () => {
    navigation.navigate("ChangePassword")
  }

  const onRefresh = async () => {
    await fetchInitialData()
  }

  const handleLogout = () => {
    signOut();
  }
  
  const handleDeleteAccount = async () => {
    const uuid = await _getStoredUuid();
    deleteAccount(uuid as string);
  }

  const deleteAccountAlert = () => {
    Alert.alert(
      "Are you sure?",
      "This will permanently delete your account and it will not be recoverable",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            handleDeleteAccount();
          },
          style: "destructive"
        },
      ]
    );
  };
  
  return (
    <ScreenWrapperComp scrollView refreshControl={
      <RefreshControl
      refreshing={isRefreshing}
      onRefresh={onRefresh}
      />
    }>
      <Thumbnail>
        <LinearGradient start={{ x: 0.2, y: 0.3 }}  colors={[Pink, Purple]} style={{ justifyContent: "center", width: "100%", height: "100%" }}>
        <InnerWrapper>
            <ThumbnailLetter>
                {initials.firstInitial}
            </ThumbnailLetter>
            <ThumbnailLetter>
                {initials.lastInitial}
            </ThumbnailLetter>
          </InnerWrapper>
        </LinearGradient>
      </Thumbnail>

      <ProfileHeaderWrapper>
        <ProfileHeader>Profile Information</ProfileHeader>
      </ProfileHeaderWrapper>

      <InformationWrapper>
        <ProfileInfoSection header="Name" value={userInfo.name} />
        <ProfileInfoSection header="Email" value={userInfo.email} />
        <ProfileInfoSection header="Date Joined" value={userInfo.dateJoined}/>
        <ProfileInfoSection header="Total Cookies Purchased" value={userInfo.totalCookiesPurchased.toString()}/>
        <ProfileInfoSection header="Total Rewards Earned" value={userInfo.totalRewardsEarned.toString()}/>
        <ProfileInfoSection header="Total Points Earned" value={userInfo.totalPointsEarned.toString()}/>
      </InformationWrapper>

      <ChangePasswordWrapper>
        <BasicButton style={{width: "100%"}} onPress={handleChangePassword} title='Change Password' />
      </ChangePasswordWrapper>

      <LogoutButtonWrapper>
        <BasicButton style={{backgroundColor: "transparent", borderColor: logoutRed, borderWidth: 2, height: 56, width: "98%"}} buttonTextStyle={{color: logoutRed}} title="Sign Out" onPress={handleLogout}/>
      </LogoutButtonWrapper>

      <LogoutButtonWrapper>
        <BasicButton style={{backgroundColor: logoutRed, borderColor: logoutRed, borderWidth: 2, height: 56, width: "98%"}} buttonTextStyle={{}} title="Delete Your Account" onPress={deleteAccountAlert}/>
      </LogoutButtonWrapper>
      
    </ScreenWrapperComp>
  )
}

export default ProfileScreen