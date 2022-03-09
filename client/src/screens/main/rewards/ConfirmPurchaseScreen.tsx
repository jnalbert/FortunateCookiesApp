import React, { FC, useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import ScreenWrapperComp from "../../../shared/ScreenWrapperComp";
import styled from "styled-components/native";
import NotFoundPurchase from "../../../components/mainComps/Rewards/NotFoundPurchase";
import PurchaseFound from "../../../components/mainComps/Rewards/PurchaseFound";
import { getPurchaseDataWithCode } from "../../../../firebase/FirestoreFunctions";
import { CookieDataType } from "../../../components/mainComps/Rewards/CookiePurchaseSection";


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
  const [purchaseData, setPurchaseData] = useState<CookieDataType[]>([]);
  
  const getData = async () => {
    const purchaseData: any = await getPurchaseDataWithCode(code);
    // console.log(purchaseData, "HERE");
    if (!purchaseData) { 
      setIsCodeValid(false)
    } else {
      setIsCodeValid(true)
      setPurchaseData(purchaseData);
    
    }
    setIsLoading(false)
  }

  useEffect(() => { 
    // logic to check if is correct
    getData()
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
          {isCodeValid ? <PurchaseFound purchaseData={purchaseData}/> : <NotFoundPurchase />}
        </>
        )
      }
   

    </ScreenWrapperComp>
  );
};

export default ConfirmPurchaseScreen;
