import React, { FC, useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Black, FrankFurter } from "../../../shared/colors";
import NewsCard, { DataTypeNewsCard } from "./NewsCard";

const OverallSectionWrapper = styled.View`
  width: 100%;
  /* background-color: #f8e5e5; */
  margin-top: 4%;
`;

const SectionHeaderWrapper = styled.View`
  align-items: flex-start;
  padding-bottom: 3%;
`;

const SectionHeader = styled.Text`
  font-family: ${FrankFurter};
  font-size: 32px;
  line-height: 48px;
  letter-spacing: -1.5px;
  color: ${Black};
`;

const NewsSliderWrapper = styled.ScrollView`
  flex-direction: row;
  /* align-items: center; */
`;

const NewsSection: FC = () => {
  const data: DataTypeNewsCard[] = [
    {
      src: "https://fortunatecookies.store/wp-content/uploads/spotlight-insta/17951289550620268-m.jpg",
      title: "Employee of the Month",
      date: "February 20, 2022",
      writtenBy: "Marketing",
    },
    {
      src: "https://fortunatecookies.store/wp-content/uploads/spotlight-insta/17951289550620268-m.jpg",
      title: "Employee of the Month",
      date: "February 20, 2022",
      writtenBy: "Marketing",
    },
    {
      src: "https://fortunatecookies.store/wp-content/uploads/spotlight-insta/17951289550620268-m.jpg",
      title: "Employee of the Month",
      date: "February 20, 2022",
      writtenBy: "Marketing",
    },
  ];

  const [cardsData, SetCardsData] = useState<DataTypeNewsCard[] | null>(data);

  return (
    <OverallSectionWrapper>
      <SectionHeaderWrapper>
        <SectionHeader>News</SectionHeader>
      </SectionHeaderWrapper>
      <NewsSliderWrapper horizontal>
        {cardsData?.map(({src, title, date, writtenBy}: DataTypeNewsCard, index: number) => {
          return <NewsCard src={src} title={title} date={date} writtenBy={writtenBy} key={index}/>
        })}
      </NewsSliderWrapper>
    </OverallSectionWrapper>
  );
};

export default NewsSection;
