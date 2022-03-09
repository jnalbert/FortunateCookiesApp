import React, { FC, useState,  } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import ScreenWrapperComp from '../../../shared/ScreenWrapperComp';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { Black, FrankFurter, Text300 } from '../../../shared/colors';
import { useNavigation } from '@react-navigation/native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import BasicButton from '../../../shared/BasicButton';





const CodeInputWrapper = styled.View`
  
`

const HeaderWrapper = styled.View`
  padding-top: 40%;
  justify-content: center
`

const HeaderText = styled.Text`
  font-family: ${FrankFurter};
  color: ${Black};
  font-size: 30px;
`
const ButtonWrapper = styled.View`
  /* padding-top: 10%; */
  width: 220px;
  /* width: 100%; */
  justify-content: center;
`

const CODE_LENGTH = 5;



const ScanPurchaseScreen: FC = () => {
  const navigator: any = useNavigation()

  const [code, setCode] = useState('')

  const ProceedToNextScreen = async () => {

    // // *** DEV MODE ***
    setCode("34556")
    // // TURN OFF WHEN NOT USING

    // console.log(code);
    if (code) {
      navigator.navigate("ConfirmPurchase", code)
    }
    
  }

  return (
    <ScreenWrapperComp>
      <HeaderWrapper>
        <HeaderText>Enter Your Code!</HeaderText>
      </HeaderWrapper>
      <CodeInputWrapper>
        <OTPInputView
          style={{ width: "95%", height: 200 }}
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

      <ButtonWrapper>
        <BasicButton title='Search Reward' onPress={ProceedToNextScreen} style={{width: "100%", height: 50, backgroundColor: "transparent"}} gradient/>
      </ButtonWrapper>

    </ScreenWrapperComp>
  )
}

export default ScanPurchaseScreen