import React, {FC} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import AuthNavigator from './src/navigators/auth/AuthNavigator';
import styled from 'styled-components/native';


const AppWrapperView = styled.View`
  flex: 1;
`

const App: FC<any> = () => { 
  return (
    <NavigationContainer>
      <AppWrapperView>
        <AuthNavigator />
      </AppWrapperView>
    </NavigationContainer>
  );
};

export default App;


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
