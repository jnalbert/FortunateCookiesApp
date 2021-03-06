import { createStackNavigator } from '@react-navigation/stack';
import React, { FC } from 'react';
import { View } from 'react-native';
import ChangePasswordScreen from '../../screens/main/ChangePasswordScreen';
import ProfileScreen from '../../screens/main/ProfileScreen';
import { backgroundColor } from '../../shared/colors';
import StackHeader from '../../shared/StackHeader/StackHeader';
import StackHeaderBackButton from '../../shared/StackHeader/StackHeaderBackButton';

const Stack = createStackNavigator();

const SettingsNavigator: FC = () => {
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
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: "Profile",
          headerStyle: {}
          // headerShown: false,
        }}
      />

      <Stack.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
        options={{
          headerTitle: "Change Password",
          // headerShown: false,
        }}
      />

    </Stack.Navigator>
  )
}

export default SettingsNavigator