import React, { FC, useState, useEffect } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Black, FrankFurter } from "../../../shared/colors";
import NewsCard, { DataTypeNewsCard } from "./NewsCard";
import { GetNewsFeedData } from '../../../../firebase/FirestoreFunctions';
import IsLoadingComp from "../../../shared/IsLoadingComp";


export const OverallSectionWrapper = styled.View`
  width: 100%;
  /* background-color: #f8e5e5; */
  margin-top: 4%;
`;

export const SectionHeaderWrapper = styled.View`
  align-items: flex-start;
  padding-bottom: 3%;
`;

export const SectionHeader = styled.Text`
  font-family: ${FrankFurter};
  font-size: 32px;
  line-height: 48px;
  letter-spacing: -1.5px;
  color: ${Black};
`;

export const NewsSliderWrapper = styled.ScrollView`
  flex-direction: row;
  /* align-items: center; */
`;

const NewsSection: FC = () => {
  // const data: DataTypeNewsCard[] = [
  //   {
  //     src: "https://fortunatecookies.store/wp-content/uploads/spotlight-insta/17951289550620268-m.jpg",
  //     title: "Employee of the Month",
  //     date: "February 20, 2022",
  //     clickSrc: "https://fortunatecookies.store/wp-content/uploads/2022/01/Winter-2021-Newsletter-1.pdf"
  //   },
  //   {
  //     src: "https://fortunatecookies.store/wp-content/uploads/spotlight-insta/17951289550620268-m.jpg",
  //     title: "Employee of the Month",
  //     date: "February 20, 2022",
  //     clickSrc: "https://fortunatecookies.store/wp-content/uploads/2022/01/Winter-2021-Newsletter-1.pdf"

  //   },
  //   {
  //     src: "https://fortunatecookies.store/wp-content/uploads/spotlight-insta/17951289550620268-m.jpg",
  //     title: "Employee of the Month",
  //     date: "February 20, 2022",
  //     clickSrc: "https://fortunatecookies.store/wp-content/uploads/2022/01/Winter-2021-Newsletter-1.pdf"

  //   },
  // ];

  const [cardsData, SetCardsData] = useState<DataTypeNewsCard[] | null>();
  const [isLoading, setIsLoading] = useState(true);
  


  const getNewDataRequest = async () => { 
    try {
      const response = await GetNewsFeedData();
      await SetCardsData(response);
      // changeDownloadUrl();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getNewDataRequest()
  }, [])

  return (
    <OverallSectionWrapper>
      <SectionHeaderWrapper>
        <SectionHeader>News</SectionHeader>
      </SectionHeaderWrapper>
      <IsLoadingComp isLoading={isLoading}>
        <NewsSliderWrapper horizontal>
          {cardsData?.map(({ src, title, date, thumbnail }: DataTypeNewsCard, index: number) => {
            return <NewsCard src={src} thumbnail={thumbnail} title={title} date={date} key={index}/>
          })}
        </NewsSliderWrapper>
      </IsLoadingComp>
    </OverallSectionWrapper>
  );
};

export default NewsSection;
