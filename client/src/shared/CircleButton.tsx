import React, { FC } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { Teal } from './colors';
import { AntDesign } from '@expo/vector-icons'; 

const ButtonWrapper = styled.View`
  align-items: center;
  justify-content: center;
  backgroundColor: ${Teal};
  width: 64px;
  height: 64px;
  border-radius: 32px;
`
const IconWrapper = styled.View`

`

interface CircleButtonProps { 
  onPress: () => void;
}

const CircleButton: FC<CircleButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ButtonWrapper>
        <IconWrapper>
          <AntDesign name="arrowright" size={32} color="white" />
        </IconWrapper>
      </ButtonWrapper>
    </TouchableOpacity>
  )
}

export default CircleButton
