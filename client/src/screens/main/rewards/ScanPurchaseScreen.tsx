import React, { FC, useState,  } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import ScreenWrapperComp from '../../../shared/ScreenWrapperComp';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { Black, FrankFurter, Text300 } from '../../../shared/colors';
import { useNavigation } from '@react-navigation/native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import BasicButton from '../../../shared/BasicButton';
import { ErrorText } from '../../../shared/Styles';
import { isCodeValid } from '../../../../firebase/FirestoreFunctions';





const CodeInputWrapper = styled.View`
  justify-content: center;
  align-items: center;
`

const HeaderWrapper = styled.View`
  padding-top: 40%;
  justify-content: center;
  padding-bottom: 15%;
`

const HeaderText = styled.Text`
  font-family: ${FrankFurter};
  color: ${Black};
  font-size: 30px;
`

const ErrorTextWrapper = styled.View`
  margin-top: 8px;
`


const ButtonWrapper = styled.View`

  padding-top: 10%;
  width: 220px;
  /* width: 100%; */
  justify-content: center;
`

const CODE_LENGTH = 5;



const ScanPurchaseScreen: FC = () => {
  const navigator: any = useNavigation()

  const [code, setCode] = useState('')
  const [errorMessage, setErrorMessage] = useState("")

  const ProceedToNextScreen = async () => {
    if (code) {
      const message = await isCodeValid(code);
      if (message) { 
        setErrorMessage(message)
        return;
      }
  
      navigator.navigate("ConfirmPurchase", code)
    }

    setErrorMessage("Please enter a code")
   
    // // *** DEV MODE ***
    // setCode("28239")
    // // TURN OFF WHEN NOT USING

    // console.log(code);
    
    
  }

  return (
    <ScreenWrapperComp>
      <HeaderWrapper>
        <HeaderText>Enter Your Code!</HeaderText>
      </HeaderWrapper>
      <CodeInputWrapper>
        <OTPInputView
          style={{ width: "95%", height: 100 }}
          pinCount={CODE_LENGTH}
          codeInputHighlightStyle={{
            borderColor: Text300,
            width: 55,
            height: 75,
            borderRadius: 10
          }}
          autoFocusOnLoad={false}
          codeInputFieldStyle={{ color: Black, width: 55, height: 75, borderRadius: 10, fontSize: 24 }}
          onCodeFilled={(code) => { 
            setCode(code)
          }}
        />
      </CodeInputWrapper>

      <ErrorTextWrapper>
        <ErrorText>{errorMessage}</ErrorText>
      </ErrorTextWrapper>

      <ButtonWrapper>
        <BasicButton title='Search Reward' onPress={ProceedToNextScreen} style={{width: "100%", height: 50, backgroundColor: "transparent"}} gradient/>
      </ButtonWrapper>

    </ScreenWrapperComp>
  )
}

export default ScanPurchaseScreen