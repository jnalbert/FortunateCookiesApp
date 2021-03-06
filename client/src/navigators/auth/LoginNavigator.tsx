import React, { FC } from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ForgotPasswordScreen from "../../screens/auth/ForgotPasswordScreen";
import ForgotPasswordStepsScreen from "../../screens/auth/ForgotPasswordStepsScreen";
import { backgroundColor } from "../../shared/colors";
import StackHeader from "../../shared/StackHeader/StackHeader";
import StackHeaderBackButton from "../../shared/StackHeader/StackHeaderBackButton";
import SignInScreen from "../../screens/auth/SignInScreen";


const Stack = createStackNavigator();

const LoginNavigator: FC = () => {
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
        name="SignIn"
        component={SignInScreen}
        options={{
          headerTitle: () => <StackHeader name="" />,
          // headerShown: false
        }}
      />

      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{
          headerTitle: () => <StackHeader name="" />,
          // headerShown: false
        }}
      />

      <Stack.Screen
        name="ForgotPasswordSteps"
        component={ForgotPasswordStepsScreen}
        options={{
          headerTitle: () => <StackHeader name="" />,
          // headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
