import React, { FC } from 'react';
import { View } from 'react-native';
import ContactComp from '../../components/mainComps/Dashboard/ContactComp';
import ScreenWrapperComp from '../../shared/ScreenWrapperComp';

const WriteSuggestionScreen: FC = () => {
  return (
    <ScreenWrapperComp isScreenProtected scrollView>
      <ContactComp header={"Write A Suggestion"} subHeader="We value your feedback!" type='suggestion'/>
    </ScreenWrapperComp>
  )
}

export default WriteSuggestionScreen