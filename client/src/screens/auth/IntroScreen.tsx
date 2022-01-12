import React, { FC } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import ScreenWrapperComp from '../../shared/ScreenWrapperComp';

const WrapperView = styled.View`
  flex: 1;
  justify-content: center;
`

const IntroScreen: FC = () => {
  return (
    <ScreenWrapperComp>
      <WrapperView>
        <Text>This is the home</Text>
      </WrapperView>
    </ScreenWrapperComp>
  )
}

export default IntroScreen