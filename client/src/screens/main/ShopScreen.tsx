import React, { FC } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import CookieShopSection from '../../components/mainComps/Shop/CookieShopSection';
import { GreenFor, Pink, Purple, Teal } from '../../shared/colors';
import ScreenWrapperComp from '../../shared/ScreenWrapperComp';

export interface CookieType {
  imageSrc: string;
  name: string;
  textStyle: {};
  imageStyle: {};
}

const CookiesData: CookieType[] = [
  {
    imageSrc: "https://fortunatecookies.store/wp-content/uploads/2022/01/loveFortune.png",
    name: "Love advice",
    textStyle: { color: Pink },
    imageStyle: {}
  },
  {
    imageSrc: "https://firebasestorage.googleapis.com/v0/b/fortunatecookies-4940a.appspot.com/o/DashBoardImgs%2FcookieDesigns%2FAffirmations.png?alt=media&token=b21ee7f5-59e6-483f-9b23-2c2072a2aac7",
    name: "Affirmations",
    textStyle: { color: Teal },
    imageStyle: {width: 130, height: 130}
  },
  {
    imageSrc: "https://fortunatecookies.store/wp-content/uploads/2022/01/jokesFortune.png",
    name: "Jokes",
    textStyle: { color: Purple },
    imageStyle: {width: 130, height: 130}
  },
  {
    imageSrc: "https://fortunatecookies.store/wp-content/uploads/2022/01/sustainabilityFortune.png",
    name: "Sustainability",
    textStyle: { color: GreenFor },
    imageStyle: {}
  },
]

const ShopScreen: FC = () => {
  return (
    <ScreenWrapperComp scrollView>
      {CookiesData.map(({ imageSrc, name, textStyle, imageStyle }: CookieType, index: number) => {
        return <CookieShopSection imageSrc={imageSrc} name={name} textStyle={textStyle} imageStyle={imageStyle} key={index}/>
      })}
    </ScreenWrapperComp>
  )
}

export default ShopScreen