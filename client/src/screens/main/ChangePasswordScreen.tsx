import React, { FC, useEffect, useState } from 'react';
import { View } from 'react-native';
import ScreenWrapperComp from '../../shared/ScreenWrapperComp';
import styled from 'styled-components/native';
import { useForm } from 'react-hook-form';
import { HeaderTextWrapper, HeaderText, SubheaderText, InputWrapper, SubmitButtonWrapper } from '../auth/SignInScreen';
import StyledTextInput from '../../components/Inputs/StyledTextInput';
import CircleButton from '../../shared/CircleButton';
import ActionCompletedSection from '../../shared/ActionCompletedSection';
import { _getStoredUuid } from '../../AppContext';
import { ChangePassword, ReauthenticateUser } from '../../../firebase/FirestoreFunctions';


export interface ChangePasswordFormProps {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const ChangePasswordScreen: FC<any> = ({navigation}) => {

  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
    clearErrors
  } = useForm<ChangePasswordFormProps>();

  const onSubmit = async (data: ChangePasswordFormProps) => {
    // console.log(data)
    const res = await ChangePassword(data.newPassword)
    if (res) {
      console.log(res)
    } else {
      setIsSubmitted(true);
    }
    
  };

  const handledButtonPress = async () => {
    const {oldPassword, newPassword, confirmPassword} = getValues();

    // call function to validate password here instead of hard code
    const res = await ReauthenticateUser(oldPassword);

    if (res === "wrongPass") {
      setError("oldPassword", { type: "manual", message: "Incorrect Password" })
      
    }
    else if (newPassword !== confirmPassword) {

      const errorConfig = {type: "manual", message: "Passwords do not match"}
      setError("newPassword", errorConfig)
      setError("confirmPassword", errorConfig)

    } else {
      handleSubmit(onSubmit)()
    }
  }
  
  useEffect(() => {
    console.log("worked")
    clearErrors("oldPassword")
  }, [getValues("oldPassword")])

  const goBackToSettings = () => {
    navigation.navigate("Profile", {screen: "Profile"})
  }


  return (
    <>
      {isSubmitted && <ActionCompletedSection visible={isSubmitted} title="Password Changed" subheading={"Your password has successfully been changed"} buttonTitle="Return To Settings" buttonOnPress={goBackToSettings} />}
    <ScreenWrapperComp scrollView>
      <HeaderTextWrapper>
        <HeaderText>
          Change Your Password
        </HeaderText>
        <SubheaderText>
          Forgot you password? No worries!
        </SubheaderText>
      </HeaderTextWrapper>

      <InputWrapper>
        <StyledTextInput
          hideText={true}
          error={errors.oldPassword}
          rules={{ required: "This field is required" }}
          control={control}
          placeHolderText="Old Password"
          name="oldPassword"
          icon="password"
        />

        <StyledTextInput
          hideText={true}
          error={errors.newPassword}
          rules={{ required: "This field is required" }}
          control={control}
          placeHolderText="New Password"
          name="newPassword"
          icon="password"
          />
          
          <StyledTextInput
          hideText={true}
          error={errors.confirmPassword}
          rules={{ required: "This field is required" }}
          control={control}
          placeHolderText="Confirm Password"
          name="confirmPassword"
          icon="password"
        />
      </InputWrapper>

      <SubmitButtonWrapper>
        <CircleButton onPress={handleSubmit(handledButtonPress)} />
      </SubmitButtonWrapper>

    </ScreenWrapperComp>
    </>
  )
}

export default ChangePasswordScreen