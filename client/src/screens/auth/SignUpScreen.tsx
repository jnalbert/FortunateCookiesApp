import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ScreenWrapperComp from '../../shared/ScreenWrapperComp';
import { useForm } from 'react-hook-form';
import { HeaderTextWrapper, HeaderText, SubheaderText, InputWrapper, SmallInfo, SubmitButtonWrapper, FooterWrapper, FooterText } from './SignInScreen';
import StyledTextInput from '../../components/Inputs/StyledTextInput';
import { ScrollView } from 'react-native-gesture-handler';
import { StyledScrollView } from '../../shared/Styles';
import styled from 'styled-components/native';
import CircleButton from '../../shared/CircleButton';
import { backgroundColor, Teal } from '../../shared/colors';
import { AuthContext } from '../../AppContext';



const SubmitButton = styled(SubmitButtonWrapper)`
  margin-top: 13%;
  margin-bottom: 5%;
`

const NewFooterWrapper = styled(FooterWrapper)`
  /* height: 50%; */
`

export interface SignUpFormProps {
  name: string;
  phoneNumber: number;
  email: string;
  password: string;
}

const emailRegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;


const SignUpScreen: FC<any> = ({navigation}) => {
  const { signUp } = React.useContext(AuthContext);
  
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<SignUpFormProps>();

  const onSubmit = async (data: SignUpFormProps) => { 
    console.log(data);

    const response = await signUp(data)
   
    if (response) {
      const errorConfig = {type: "manual", message: response}
      setError("password", errorConfig)
    } 
  }

  const TOSPress = () => {
    navigation.navigate('TOS')
  }

  const SignInPress = () => { 
    navigation.navigate('SignInNav')
  }

  return (

    
    <ScreenWrapperComp scrollView>
      {/* <ScrollView style={{ width: "100%" }}> */}
    
      <HeaderTextWrapper>
        <HeaderText>
          Sign Up
        </HeaderText>
        <SubheaderText>
          Create an account here
        </SubheaderText>
      </HeaderTextWrapper>

      <InputWrapper>
        <StyledTextInput
          hideText={false}
          error={errors.name}
          rules={{ required: "This field is required" }}
          control={control}
          placeHolderText="Full Name"
          name="name"
          icon="name"
        />

        <StyledTextInput
          hideText={false}
          error={errors.phoneNumber}
          rules={{ required: "This field is required" }}
          control={control}
          placeHolderText="Mobile Number"
          name="phoneNumber"
          icon="PhoneNumber"
        />

        <StyledTextInput
          hideText={false}
          error={errors.email}
          rules={{ required: "This field is required", pattern:{value: emailRegExp, message: "Not a valid email"} }}
          control={control}
          placeHolderText="Email Address"
          name="email"
          icon="email"
        />

        <StyledTextInput
          hideText={true}
          error={errors.password}
          rules={{ required: "This field is required", minLength: {value: 6, message: "Password is too short"} }}
          control={control}
          placeHolderText="Password"
          name="password"
          icon="password"
        />
      </InputWrapper>
      
      <TouchableOpacity onPress={TOSPress}>
        <SmallInfo style={{fontSize: 12, marginTop: "3%"}}>
          By signing up you agree with our Terms of Use
        </SmallInfo>
      </TouchableOpacity>
        
      <SubmitButton>
        <CircleButton onPress={handleSubmit(onSubmit)} />
      </SubmitButton>
        
      <NewFooterWrapper>
        <FooterText>Already a member?</FooterText> 
        <TouchableOpacity onPress={SignInPress}>
          <FooterText style={{ color: Teal, textDecorationLine: "underline" }}> Sign in</FooterText> 
        </TouchableOpacity>
      </NewFooterWrapper>
      {/* </ScrollView> */}
      </ScreenWrapperComp>
      
    
  )
}

export default SignUpScreen;

