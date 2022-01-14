import React, { FC, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import AuthNavigator from "./src/navigators/auth/AuthNavigator";
import styled from "styled-components/native";
import { Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito'
import {SourceSerifPro_400Regular} from '@expo-google-fonts/source-serif-pro'
import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";




const AppWrapperView = styled.View`
  flex: 1;
`;

const App: FC<any> = () => {

  let [isFontLoaded] = useFonts({
    "SourceSerif": SourceSerifPro_400Regular,
    "Nunito": Nunito_400Regular,
    "Poppins": Poppins_400Regular,
    "Frankfurter": require("./assets/fonts/Frankfurter-Std-Regular.otf"),
  });


  return (
    <NavigationContainer>
      {!isFontLoaded ? (
        <AppLoading />
      ) : (
        <AppWrapperView>
          <AuthNavigator />
        </AppWrapperView>
      )}
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
