import React, { FC } from 'react';
import { View } from 'react-native';
import ScreenWrapperComp from '../../shared/ScreenWrapperComp';
import styled from 'styled-components/native';
import { Black, FrankFurter, Nunito, Poppins } from '../../shared/colors';
import NewsSection, { SectionHeader } from '../../components/mainComps/Dashboard/NewsSection';
import { SectionHeaderWrapper } from '../../components/mainComps/Dashboard/NewsSection';
import CookieGallery from '../../components/mainComps/Dashboard/CookieGallery';

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

const SectionWrapper = styled.View`
  width: 100%;
  /* background-color: #f8e5e5; */
  margin-top: 6%;
`

const BodyText = styled.Text`
  font-family: ${Poppins};
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.5px;
  color: ${Black};
  margin-left: 6px;
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

      <SectionWrapper>
        <SectionHeaderWrapper>
          <SectionHeader>Our Company</SectionHeader>
        </SectionHeaderWrapper>
        <BodyText>
        Fortunate Cookies looks to reinvent the out-of-touch fortunate cookie designs by putting a new age spin on an old sweet treat. We provide our customers with fun and interesting experiences through both helpful fortunes and pieces of advice. Upon opening our delicious sweet treats, you will feel no other option but to crack open a smile.
        </BodyText>
      </SectionWrapper>

      <CookieGallery/>
    </ScreenWrapperComp>
  )
}

export default DashBoardScreen