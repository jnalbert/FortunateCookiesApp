import React, { FC, useState } from 'react';
import { RefreshControl, View } from 'react-native';
import styled from 'styled-components/native';
import CookieRewardComp from '../../../components/mainComps/Rewards/CookieRewardComp';
import { HeaderText, NoneYetText, NoneYetWrapper } from '../../../components/mainComps/Rewards/RewardsHistoryComp';
import ScreenWrapperComp from '../../../shared/ScreenWrapperComp';
import { RewardCookieType } from '../../../components/mainComps/Rewards/CookieRewardComp';
import { _getStoredUuid } from '../../../AppContext';
import { getAllCookieData } from '../../../../firebase/FirestoreFunctions';

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
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [cookieData, setCookieData] = useState<RewardCookieType[]>(rewardCookies);

  const getCookiePurchases = async () => {
    setIsRefreshing(true);
    const uuid = await _getStoredUuid() as string
    const cookieData: any = await getAllCookieData(uuid)
    setCookieData(cookieData)
    setIsRefreshing(false)
  }
  
  return (
    <ScreenWrapperComp scrollView refreshControl={
      <RefreshControl refreshing={isRefreshing} onRefresh={async () => await getCookiePurchases()} />
  }>
      <OverallWrapper>
        <HeaderWrapper>
          <HeaderText>All Purchases</HeaderText>
        </HeaderWrapper>
        
        {rewardCookies.length === 0 && (
          <NoneYetWrapper>
            <NoneYetText>No Cookies Yet</NoneYetText>
          </NoneYetWrapper>
        )}
        <CookieSectionWrapper  >
        {cookieData.map(({imgSrc, name, date, header, count, points, color, layout, price}:RewardCookieType, index: number) => {
          return <CookieRewardComp layout={layout} price={price} imgSrc={imgSrc} name={name} date={new Date(date)} header={header} count={count} points={points} color={color} key={index}/>
        })}
      </CookieSectionWrapper>

      </OverallWrapper>
    </ScreenWrapperComp>
  )
}

export default AllRewardsScreen