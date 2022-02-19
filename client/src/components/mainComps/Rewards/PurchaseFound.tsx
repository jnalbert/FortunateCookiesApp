import { useNavigation } from '@react-navigation/native';
import React, { FC, useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import BasicButton from '../../../shared/BasicButton';
import { Black, FrankFurter, Nunito } from '../../../shared/colors';


const LoadingWrapper = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const OverallWrapper = styled.View`
  /* width: 100%; */
  margin-top: 25%;
  justify-content: center;
  align-items: center;
`

const ImageWrapper = styled.View`
  width: 100%;
  align-self: center;
  justify-content: center;
  align-items: center;
`

const Image = styled.Image`
  /* height: 80%; */
`

const HeaderText = styled.Text`
  margin-top: 30px;  
  font-family: ${FrankFurter};
  font-size: 41px;
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
  font-size: 27px;
  line-height: 40px;
  color: ${Black};
  margin: 5px 0px;
`

const PointsWrapper = styled.View`
  padding-top: 10%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const PointsText = styled.Text`
  font-family: ${Nunito};
  font-size: 29px;
  /* line-height: 40px; */

`

const PointsPlus = styled.Text`
  font-family: ${Nunito};
  font-size: 40px;
  /* line-height: 40px; */
  padding-right: 5px;
`

const ButtonWrapper = styled.View`
  justify-content: center;
  width: 250px;
  padding-top: 30px;
`

interface CookieDataType {
  name: string;
  count: number;
  price: number;
  layout: string;
  points: number;
  imgSrc: string;
  color: string;
}

interface Props { 
  code: string;
}

const PurchaseFound: FC<Props> = ({ code }) => {
  const [cookieData, setCookieData] = useState<CookieDataType>({ name: "", count: 0, price: 0, layout: "", points: 0, imgSrc: "" , color: ""});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => { 
    // Get cookie data from backend
    const cookieData: CookieDataType = {name: "Love Advice", count: 96, price: 199.99, layout: "4 x 8 x 3", points: 100, imgSrc: "https://fortunatecookies.store/wp-content/uploads/2022/01/loveFortune.png", color: "#FF70A0"}
    setCookieData(cookieData)

    setIsLoading(false)
  }, [])

  const navigator: any = useNavigation();
  const handleBackToRewards = () => { 
    navigator.navigate("Rewards")
  }

  return (
    <>
      {isLoading ? (
        <LoadingWrapper>
          <ActivityIndicator size={"large"} />
        </LoadingWrapper>
      ) : (
        <OverallWrapper>
          <ImageWrapper>
            <Image resizeMode={'contain'} source={{ uri: cookieData.imgSrc }} style={{width: 180, height: 180}}/>
          </ImageWrapper>

          <HeaderText>{cookieData.name}</HeaderText>

          <CookieInfoWrapper>
            <CookieInfoText>Count: {cookieData.count} Cookies</CookieInfoText>
            <CookieInfoText>Price: ${ cookieData.price}</CookieInfoText>
            <CookieInfoText>Layout: {cookieData.layout}</CookieInfoText>
            </CookieInfoWrapper>
            
            <PointsWrapper>
              <PointsPlus style={{color: cookieData.color}}>+</PointsPlus>
              <PointsText style={{color: cookieData.color}}>{cookieData.points} points</PointsText>
          </PointsWrapper>
          
          <ButtonWrapper>
            <BasicButton title='Add Product' onPress={handleBackToRewards} style={{width: "100%", height: 50, backgroundColor: "transparent"}} gradient/>
          </ButtonWrapper>
      </OverallWrapper>
      )}
    
    </>
    
  )
}

export default PurchaseFound