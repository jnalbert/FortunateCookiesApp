import React, { FC, useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Black, GreenFor, Nunito, Pink, Teal, YellowFor } from '../../../shared/colors';

import { AntDesign } from '@expo/vector-icons'; 
import CookieRewardComp, { RewardCookieType } from './CookieRewardComp';
import { useNavigation } from '@react-navigation/native';

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


const Cookies: RewardCookieType[] = [
  {
    imgUrl: "https://fortunatecookies.store/wp-content/uploads/2022/01/loveFortune.png",
    header: "Fortune Cookies",
    date: "2022-02-10T20:07:48.211Z",
    cookieType: "Love Advice",
    cookieCount: 125,
    points: 25,
    color: Pink
  },
  {
    imgUrl: "https://fortunatecookies.store/wp-content/uploads/2022/01/affirmation-fortune.png",
    header: "Fortune Cookies",
    date: "2020-01-01",
    cookieType: "Affirmations",
    cookieCount: 125,
    points: 25,
    color: Teal
  },
  {
    imgUrl: "https://fortunatecookies.store/wp-content/uploads/2022/01/jokesFortune.png",
    header: "Fortune Cookies",
    date: "2020-01-01",
    cookieType: "Jokes",
    cookieCount: 125,
    points: 25,
    color: YellowFor
  },
  {
    imgUrl: "https://fortunatecookies.store/wp-content/uploads/2022/01/sustainabilityFortune.png",
    header: "Fortune Cookies",
    date: "2020-01-01",
    cookieType: "Love Advice",
    cookieCount: 125,
    points: 25,
    color: GreenFor
  },

]

const RewardsHistoryComp: FC = () => {

  const [rewardCookies, setRewardCookies] = useState<RewardCookieType[]>(Cookies)

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

      <CookiesSectionWrapper >
        {rewardCookies.map(({imgUrl, header, date, cookieType, cookieCount, points, color}:RewardCookieType, index: number) => {
          return <CookieRewardComp imgUrl={imgUrl} header={header} date={new Date(date)} cookieType={cookieType} cookieCount={cookieCount} points={points} color={color} key={index}/>
        })}
      </CookiesSectionWrapper>

    </OverallWrapper>
  )
}

export default RewardsHistoryComp