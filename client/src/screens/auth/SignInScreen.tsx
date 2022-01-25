import React, { FC, useContext } from 'react';
import { View, Text } from 'react-native';
import ScreenWrapperComp from '../../shared/ScreenWrapperComp';
import styled from "styled-components/native"
import { useForm} from "react-hook-form";
import { Black, Nunito, Poppins, Teal, Text300 } from '../../shared/colors';
import StyledTextInput from '../../components/Inputs/StyledTextInput';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CircleButton from '../../shared/CircleButton';
import { AuthContext } from '../../AppContext';


export const HeaderTextWrapper = styled.View`
  margin-top: 20%;
  width: 86%;
  justify-content: flex-start;
  align-items: flex-start;
`

export const HeaderText = styled.Text`
  font-family: ${Nunito};
  font-weight: 500;
  font-size: 28px;
  line-height: 33px;
  color: ${Black};
`

export const SubheaderText = styled.Text`
  margin-top: 20px;
  font-family: ${Poppins};
  font-size: 15px;
  line-height: 27px;
  color: ${Text300};
`

export const InputWrapper = styled.View`
  margin-top: 10%;
`

export const SmallInfo = styled.Text`
  font-family: ${Poppins};
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.2px;
  text-decoration-line: underline;
  color: ${Teal};
  margin-top: 12%;
`


export const SubmitButtonWrapper = styled.View`
  width: 100%;
  margin-top: 20%;
  justify-content: center;
  align-items: flex-end;
  margin-right: 35px; 
`

export const FooterWrapper = styled.View`
  align-items: flex-end;
  justify-content: flex-start;
  width: 85%;
  padding-bottom: 15%;
  flex-direction: row;
  flex: 1;
`

export const FooterText = styled.Text`
  font-family: ${Poppins};
  color: ${Text300};
  font-size: 14px;
  line-height: 27px;
`


export interface SignInFormProps {
  email: string;
  password: string;
}


const SignInScreen: FC<any> = ({ navigation }) => {
  
  const { signIn } = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<SignInFormProps>();

  const onSubmit = async (data: SignInFormProps) => { 
    console.log(data);

    const response = await signIn(data)
   
    if (response) {
      const errorConfig = {type: "manual", message: response}
      setError("password", errorConfig)
    } 
  }

  const forgotPassword = () => {
    navigation.navigate('ForgotPassword')
  }

  const SignUpPress = () => { 
    navigation.navigate('SignUpNav')
  }

  return (
    <ScreenWrapperComp scrollView>
      <HeaderTextWrapper>
        <HeaderText>
          Sign in
        </HeaderText>
        <SubheaderText>
          Welcome back
        </SubheaderText>
      </HeaderTextWrapper>

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

        <StyledTextInput
          hideText={true}
          error={errors.password}
          rules={{ required: "This field is required" }}
          control={control}
          placeHolderText="Password"
          name="password"
          icon="password"
        />
      </InputWrapper>

      <TouchableOpacity onPress={forgotPassword}>
        <SmallInfo>
          Forgot password?
        </SmallInfo>
      </TouchableOpacity>

      <SubmitButtonWrapper>
        <CircleButton onPress={handleSubmit(onSubmit)} />
      </SubmitButtonWrapper>

      <FooterWrapper>
        <FooterText>New member?</FooterText> 
        <TouchableOpacity onPress={SignUpPress}>
          <FooterText style={{ color: Teal, textDecorationLine: "underline" }}> Sign up</FooterText> 
        </TouchableOpacity>
      </FooterWrapper>
    </ScreenWrapperComp>
  )
}

export default SignInScreen;