import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import IntroScreen from "../../screens/auth/IntroScreen";
import { backgroundColor } from "../../shared/colors";
import StackHeader from "../../shared/StackHeader/StackHeader";
import StackHeaderBackButton from "../../shared/StackHeader/StackHeaderBackButton";
import LoginNavigator from './LoginNavigator';
import SignUpNavigator from './SignUpNavigator';

const Stack = createStackNavigator();

const AuthNavigator: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: backgroundColor,
          borderBottomColor: backgroundColor,
          shadowColor: "transparent",
        },
        headerBackImage: () => {
          return <StackHeaderBackButton />;
        },
        headerBackTitleVisible: false,
      }}
    >

      <Stack.Screen
        name="Intro"
        component={IntroScreen}
        options={{
          headerTitle: () => <StackHeader name="" />,
          // headerShown: false,
        }}
      />

      <Stack.Screen
        name="SignUpNav"
        component={SignUpNavigator}
        options={{
          headerTitle: () => <StackHeader name="" />,
          headerShown: false
        }}
      />

      <Stack.Screen
        name="SignInNav"
        component={LoginNavigator}
        options={{
          headerTitle: () => <StackHeader name="" />,
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
