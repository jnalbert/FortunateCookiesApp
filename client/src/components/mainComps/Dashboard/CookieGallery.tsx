import React, { FC, useEffect, useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { GetGalleryCookiesImg } from '../../../../firebase/FirestoreFunctions';
import IsLoadingComp from '../../../shared/IsLoadingComp';
import CookieCard, { CookieCardType } from './CookieCard';
import { NewsSliderWrapper, OverallSectionWrapper, SectionHeader, SectionHeaderWrapper } from './NewsSection';


const CookieGallery: FC = () => {

  // const cardsData: CookieCardType[] = [
  //   {
  //     src: "https://fortunatecookies.store/wp-content/uploads/elementor/thumbs/cropped-fortunate-cookies-logo-phm4tuehtem959d20btha2rgqjp22hfqd5681sxgog.png",
  //     name: "Lemon Poppy seed",
  //   }, 
  //   {
  //     src: "https://fortunatecookies.store/wp-content/uploads/elementor/thumbs/cropped-fortunate-cookies-logo-phm4tuehtem959d20btha2rgqjp22hfqd5681sxgog.png",
  //     name: "Lemon Poppy seed",
  //   }, 
  //   {
  //     src: "https://fortunatecookies.store/wp-content/uploads/elementor/thumbs/cropped-fortunate-cookies-logo-phm4tuehtem959d20btha2rgqjp22hfqd5681sxgog.png",
  //     name: "Lemon Poppy seed",
  //   }, 
  //   {
  //     src: "https://fortunatecookies.store/wp-content/uploads/elementor/thumbs/cropped-fortunate-cookies-logo-phm4tuehtem959d20btha2rgqjp22hfqd5681sxgog.png",
  //     name: "Lemon Poppy seed",
  //   }, 
  //   {
  //     src: "https://fortunatecookies.store/wp-content/uploads/elementor/thumbs/cropped-fortunate-cookies-logo-phm4tuehtem959d20btha2rgqjp22hfqd5681sxgog.png",
  //     name: "Lemon Poppy seed",
  //   }, 
  // ]

  const [cookieData, setCookieData] = useState<CookieCardType[]>([]);
  const [isLoading, setIsLoading] = useState(true);


  const GetData = async () => {
    const res: any = await GetGalleryCookiesImg()
    // console.log(res)
    setCookieData(res)
    setIsLoading(false)
  }

  useEffect(() => { 
    GetData()
  }, [])


  return (
    

    
    <OverallSectionWrapper>
      <SectionHeaderWrapper>
        <SectionHeader>News</SectionHeader>
        </SectionHeaderWrapper>
      <IsLoadingComp isLoading={isLoading}>
          <NewsSliderWrapper horizontal>
          {cookieData.map(({src, name}, index: number) => { 
            return <CookieCard src={src} name={name} key={index}/>
          })}
          </NewsSliderWrapper>
        </IsLoadingComp>
      </OverallSectionWrapper>
  )
}

export default CookieGallery