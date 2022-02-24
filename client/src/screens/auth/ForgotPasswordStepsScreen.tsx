import React, { FC } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Black, NunitoBold } from '../../shared/colors';
import ScreenWrapperComp from '../../shared/ScreenWrapperComp';
import StepSection, { StepsSectionProps } from '../../components/authComps/SignInComps/StepSection';
import { useNavigation } from '@react-navigation/native';
import CircleButton from '../../shared/CircleButton';

const HeaderTextWrapper = styled.View`
  margin-top: 8%;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const HeaderText = styled.Text`
  font-family: ${NunitoBold};
  font-size: 22px;
  line-height: 33px;
  color: ${Black};
` 

const StepsWrapper = styled.View`
  margin-top: 2%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


const CircleButtonWrapper = styled.View`
  width: 100%;
  margin-top: 15%;
  justify-content: center;
  align-items: flex-end;
  margin-right: 35px; 
  margin-bottom: 10%;
`

const StepTexts: StepsSectionProps[] = [
  {
    step: 1,
    body: "Visit your email and find the one from Fortunate Cookies"
  },
  {
    step: 2,
    body: "Click the link in the email and you will be redirected to a website to change your password"
  },
  {
    step: 3,
    body: "Your Almost there! Just go back to the app and login with your new password"
  }
]
 
const ForgotPasswordStepsScreen: FC = () => {

  const navigation: any = useNavigation()
  const OnButtonClick = () => {
    navigation.navigate('SignIn')
  }

  return (
    <ScreenWrapperComp scrollView>
      <HeaderTextWrapper>
        <HeaderText>Forgot Password Successful</HeaderText>
      </HeaderTextWrapper>
      <StepsWrapper>
        {StepTexts.map(({ step, body }: StepsSectionProps, index) => { 
          return <StepSection key={index} step={step} body={body} />
        })}
      </StepsWrapper>

      <CircleButtonWrapper>
        <CircleButton onPress={OnButtonClick} />
      </CircleButtonWrapper>
    </ScreenWrapperComp>
  )
}

export default ForgotPasswordStepsScreen