import { useNavigation } from "@react-navigation/native";
import React, { FC, useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import BasicButton from "../../../shared/BasicButton";
import { Black, FrankFurter, Nunito } from "../../../shared/colors";
import CookiePurchaseSection, { CookieDataType } from "./CookiePurchaseSection";
import { _getStoredUuid } from '../../../AppContext';
import { addOrderToProfile } from "../../../../firebase/FirestoreFunctions";

const LoadingWrapper = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const OverallWrapper = styled.View`
  /* width: 100%; */
  margin-top: 25%;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.View`
  justify-content: center;
  width: 250px;
  padding-top: 10px;
`;

interface Props {
  purchaseData: CookieDataType[];
  code: string
}

const PurchaseFound: FC<Props> = ({ purchaseData, code }) => {
  const [cookieData, setCookieData] = useState<CookieDataType[]>([
    {
      name: "",
      count: 0,
      price: 0,
      layout: "",
      points: 0,
      imgSrc: "",
      color: "",
      date: "",
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    // Get cookie data from backend
    // const cookieData: CookieDataType[] = [
    //   {
    //     name: "Love Advice",
    //     count: 96,
    //     price: 199.99,
    //     layout: "4 x 8 x 3",
    //     points: 100,
    //     imgSrc:
    //       "https://fortunatecookies.store/wp-content/uploads/2022/01/loveFortune.png",
    //     color: "#FF70A0",
    //   },
    //   {
    //     name: "Love Advice",
    //     count: 96,
    //     price: 199.99,
    //     layout: "4 x 8 x 3",
    //     points: 100,
    //     imgSrc:
    //       "https://fortunatecookies.store/wp-content/uploads/2022/01/loveFortune.png",
    //     color: "#FF70A0",
    //   },
    //   {
    //     name: "Love Advice",
    //     count: 96,
    //     price: 199.99,
    //     layout: "4 x 8 x 3",
    //     points: 100,
    //     imgSrc:
    //       "https://fortunatecookies.store/wp-content/uploads/2022/01/loveFortune.png",
    //     color: "#FF70A0",
    //   },
    // ];
    // setCookieData(cookieData);
    setCookieData(purchaseData);


    setIsLoading(false);
  }, []);

  const navigator: any = useNavigation();
  const handleBackToRewards = async () => {

    setIsDisabled(true)
    const uuid = await _getStoredUuid();
    await addOrderToProfile(uuid as string, purchaseData, code)

    navigator.push("Rewards");
  };

  return (
    <>
      {isLoading ? (
        <LoadingWrapper>
          <ActivityIndicator size={"large"} />
        </LoadingWrapper>
      ) : (
        <OverallWrapper>
            {cookieData.map(
            (
              {
                name,
                count,
                price,
                layout,
                points,
                imgSrc,
                color,
                date,
              }: CookieDataType,
              index: number
              ) => {
              return (
                <CookiePurchaseSection
                  date={date}
                  name={name}
                  count={count}
                  price={price}
                  layout={layout}
                  points={points}
                  imgSrc={imgSrc}
                  color={color}
                  key={index}
                />
              );
            }
          )}
          <ButtonWrapper>
            <BasicButton
                title="Add Product"
                isDisabled={isDisabled}
              onPress={handleBackToRewards}
              style={{
                width: "100%",
                height: 50,
                backgroundColor: "transparent",
              }}
              gradient
            />
          </ButtonWrapper>
        </OverallWrapper>
      )}
    </>
  );
};

export default PurchaseFound;
