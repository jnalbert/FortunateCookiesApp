import React, { FC } from 'react';
import { View,Text } from 'react-native';
import ScreenWrapperComp from '../../shared/ScreenWrapperComp';
import styled from 'styled-components/native';
import { HeaderText, SubheaderText } from './SignInScreen';
import { useForm } from 'react-hook-form';
import StyledTextInput from '../../components/Inputs/StyledTextInput';
import CircleButton from '../../shared/CircleButton';
import { useNavigation } from '@react-navigation/native';


const HeaderTextWrapper = styled.View`
  margin-top: 20%;
  width: 95%;
  justify-content: flex-start;
  align-items: flex-start;
`


const InputWrapper = styled.View`
  margin-top: 9%;
  padding-left: 8px;
  width: 106%;
` 

const CircleButtonWrapper = styled.View`
  width: 100%;
  margin-top: 20%;
  justify-content: center;
  align-items: flex-end;
  margin-right: 35px; 
`

interface ForgotPasswordForm {
  email: string;
  password: string;
}


const ForgotPasswordScreen: FC = () => {

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ForgotPasswordForm>();

  const navigation: any = useNavigation()
  
  const onSubmit = async (data: ForgotPasswordForm) => { 
    console.log(data);
  
    // Call forgot password function
    // const response = await signIn(data)
    const response = null;
   
    if (response) {
      const errorConfig = {type: "manual", message: response}
      setError("password", errorConfig)
    } else {
      navigation.navigate('ForgotPasswordSteps')
    } 

  }

  return (
    <ScreenWrapperComp>
      <HeaderTextWrapper>
        <HeaderText>Forgot Password?</HeaderText>
        <SubheaderText>Enter your email address</SubheaderText>

        <InputWrapper>
          <StyledTextInput
            hideText={false}
            error={errors.email}
            rules={{ required: "This field is required" }}
            control={control}
            placeHolderText="Email Address"
            name="email"
            icon="email"
          />
        </InputWrapper>

        <CircleButtonWrapper>
          <CircleButton onPress={handleSubmit(onSubmit)} />
        </CircleButtonWrapper>
      </HeaderTextWrapper>
    </ScreenWrapperComp>
  )
}

export default ForgotPasswordScreen

