import { useNavigation } from '@react-navigation/native';
import React, { FC, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styled from 'styled-components/native';
import CarouselCardComp from '../../components/authComps/IntroComps/CarouselCardComp';
import CircleButton from '../../shared/CircleButton';
import { Pink, Text400 } from '../../shared/colors';
import ScreenWrapperComp from '../../shared/ScreenWrapperComp';

const CarouselWrapper = styled.View`
  flex: 1;
  margin-top: 3%;
  max-height: 79%;
`

const ForwardButtonWrapper = styled.View`
  align-items: flex-end;
  margin-right: 35px;
  align-items: flex-end;
`

const IndividualButtonWrapper = styled.View`
  /* height: 12%; */
  /* padding-top: 18%; */
` 

const TabHighlightWrapper = styled.View`
  align-items: center;
`

type CarouselItem = {
  imgUrl: string;
  header: string;
  subHeader: string;
}

const IntroScreen: FC = () => {

  const carouselItemData = [
    {
      imgUrl: "https://fortunatecookies.store/wp-content/uploads/2022/01/logo2-e1641689287720.png",
      header: "Who Are We?",
      subHeader: "We aim to put and interesting spin on the classic fortune cookie"
    },
    {
      imgUrl: "https://fortunatecookies.store/wp-content/uploads/elementor/thumbs/cropped-fortunate-cookies-logo-phm4tuehtem959d20btha2rgqjp22hfqd5681sxgog.png",
      header: "Different Types",
      subHeader: "We have four different genre of fortune cookies"
    },
    {
      imgUrl: "https://fortunatecookies.store/wp-content/uploads/2022/01/sustainabilityFortune.png",
      header: "Sustainability",
      subHeader: "We make sustainability a top priority in our business"
    },
    {
      imgUrl: "https://fortunatecookies.store/wp-content/uploads/2022/01/FGC-Logo-Trademarked_tealcoral.png",
      header: "Giving Back",
      subHeader: "We partner with the non profit For Goodness Cakes"
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems] = useState<CarouselItem[]>(carouselItemData)

  const carouselRef = useRef<any>(null)

  const renderCarouselItem = ({ item, index }: {item: CarouselItem, index: number})=> {
    return (
      <CarouselCardComp
        imgUrl={item.imgUrl}
        header={item.header}
        subHeader={item.subHeader}
        number={index}
      />
    )
  }

  const navigator: any = useNavigation();
  
  const onPressForward = () => { 
    navigator.navigate("SignUpNav");
    // console.log("here")
  }

  return (
    <ScreenWrapperComp>
      <CarouselWrapper>
        <Carousel
          layout={"default"}
          ref={carouselRef}
          data={carouselItems}
          sliderWidth={375}
          itemWidth={375}
          // itemHeight={50}
          renderItem={renderCarouselItem}
          onSnapToItem={(index) => { setActiveIndex(index); }}
          // style={{ height: "50%"}}
          autoplay={true}
          loop={true}
        />

        <TabHighlightWrapper>
          <Pagination
            // style={{transform: [translateY(-10)]}}
            activeDotIndex={activeIndex}
            dotsLength={carouselItems.length}
            // carouselRef={carouselRef}
            dotColor={Pink}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
            }}
            inactiveDotColor={Text400}
          />
        </TabHighlightWrapper>
        <ForwardButtonWrapper>
          <IndividualButtonWrapper>
            <CircleButton onPress={onPressForward}/>
          </IndividualButtonWrapper>
        </ForwardButtonWrapper>
      </CarouselWrapper>


    </ScreenWrapperComp>
  )
}

export default IntroScreen