import React, { FC } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { CookieType } from "../../../screens/main/ShopScreen";
import BasicButton from "../../../shared/BasicButton";
import { Black, FrankFurter, loadInBrowser, Poppins, Text500 } from "../../../shared/colors";

const OverallWrapper = styled.View`
  flex-direction: column;
  width: 100%;
  margin: 13px 0px;
  /* justify-content: center; */
  align-items: center;
`;
const TopOverallWrapper = styled.View`
  flex-direction: row;
`;

const ImageWrapper = styled.View`
  width: 140px;
  height: 140px;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`;

const CookieImage = styled.Image`
  width: 130px;
  height: 130px;
`;

const CenterWrapper = styled.View`
  justify-content: center;
  width: 56%;
`

const PriceWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const PriceSection = styled.View`
  flex-direction: column;
  margin: 10px 0px;
`;

const PriceType = styled.Text`
  font-size: 15.5px;
  font-family: "PoppinsBold";
  /* line-height: 24px; */
  letter-spacing: -0.25px;
  color: ${Text500};
`;

const PriceSub = styled.Text`
  font-size: 14px;
  font-family: ${Poppins};
  line-height: 20px;
  color: ${Black};
`;

const BottomOverallWrapper = styled.View`
  flex-direction: row;
  /* align-items: center; */
`;

const TitleWrapper = styled.View`
  justify-content: center;
  align-items: flex-start;
  width: 80%;
  padding-left: 15px;
`

const CookieName = styled.Text`
  font-size: 19px;
  font-family: ${FrankFurter};
  line-height: 28px;
  letter-spacing: 1px;
`

const BuyButtonWrapper = styled.View`
  align-items: flex-end;
  justify-content: center;
  width: 20%;
  padding-right: 3px;
`

const BorderBottom = styled.View`
  margin-top: 8px;
  border-bottom-width: 1px;
  border-color: ${"#E7ECF3"};
  width: 85%;
`


interface PriceInt {
  type: string;
  price: number;
}

const Prices: PriceInt[] = [
  {
    type: "16 Cookies",
    price: 22.99,
  },
  {
    type: "24 Cookies",
    price: 42.99,
  },
  {
    type: "48 Cookies",
    price: 74.99,
  },
  {
    type: "96 Cookies",
    price: 139.99,
  },
];

const CookieShopSection: FC<CookieType> = ({
  imageSrc,
  name,
  textStyle,
  imageStyle,
}) => {
  return (
    <OverallWrapper>
      <TopOverallWrapper>
        <ImageWrapper>
          <CookieImage source={{ uri: imageSrc }} style={imageStyle}/>
        </ImageWrapper>

        <CenterWrapper>
          <PriceWrapper>
            {Prices.map(({ type, price }: PriceInt, index: number) => {
              return (
                <PriceSection key={index}>
                  <PriceType>{type}</PriceType>
                  <PriceSub>$ {price}</PriceSub>
                </PriceSection>
              );
            })}
          </PriceWrapper>
        </CenterWrapper>

      </TopOverallWrapper>

      <BottomOverallWrapper>
        <TitleWrapper>
          <CookieName style={textStyle}>{name}</CookieName>
        </TitleWrapper>

        <BuyButtonWrapper>
          <BasicButton title="Buy Now" onPress={() => loadInBrowser("https://fortunatecookies.store/store")} style={{width: 90, height: 43}}/>
        </BuyButtonWrapper>

      </BottomOverallWrapper>
      <BorderBottom></BorderBottom>
    </OverallWrapper>
  );
};

export default CookieShopSection;
