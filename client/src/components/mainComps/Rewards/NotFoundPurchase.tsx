import React, { FC } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import BasicButton from '../../../shared/BasicButton';
import { Black, FrankFurter, Poppins } from '../../../shared/colors';
import { useNavigation } from '@react-navigation/native';

const OverallWrapper = styled.View`
  /* padding-top: 40%; */
  height: 100%;
  justify-content: center;
  /* align-items: center; */
`

const HeaderWrapper = styled.View`
  justify-content: center;
  align-items: center;
`

const HeaderText = styled.Text`
  font-family: ${FrankFurter};
  color: ${Black};
  font-size: 30px;
  padding-bottom: 25px;
`

const SubheaderText = styled.Text`
  font-family: ${Poppins};
  font-size: 20px;
  color: ${Black};
`

const ButtonWrapper = styled.View`
  justify-content: center;
  padding-top: 50px;
`

const NotFoundPurchase: FC = () => {

  const navigator: any = useNavigation()

  const goBackToEnter = () => {
    navigator.navigate("ScanPurchase")
  }

  return (
    <OverallWrapper>

      <HeaderWrapper>
        <HeaderText>Code Not Found</HeaderText>
        <SubheaderText>Please renter the code</SubheaderText>
      </HeaderWrapper>

      <ButtonWrapper>
        <BasicButton title='Enter New Code' onPress={goBackToEnter} style={{width: "100%", height: 50, backgroundColor: "transparent"}} gradient/>
      </ButtonWrapper>
    </OverallWrapper>
  )
}

export default NotFoundPurchase