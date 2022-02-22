import React, { FC } from 'react';
import { View } from 'react-native';
import ContactComp from '../../components/mainComps/Dashboard/ContactComp';
import ScreenWrapperComp from '../../shared/ScreenWrapperComp';




const WriteReviewScreen: FC = () => {
  return (
    <ScreenWrapperComp scrollView>
      <ContactComp header={"Write A Review"} subHeader="We value your feedback!" type='review'/>
    </ScreenWrapperComp>
  )
}

export default WriteReviewScreen