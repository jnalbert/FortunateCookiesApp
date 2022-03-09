import React, { FC } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Black, FrankFurter, Nunito } from '../../../shared/colors';

const OverallWrapper = styled.View`
  /* width: 100%; */
  justify-content: center;
  align-items: center;
`

const ImageWrapper = styled.View`
  width: 70%;
  align-self: center;
  justify-content: center;
  align-items: center;
`

const Image = styled.Image`
  /* height: 80%; */
`

const HeaderText = styled.Text`
  margin-top: 25px;  
  font-family: ${FrankFurter};
  font-size: 36px;
  line-height: 48px;
  color: ${Black};
  letter-spacing: -1.5px;
`

const CookieInfoWrapper = styled.View`
  margin-top: 8%;
  width: 80%;
  flex-direction: column;
  justify-content: flex-start;
  /* align-items: center; */
`

const CookieInfoText = styled.Text`
  font-family: ${Nunito};
  font-size: 24px;
  line-height: 40px;
  color: ${Black};
  margin: 5px 0px;
`

const PointsWrapper = styled.View`
  padding-top: 2%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10%;
`

const PointsText = styled.Text`
  font-family: ${Nunito};
  font-size: 25px;
  /* line-height: 40px; */

`

const PointsPlus = styled.Text`
  font-family: ${Nunito};
  font-size: 40px;
  /* line-height: 40px; */
  padding-right: 5px;
`

export interface CookieDataType {
  name: string;
  count: number;
  price: number;
  layout: string;
  points: number;
  imgSrc: string;
  color: string;
  date: string;
}

const CookiePurchaseSection: FC<CookieDataType> = ({
  name, count, price, layout, points, imgSrc, color,
}) => {
  return (
    <OverallWrapper>
      <ImageWrapper>
        <Image resizeMode={'contain'} source={{ uri: imgSrc }} style={{width: 160, height: 160}}/>
      </ImageWrapper>

      <HeaderText>{name}</HeaderText>

      <CookieInfoWrapper>
        <CookieInfoText>Count: {count} Cookies</CookieInfoText>
        <CookieInfoText>Price: ${ price}</CookieInfoText>
        <CookieInfoText>Layout: {layout}</CookieInfoText>
      </CookieInfoWrapper>
        
      <PointsWrapper>
        <PointsPlus style={{color: color}}>+</PointsPlus>
        <PointsText style={{color: color}}>{points} points</PointsText>
      </PointsWrapper>
     
    </OverallWrapper>
  )
}

export default CookiePurchaseSection