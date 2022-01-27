import React, { FC } from 'react';
import { View } from 'react-native';
import ScreenWrapperComp from '../../shared/ScreenWrapperComp';
import styled from 'styled-components/native';
import { Black, FrankFurter, Nunito } from '../../shared/colors';
import NewsSection from '../../components/mainComps/Dashboard/NewsSection';

const TopImageWrapper = styled.View`
  width: 115%;
  height: 200px;
  overflow: hidden;
  border-bottom-right-radius: 31px;
  border-bottom-left-radius: 31px;
`

const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 200px;
  opacity: 0.8;
  justify-content: center;
  align-items: center;

`
const OverlayTextWrapper = styled.View`
  width: 80%;
  align-items: center;
  justify-content: center;
`

const TopOverlayText = styled.Text`
  /* width: 80%; */
  font-family: ${Nunito};
  font-size: 20px;
  line-height: 34px;
  text-align: center;
  letter-spacing: -1.5px;
`



const DashBoardScreen: FC = () => {
  return (
    <ScreenWrapperComp scrollView>
      <TopImageWrapper>
        <BackgroundImage source={{ uri: "https://fortunatecookies.store/wp-content/uploads/2022/01/homepageHeader2.jpg" }}>
          <OverlayTextWrapper>
            <TopOverlayText>
              Through a modern take on the timeless fortune cookie, Fortunate Cookies provides customers with a fun and sustainable way to embrace and spread positivity.
            </TopOverlayText>
          </OverlayTextWrapper>
        </BackgroundImage>
      </TopImageWrapper>

      <NewsSection />
      
    </ScreenWrapperComp>
  )
}

export default DashBoardScreen