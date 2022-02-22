import React, { FC } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Black, borderColor, GreenFor, Nunito, Poppins, Text300 } from '../../../shared/colors';
import { Controller, useForm} from "react-hook-form";
import StyledTextInput from '../../Inputs/StyledTextInput';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ErrorText } from '../../../shared/Styles';
import BasicButton from '../../../shared/BasicButton';

const OverallWrapper = styled.View`
  width: 95%;
`

const HeaderTextWrapper = styled.View`
  margin-top: 10%;
  width: 86%;
  justify-content: flex-start;
  align-items: flex-start;
`

const HeaderText = styled.Text`
  font-family: ${Nunito};
  font-weight: 500;
  font-size: 28px;
  line-height: 33px;
  color: ${Black};
`

const SubheaderText = styled.Text`
  margin-top: 20px;
  font-family: ${Poppins};
  font-size: 15px;
  line-height: 27px;
  color: ${Text300};
`


const InputsWrapper = styled.View`
  margin-top: 10%;
`

const BodyInputText = styled.TouchableOpacity`
  border-color: ${borderColor};
  border-width: 1px;
  border-radius: 15px;
  width: 92%;
  height: 150px;
  padding: 6px;
`

const TextAboveBodyInput = styled.Text`
  font-family: ${Nunito};
  font-weight: 500;
  font-size: 15px;
  line-height: 33px;
  color: ${Black};
  padding-top: 15px;
  padding-left: 7px;
  padding-bottom: 3px;
`

const BodyInputTextStyled = styled.TextInput`
  height: 150px;
`

const ButtonWrapper = styled.View`
  justify-content: center;
  align-items: center;
  padding-top: 3%;
`

const ThankYouText = styled.Text`
  align-self: center;
  margin-top: 10%;
  font-family: ${Poppins};
  font-size: 16px;
  color: ${GreenFor}  
`

export interface WriteProps {
  email: string;
  body: string;
}

interface Props {
  header: string;
  subHeader: string;
  type: "review" | "suggestion";
}

const ContactComp: FC<Props> = ({header, subHeader, type}) => {

  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<WriteProps>();

  const onSubmit = async (data: WriteProps) => { 
    console.log(data);
    console.log('type', type)

    // call function and pass in what type of thing it is
    reset({
      body: '',
      email: '',
    })
    setIsSubmitted(true);
  }

  return (
    <OverallWrapper>
      <HeaderTextWrapper>
        <HeaderText>{header}</HeaderText>
        <SubheaderText>{subHeader}</SubheaderText>
      </HeaderTextWrapper>
      <InputsWrapper>
        <StyledTextInput
          hideText={false}
          styles={{width: "90%"}}
           error={errors.email}
           rules={{ required: "This field is required" }}
           control={control}
           placeHolderText="Email Address"
           name="email"
           icon="email"
        />

  
        <TextAboveBodyInput>Write Here</TextAboveBodyInput>
        <Controller
          control={control}
          rules={{ required: "This field is required" }}
          name="body"
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <BodyInputText>
                <BodyInputTextStyled
                  placeholder={"Write Here!"}
                  placeholderTextColor={Text300}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  multiline={true}
                />
              </BodyInputText>
            );
          }}
        />

        {errors.body && <ErrorText>{errors.body.message}</ErrorText>}
        
      </InputsWrapper>

      {isSubmitted && <ThankYouText>Thank you for your feedback!</ThankYouText>}
      <ButtonWrapper>
        <BasicButton style={{width: 200}} title='Submit' onPress={handleSubmit(onSubmit)}/>
      </ButtonWrapper>
    </OverallWrapper>
  )
}

export default ContactComp