import styled from 'styled-components/native';
import { backgroundColor, logoutRed, Poppins } from './colors';

export const ErrorText = styled.Text`
  color: ${logoutRed};
  font-family: ${Poppins};
  font-size: 16px;
`

export const StyledScrollView = styled.ScrollView`
  background-color: ${backgroundColor};
`