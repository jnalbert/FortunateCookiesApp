import React, { FC, Ref, useEffect, useState } from 'react';
import { View, RefreshControl } from 'react-native';
import styled from 'styled-components/native';
import { Black, GreenFor, Nunito, Pink, Teal, Text300, YellowFor, Poppins } from '../../../shared/colors';

import { AntDesign } from '@expo/vector-icons'; 
import CookieRewardComp, { RewardCookieType } from './CookieRewardComp';
import { useNavigation } from '@react-navigation/native';
import { _getStoredUuid } from '../../../AppContext';
import { getAllCookieData } from '../../../../firebase/FirestoreFunctions';

const OverallWrapper = styled.View`
  padding-top: 25px;
  width: 97%;
`

const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #C4C4C4;
  margin-bottom: 19px;
`

const HeaderContentWrapper = styled.TouchableOpacity`
  margin-bottom: 12px;
  flex-direction: row;
  padding-left: 4px;
`

const HeaderIconWrapper = styled.View`
  padding-left: 20px;
  align-items: center;
  justify-content: center;
`

export const NoneYetWrapper = styled.View`
  justify-content: center;
  align-items: center;
`

export const NoneYetText = styled.Text`
  font-family: ${Poppins};
  color: ${Text300}
`

export const HeaderText = styled.Text`
  font-family: ${Nunito};
  font-size: 20px;
  letter-spacing: -1.5px;
  color: ${Black};
`


export const CookiesSectionWrapper = styled.ScrollView`
  height: 210px;
  width: 104.5%;
`


// const Cookies: RewardCookieType[] = [
//   {
//     imgUrl: "https://fortunatecookies.store/wp-content/uploads/2022/01/loveFortune.png",
//     header: "Fortune Cookies",
//     date: "2022-02-10T20:07:48.211Z",
//     cookieType: "Love Advice",
//     cookieCount: 125,
//     points: 25,
//     color: Pink
//   },
//   {
//     imgUrl: "https://fortunatecookies.store/wp-content/uploads/2022/01/affirmation-fortune.png",
//     header: "Fortune Cookies",
//     date: "2020-01-01",
//     cookieType: "Affirmations",
//     cookieCount: 125,
//     points: 25,
//     color: Teal
//   },
//   {
//     imgUrl: "https://fortunatecookies.store/wp-content/uploads/2022/01/jokesFortune.png",
//     header: "Fortune Cookies",
//     date: "2020-01-01",
//     cookieType: "Jokes",
//     cookieCount: 125,
//     points: 25,
//     color: YellowFor
//   },
//   {
//     imgUrl: "https://fortunatecookies.store/wp-content/uploads/2022/01/sustainabilityFortune.png",
//     header: "Fortune Cookies",
//     date: "2020-01-01",
//     cookieType: "Love Advice",
//     cookieCount: 125,
//     points: 25,
//     color: GreenFor
//   },

// ]



const RewardsHistoryComp: FC<{childRef: any}> = ({childRef}) => {

  const [rewardCookies, setRewardCookies] = useState<RewardCookieType[]>([])
  const [isRefreshing, setIsRefreshing] = useState(false);
 
 


  const getCookiePurchases = async () => {
    setIsRefreshing(true);
    const uuid = await _getStoredUuid() as string
    const cookieData: any = await getAllCookieData(uuid)
    setRewardCookies(cookieData)
    setIsRefreshing(false)
  }
  
  useEffect(() => {
    getCookiePurchases()
    childRef.current = getCookiePurchases
  }, [])


  const navigation: any = useNavigation()

  const NavigateToAllRewards = () => { 
    navigation.navigate("AllRewards", {rewardCookies})
  }

  return (
    <OverallWrapper>
      <HeaderWrapper>
        <HeaderContentWrapper onPress={NavigateToAllRewards}>
        <HeaderText>Rewards History</HeaderText>
          <HeaderIconWrapper>
            <AntDesign name="arrowright" size={26} color="black" />
          </HeaderIconWrapper>
        </HeaderContentWrapper>
      </HeaderWrapper>

      {rewardCookies.length === 0 && (
        <NoneYetWrapper>
          <NoneYetText>No Cookies Yet</NoneYetText>
        </NoneYetWrapper>
      )}
      
        <CookiesSectionWrapper refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={async () => await getCookiePurchases()} />
      }>
        {rewardCookies.map(({imgSrc, name, date, header, count, points, color, layout, price}:RewardCookieType, index: number) => {
          return <CookieRewardComp layout={layout} price={price} imgSrc={imgSrc} name={name} date={new Date(date)} header={header} count={count} points={points} color={color} key={index}/>
        })}
      </CookiesSectionWrapper>

      </OverallWrapper>
  )
}

export default RewardsHistoryComp