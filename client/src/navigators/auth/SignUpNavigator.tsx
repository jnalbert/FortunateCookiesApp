import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import StackHeaderBackButton from '../../shared/StackHeader/StackHeaderBackButton';
import { backgroundColor } from '../../shared/colors';
import StackHeader from '../../shared/StackHeader/StackHeader';
import TosScreen from '../../screens/auth/TosScreen';
import SignUpScreen from '../../screens/auth/SignUpScreen';


const Stack = createStackNavigator();

const SignUpNavigator: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: backgroundColor, borderBottomColor: backgroundColor, shadowColor: 'transparent' },
        headerBackImage: () => { return <StackHeaderBackButton /> },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerTitle: () => <StackHeader name="" />,
          // headerShown: false
        }}
      />

      <Stack.Screen
        name="TOS"
        component={TosScreen}
        options={{
          headerTitle: () => <StackHeader name="" />, 
          // headerShown: false
        }}
      />

    </Stack.Navigator>
  )
}

export default SignUpNavigator