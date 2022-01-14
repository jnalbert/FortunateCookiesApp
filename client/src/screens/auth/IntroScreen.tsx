import React, { FC } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import CarouselCardComp from '../../components/authComps/IntroComps/CarouselCardComp';
import ScreenWrapperComp from '../../shared/ScreenWrapperComp';

const CarouselWrapper = styled.View`
  flex: 1;
  margin-top: 30px;
`


const IntroScreen: FC = () => {

  

  return (
    <ScreenWrapperComp>
      <CarouselWrapper>
        <CarouselCardComp imgUrl="http://fortunatecookies.store/wp-content/uploads/2022/01/loveFortune.png" header="Stuff About Business" subHeader="SubHeader About business" number={0}/>
      </CarouselWrapper>
    </ScreenWrapperComp>
  )
}

export default IntroScreen