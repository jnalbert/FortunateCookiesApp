import React, { FC } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Black, Nunito, Poppins, Text300 } from '../../../shared/colors';

const OverallWrapper = styled.View`
  flex-direction: row;
  /* justify-content: space-between; */
  /* align-items: center; */
  width: 100%;
  height: 85px;
`

const CookieImageWrapper = styled.View`
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  width: 40%;
  padding-left: 7px;
`

const CookieImage = styled.Image`
  width: 75px;
  height: 75px;
`

const OverallInfoWrapper = styled.View`
  width: 75%;
`

const TopInfoWrapper = styled.View`
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
`

const HeaderTextWrapper = styled.View`
  align-items: center;
  justify-content: flex-start;
`

const HeaderText = styled.Text`
  font-family: ${Nunito};
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.25px;
`

const DateWrapper = styled.View`
  align-items: center;
  justify-content: flex-end;
  width: 50%;
`

const DateText = styled.Text`
  font-family: ${Poppins};
  color: ${Text300};
  font-size: 14px;
  line-height: 20px;
`

const BottomInfoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`

const CookiesInfoWrapper = styled.View`
  flex-direction: column;
  width: 50%;
  
`


const CookieTypeWrapper = styled.View`
  justify-content: flex-start;
  padding-top: 1px;
  padding-bottom: 11px;
`

const CookieTypeText = styled.Text`
  font-family: ${Poppins};
  font-size: 14px;
`

const CookieCountWrapper = styled.View`

`

const CookieCountText = styled.Text`
  font-family: ${Poppins};
  font-size: 14px;
  line-height: 20px;
  color: ${Black};
`

const PointsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
  padding-left: 10px;
  padding-top: 15px;
`

const PointsPlus = styled.Text`
  font-family: ${Poppins};
  font-size: 30px;
  color: ${Black};
`

const PointsNumber = styled.Text`
  font-family: ${Poppins};
  font-size: 30px;
  color: ${Black};
`

const BorderBlock = styled.View`
  width: 92%;
  padding-top: 7px;
  align-self: center;
  border-bottom-width: 1px;
  border-bottom-color: ${"#E7ECF3"};
  margin-bottom: 19px;
`

export interface RewardCookieType {
  imgUrl: string;
  header: string;
  cookieType: string;
  cookieCount: number;
  points: number;
  date: any;
  color: string;
}

const CookieRewardComp: FC<RewardCookieType> = ({
  imgUrl,
  header,
  cookieType,
  cookieCount,
  points,
  date,
  color,
}) => {

  
  const getDisplayDate = () => {
    const shortYear = date.getFullYear().toString().substr(2, 2);
    const localDate = date.toLocaleDateString("en-US");

    return localDate.slice(0, localDate.length - 4) + shortYear;
  };

  return (
    <>
    <OverallWrapper>
      <CookieImageWrapper>
        <CookieImage source={{ uri: imgUrl }} style={{width: 75, height: 75}}/>
      </CookieImageWrapper>

      <OverallInfoWrapper>
        <TopInfoWrapper>
          <HeaderTextWrapper>
            <HeaderText>{header}</HeaderText>
          </HeaderTextWrapper>
          <DateWrapper>
            <DateText>{getDisplayDate()}</DateText>
          </DateWrapper>
        </TopInfoWrapper>

        <BottomInfoWrapper>
          <CookiesInfoWrapper>
            <CookieTypeWrapper>
              <CookieTypeText style={{color: color}}>{cookieType}</CookieTypeText>
            </CookieTypeWrapper>
            <CookieCountWrapper>
              <CookieCountText>{cookieCount} cookies</CookieCountText>
            </CookieCountWrapper>
          </CookiesInfoWrapper>

          <PointsWrapper>
            <PointsPlus>+</PointsPlus>
            <PointsNumber>{points}</PointsNumber>
          </PointsWrapper>
          
        </BottomInfoWrapper>
      </OverallInfoWrapper>
      
      </OverallWrapper>
      <BorderBlock></BorderBlock>
    </>
  )
}

export default CookieRewardComp