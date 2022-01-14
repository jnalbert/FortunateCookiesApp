import React, { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import styled from 'styled-components/native';
import { FrankFurter } from '../../../shared/colors';

const OverallWrapper = styled.View`
  flex: 1;

`

const ImageWrapper = styled.View`
  align-items: center;
  justify-content: center;
  width: 375px;
  height: 320px;
`

const CardImage = styled.Image`

`

const Header1Text = styled.Text`
  font-family: ${FrankFurter}
`


interface CarouselCardCompProps {
  imgUrl: string;
  header: string;
  subHeader: string;
  number: number;
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "contain",
  },
});

const CarouselCardComp: FC<CarouselCardCompProps> = ({imgUrl, header, subHeader, number}) => {
  return (
    <OverallWrapper>
      <ImageWrapper>
        <CardImage source={{ uri: imgUrl}} style={[styles.image, , {width: 375, height: 320} ]} />
        <Header1Text>{header}</Header1Text>
      </ImageWrapper>
    </OverallWrapper>
  )
}

export default CarouselCardComp