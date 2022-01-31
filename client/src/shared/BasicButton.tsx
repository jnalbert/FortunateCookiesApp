
import React, { FC } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Teal } from './colors';

const TouchableButtonWrapper = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 50px;
  background-color: ${Teal};
  border-radius: 16px;
  align-items: center;
  height: 50px;
`


const ButtonText = styled.Text`
  color: #FFFFFF;
  text-align: center;
  font-family: "PoppinsBold";
  font-size: 15px;
  font-weight: 600;
  line-height: 24px;
`
const PaddedView = styled.View`
  padding: 11px 0px;
`

interface BasicButtonProps {
  title: string
  onPress: () => void;
  style?: {};
  buttonTextStyle?: {};
}

const BasicButton: FC<BasicButtonProps> = ({title, onPress, style, buttonTextStyle}) => {
  return (
    <PaddedView>
      <TouchableButtonWrapper style={style} onPress={onPress}>
        <ButtonText style={buttonTextStyle} >{title}</ButtonText>
      </TouchableButtonWrapper>
  </PaddedView>
  )
}

export default BasicButton