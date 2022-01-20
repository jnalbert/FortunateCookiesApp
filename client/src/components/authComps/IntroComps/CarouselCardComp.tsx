import React, { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import styled from 'styled-components/native';
import { Nunito, Poppins, Text300 } from '../../../shared/colors';

const OverallWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`

const ImageWrapper = styled.View`
  width: 80%;
  height: 60%;
`

const CardImage = styled.Image`
  width: 100%;
  height: 100%;
`

const Header1Text = styled.Text`
  font-family: ${Nunito};
  font-size: 26px;
  line-height: 38px;
  text-align: center;
`

const SubHeaderText = styled.Text`
  margin-top: 10px;
  font-family: ${Poppins};
  color: ${Text300};
  font-size: 16px;
  line-height: 35px;
  text-align: center;
`

const TextWrapper = styled.View`
  align-items: center;
  margin-top: 5%;
  max-width: 80%;
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

const CarouselCardComp: FC<CarouselCardCompProps> = ({ imgUrl, header, subHeader, number }) => {
  
 
  return (
    <OverallWrapper>
      <ImageWrapper>
        <CardImage source={{ uri: imgUrl}} style={[styles.image, ]} />
        
      </ImageWrapper>
      <TextWrapper>
        <Header1Text>{header}</Header1Text>
        <SubHeaderText>{subHeader}</SubHeaderText>
      </TextWrapper>
      
    </OverallWrapper>
  )
}

export default CarouselCardComp