import React, { FC, useState, useEffect, useRef } from 'react';
import { RefreshControl, View } from 'react-native';
import styled from 'styled-components/native';
import DonutChart from '../../../components/mainComps/Rewards/DonutChart';
import { Black, Nunito, Teal, backgroundColor, GreenFor } from '../../../shared/colors';
import ScreenWrapperComp from '../../../shared/ScreenWrapperComp';
import BasicButton from '../../../shared/BasicButton';
import RewardsHistoryComp from '../../../components/mainComps/Rewards/RewardsHistoryComp';
import { useNavigation } from '@react-navigation/native';
import { _getStoredUuid } from '../../../AppContext';
import { ClaimReward, GetRewardsData } from '../../../../firebase/FirestoreFunctions';


const DonutChartWrapper = styled.View`
  padding-top: 25px;
`

const MessageWrapper = styled.View`
  justify-content: center;
  align-self: center;
  margin-top: 25px;
  width: 60%;
`

const MessageText = styled.Text`
  margin-bottom: 6%;
  font-family: ${Nunito};
  font-size: 29px;
  letter-spacing: -1.5px;
  align-self: center;
  color: ${Black};
`

const AddPurchaseWrapper = styled.View`
  justify-content: center;
  width: 77%;
  /* padding-top: 6%; */
`

const BasicButtonWrapper = styled.View`
  
`


const MAX_POINTS = 50;

const RewardsScreen: FC<any> = ({}) => {

  const [points, setPoints] = useState(0)
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [claimReward, setClaimReward] = useState(false);


  const displayMessage = () => {
    if (points >= 50) {
      return;
    }
    if (points >= 30) {
      return "Almost there!"
    }
    if (points > 0) {
      return "Keep it up!"
    }
    return "Earn some points!"
  }

  const navigator: any = useNavigation()

  const addPurchasePress = () => {
    navigator.navigate("ScanPurchase")
  }

  const GetPoints = async () => {
    setIsRefreshing(true)
    const uuid = await _getStoredUuid() as string
    const resPoints = await GetRewardsData(uuid) as number
    // console.log('first', resPoints)
    setPoints(resPoints || 0)
    setIsRefreshing(false)
    if (resPoints >= 50) {
      setClaimReward(true);
    } else {
      setClaimReward(false);
    }
  }


  useEffect(() => {
    GetPoints()
  }, [])



  const goToClaimRewards = async () => {
    const uuid = await _getStoredUuid() as string
    await ClaimReward(uuid);
    navigator.navigate("ClaimRewardScreen")
  }


  const GetCookiesRef = useRef(null) as any

  return (
    <ScreenWrapperComp scrollView refreshControl={
      <RefreshControl refreshing={isRefreshing} onRefresh={async () => {
        await GetPoints()
        GetCookiesRef?.current()
      }} />
    }>
      <DonutChartWrapper>
        <DonutChart percentage={points} radius={100} strokeWidth={10} duration={500} color={Teal} delay={0} max={MAX_POINTS}/>
      </DonutChartWrapper>

      <MessageWrapper>
        {claimReward && (
          <BasicButtonWrapper>
            <BasicButton title={"Claim Your Rewards!"} onPress={goToClaimRewards} style={{width: "100%", height: 50, backgroundColor: GreenFor}}/>
          </BasicButtonWrapper>
      )}
        <MessageText>{displayMessage()}</MessageText>
      </MessageWrapper>

      <AddPurchaseWrapper>
        <BasicButton title="Add Purchase" onPress={addPurchasePress} style={{width: "100%", height: 50, backgroundColor: "transparent"}} gradient/>
      </AddPurchaseWrapper>

      <RewardsHistoryComp childRef={GetCookiesRef}/>

    </ScreenWrapperComp>
  )
}

export default RewardsScreen