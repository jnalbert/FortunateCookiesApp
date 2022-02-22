import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { View } from 'react-native';
import styled from "styled-components/native"
import BasicButton from '../../../shared/BasicButton';
import { OverallSectionWrapper, SectionHeader, SectionHeaderWrapper } from './NewsSection';
import { Teal, Pink } from '../../../shared/colors';

const BodyWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
`

const IndividualWrapper = styled.View`
  flex-direction: column;
  align-items: center;
  /* margin: 0px 11px; */
`

const ButtonTextWrapper = styled.View`
  max-width: 60%;
`

const ButtonText = styled.Text`
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: 0.5px;
`




const ContactUsComp: FC = () => {

  const navigation: any = useNavigation();

  const writeReviewNavigate = () => { 
    navigation.navigate('WriteReview');
  }


  const writeSuggestionNavigate = () => { 
    navigation.navigate('WriteSuggestion');
  }

  return (
    <OverallSectionWrapper>
      <SectionHeaderWrapper>
        <SectionHeader>Contact Us</SectionHeader>
      </SectionHeaderWrapper>
      <BodyWrapper>
        <IndividualWrapper>
          <BasicButton onPress={writeReviewNavigate} title="Write Review" style={{ width: 150, backgroundColor: Teal }} />
          <ButtonTextWrapper>
            <ButtonText>Give us your honest options on our products to help us improve them</ButtonText>
          </ButtonTextWrapper>
        </IndividualWrapper>
        <IndividualWrapper>
          <BasicButton onPress={writeSuggestionNavigate} title="Write Suggestion" style={{ width: 150, backgroundColor: Pink }} />
          <ButtonTextWrapper>
            <ButtonText>Give us your ideas on new fortune cookie flavors and messages</ButtonText>
          </ButtonTextWrapper>
        </IndividualWrapper>
      </BodyWrapper>
    </OverallSectionWrapper>
  )
}

export default ContactUsComp