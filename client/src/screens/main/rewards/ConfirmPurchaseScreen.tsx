import React, { FC, useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import ScreenWrapperComp from "../../../shared/ScreenWrapperComp";
import styled from "styled-components/native";
import NotFoundPurchase from "../../../components/mainComps/Rewards/NotFoundPurchase";
import PurchaseFound from "../../../components/mainComps/Rewards/PurchaseFound";


const LoadingWrapper = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

interface Props {
  route: any;
}


const ConfirmPurchaseScreen: FC<Props> = ({ route }) => {
  const code = route.params;
  
  const [isCodeValid, setIsCodeValid] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => { 
    // logic to check if is correct
    const isValid = true;
    
    setIsCodeValid(isValid)
    setIsLoading(false)
   

  }, [])
  // console.log(code);
  return (
    <ScreenWrapperComp scrollView>
      {isLoading ?
        <LoadingWrapper>
          <ActivityIndicator size={"large"} /> 
        </LoadingWrapper>
        :
        (<>
          {isCodeValid ? <PurchaseFound code={code}/> : <NotFoundPurchase />}
        </>
        )
      }
   

    </ScreenWrapperComp>
  );
};

export default ConfirmPurchaseScreen;
