import React, { FC } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import BasicButton from '../../../shared/BasicButton';
import { Black, FrankFurter, Nunito } from '../../../shared/colors';
import ScreenWrapperComp from '../../../shared/ScreenWrapperComp';
import { useNavigation } from '@react-navigation/native';

const OverallWrapper = styled.View`
  margin-top: 31%;
`

const ImageWrapper = styled.View`
  /* width: 90%; */
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

const CookieImage = styled.Image`
  align-self: center;
`

const OverallContentWrapper = styled.View`
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
`


const HeaderText = styled.Text`
  font-family: ${FrankFurter};
  color: ${Black};
  font-size: 35px;
  line-height: 48px;
  letter-spacing: -1.5px;
`

const SubHeaderWrapper = styled.View`
  width: 70%;
`

const SecondHeader = styled.Text`
  margin-top: 28px;
  font-family: ${Nunito};
  color: ${Black};
  font-size: 27px;
line-height: 40px;
/* or 148% */

text-align: center;
letter-spacing: -1.5px;
`

const FinalHeader = styled.Text`
  margin-top: 28px;
  font-family: ${Nunito};
  color: ${Black};
  font-size: 24px;
line-height: 40px;
/* or 167% */

text-align: center;
letter-spacing: -1.5px;
`

const ButtonWrapper = styled.View`
  margin-top: 13%;
  width: 80%;
  align-self: center;
`

const ClaimRewardScreen: FC = () => { 

  const navigator: any = useNavigation()

  const goBackToRewards = () => {
    navigator.push("Rewards")
  }
return (
  <ScreenWrapperComp scrollView>
    <OverallWrapper>
      <ImageWrapper>
        <CookieImage source={{ uri: "https://fortunatecookies.store/wp-content/uploads/2022/01/logo2-e1641689287720.png" }} style={{ height: 210, width: 210 }} />
      </ImageWrapper>

      <OverallContentWrapper>
        <HeaderText>
          congratulations
        </HeaderText>

        <SubHeaderWrapper>
          <SecondHeader>
            You have Earned a Free Cookie!
          </SecondHeader>
          <FinalHeader>
            Check you email to retrieve your reward
          </FinalHeader>
        </SubHeaderWrapper>

        <ButtonWrapper>
          <BasicButton title="Back to Rewards" onPress={goBackToRewards} style={{ width: "100%", height: 50, backgroundColor: "transparent" }} gradient />
        </ButtonWrapper>
      </OverallContentWrapper>
    </OverallWrapper>
  </ScreenWrapperComp>

)
}

export default ClaimRewardScreen