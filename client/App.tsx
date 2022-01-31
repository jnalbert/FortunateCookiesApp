import React, { FC, useEffect, useMemo, useReducer, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import AuthNavigator from "./src/navigators/auth/AuthNavigator";
import styled from "styled-components/native";
import { Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito'
import {SourceSerifPro_400Regular} from '@expo-google-fonts/source-serif-pro'
import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading";
import { Poppins_400Regular, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import {AuthContext, AuthContextFunctionTypes, authReducer, AuthTypes, getTokenAsync, useMemoFunction, _deleteStoredUuid } from './src/AppContext';
import MainTabNavigator from "./src/navigators/main/MainTabNavigator";

const AppWrapperView = styled.View`
  flex: 1;
`;

const App: FC<any> = () => {

  const [state, dispatch]: [AuthTypes, React.Dispatch<any>] = useReducer(
    authReducer,
    {
      isLoading: true,
      isSignout: false,
      userUuid: null,
    }
  );

  let [isFontLoaded] = useFonts({
    "SourceSerif": SourceSerifPro_400Regular,
    "Nunito": Nunito_400Regular,
    "Poppins": Poppins_400Regular,
    "Frankfurter": require("./assets/fonts/Frankfurter-Std-Regular.otf"),
    "PoppinsBold": Poppins_600SemiBold,
  });

  useEffect(() => {
    getTokenAsync(dispatch);
    // _deleteStoredUuid();
    return () => {
      _deleteStoredUuid()
    }
  }, []);
  
  
  const authContext = useMemo<AuthContextFunctionTypes>(() => useMemoFunction(dispatch, state), []);


  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      {(!isFontLoaded || state.isLoading) ? (
        <AppLoading />
      ) : (
        <AppWrapperView>
         {state?.userUuid === null ? (
            <AuthNavigator />
          ) : (
            <MainTabNavigator />
          )}
        </AppWrapperView>
      )}
      </NavigationContainer>
    </AuthContext.Provider>
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
