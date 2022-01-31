import React, { FC } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import CookieCard, { CookieCardType } from './CookieCard';
import { NewsSliderWrapper, OverallSectionWrapper, SectionHeader, SectionHeaderWrapper } from './NewsSection';


const CookieGallery: FC = () => {

  const cardsData: CookieCardType[] = [
    {
      src: "https://fortunatecookies.store/wp-content/uploads/elementor/thumbs/cropped-fortunate-cookies-logo-phm4tuehtem959d20btha2rgqjp22hfqd5681sxgog.png",
      name: "Lemon Poppy seed",
    }, 
    {
      src: "https://fortunatecookies.store/wp-content/uploads/elementor/thumbs/cropped-fortunate-cookies-logo-phm4tuehtem959d20btha2rgqjp22hfqd5681sxgog.png",
      name: "Lemon Poppy seed",
    }, 
    {
      src: "https://fortunatecookies.store/wp-content/uploads/elementor/thumbs/cropped-fortunate-cookies-logo-phm4tuehtem959d20btha2rgqjp22hfqd5681sxgog.png",
      name: "Lemon Poppy seed",
    }, 
    {
      src: "https://fortunatecookies.store/wp-content/uploads/elementor/thumbs/cropped-fortunate-cookies-logo-phm4tuehtem959d20btha2rgqjp22hfqd5681sxgog.png",
      name: "Lemon Poppy seed",
    }, 
    {
      src: "https://fortunatecookies.store/wp-content/uploads/elementor/thumbs/cropped-fortunate-cookies-logo-phm4tuehtem959d20btha2rgqjp22hfqd5681sxgog.png",
      name: "Lemon Poppy seed",
    }, 
  ]

  return (
    <OverallSectionWrapper>
      <SectionHeaderWrapper>
        <SectionHeader>News</SectionHeader>
      </SectionHeaderWrapper>
      <NewsSliderWrapper horizontal>
        {cardsData.map(({src, name}, index: number) => { 
          return <CookieCard src={src} name={name} key={index}/>
        })}
      </NewsSliderWrapper>
    </OverallSectionWrapper>
  )
}

export default CookieGallery