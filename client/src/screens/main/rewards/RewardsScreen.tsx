import React, { FC, useState, useEffect, useRef } from 'react';
import { RefreshControl, View } from 'react-native';
import styled from 'styled-components/native';
import DonutChart from '../../../components/mainComps/Rewards/DonutChart';
import { Black, Nunito, Teal, backgroundColor } from '../../../shared/colors';
import ScreenWrapperComp from '../../../shared/ScreenWrapperComp';
import BasicButton from '../../../shared/BasicButton';
import RewardsHistoryComp from '../../../components/mainComps/Rewards/RewardsHistoryComp';
import { useNavigation } from '@react-navigation/native';
import { _getStoredUuid } from '../../../AppContext';
import { GetRewardsData } from '../../../../firebase/FirestoreFunctions';


const DonutChartWrapper = styled.View`
  padding-top: 25px;
`

const MessageWrapper = styled.View`
  justify-content: center;
  margin-top: 25px;
`

const MessageText = styled.Text`
  font-family: ${Nunito};
  font-size: 29px;
  letter-spacing: -1.5px;
  color: ${Black};
`

const AddPurchaseWrapper = styled.View`
  justify-content: center;
  width: 77%;
  padding-top: 6%;
`

const MAX_POINTS = 50;

const RewardsScreen: FC<any> = ({}) => {

  const [points, setPoints] = useState(0)
  const [isRefreshing, setIsRefreshing] = useState(false);

  const displayMessage = () => {
    if(points >= MAX_POINTS) {
      return "Claim your rewards!"
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
    const resPoints = await GetRewardsData(uuid)
    // console.log('first', resPoints)
    setPoints(resPoints || 0)
    setIsRefreshing(false)
  }


  useEffect(() => {
    GetPoints()
  }, [])


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