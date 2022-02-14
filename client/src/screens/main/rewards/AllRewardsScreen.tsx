import React, { FC } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import CookieRewardComp from '../../../components/mainComps/Rewards/CookieRewardComp';
import { CookiesSectionWrapper, HeaderText } from '../../../components/mainComps/Rewards/RewardsHistoryComp';
import ScreenWrapperComp from '../../../shared/ScreenWrapperComp';
import { RewardCookieType } from '../../../components/mainComps/Rewards/CookieRewardComp';

const OverallWrapper = styled.View`
  width: 100%;
`
const HeaderWrapper = styled.View`
  margin-top: 30px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #C4C4C4;
  margin-bottom: 25px;
  padding-bottom: 7px;
`

const CookieSectionWrapper = styled.View`

`

const AllRewardsScreen: FC<any> = ({ route }) => {
  const { rewardCookies } = route.params;
  
  return (
    <ScreenWrapperComp scrollView>
      <OverallWrapper>
        <HeaderWrapper>
          <HeaderText>All Purchases</HeaderText>
        </HeaderWrapper>
        
        <CookieSectionWrapper >
        {rewardCookies.map(({imgUrl, header, date, cookieType, cookieCount, points, color}:RewardCookieType, index: number) => {
          return <CookieRewardComp imgUrl={imgUrl} header={header} date={new Date(date)} cookieType={cookieType} cookieCount={cookieCount} points={points} color={color} key={index}/>
        })}
      </CookieSectionWrapper>

      </OverallWrapper>
    </ScreenWrapperComp>
  )
}

export default AllRewardsScreen