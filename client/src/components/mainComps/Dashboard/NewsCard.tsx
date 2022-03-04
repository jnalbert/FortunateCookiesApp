import React, { FC } from 'react';
import { Linking, View } from 'react-native';
import styled from "styled-components/native"

import { Black, loadInBrowser, Nunito, Poppins, Text300 } from '../../../shared/colors';

const OverallCard = styled.TouchableOpacity`
  margin-right: 25px;

`

const NewsImage = styled.Image`
  width: 180px;
  height: 120px;
  border-radius: 20px;
  
`

const NewsTitle = styled.Text`
  margin-top: 10px;
  margin-bottom: 5px;
  font-family: ${Nunito};
  font-size: 18px;
  letter-spacing: -0.7px;
  color: ${Black};
`
const NewsSubtitle = styled.Text`
  font-family: ${Poppins};
  font-size: 13px;
  
  /* letter-spacing: -1.5px; */
  color: ${Text300};
`

export interface DataTypeNewsCard {
  src: string;
  thumbnail: string;
  title: string;
  date: string;
}

const NewsCard: FC<DataTypeNewsCard> = ({ src, title, date, thumbnail }) => {
  

  // console.log(thumbnail)

  return (
    <OverallCard onPress={() => {loadInBrowser(src)}}>
      <NewsImage source={{ uri: thumbnail }} style={{width: 180, height: 120}} />
      <NewsTitle>
        {title}
      </NewsTitle>
      <NewsSubtitle>
        {date}
      </NewsSubtitle>
    </OverallCard>
  )
}

export default NewsCard