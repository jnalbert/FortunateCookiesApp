import React, { FC } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Nunito } from '../../../shared/colors';

const OverallCard = styled.View`
  margin-right: 25px;
`

const CookieImage = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 20px;
`

const Title = styled.Text`
  font-family: ${Nunito};
  font-size: 15px;
  line-height: 17px;
  letter-spacing: 0.5px;
  max-width: 90px;
  margin-top: 8px;
`

export interface CookieCardType {
  src: string;
  name: string;
}

const CookieCard: FC<CookieCardType> = ({src, name}) => {
  return (
    <OverallCard>
      <CookieImage source={{ uri: src }} style={{ width: 90, height: 90 }}></CookieImage>
      <Title>{name}</Title>
    </OverallCard>
  )
}

export default CookieCard