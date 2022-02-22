import { createStackNavigator } from '@react-navigation/stack';
import React, { FC } from 'react';
import { View } from 'react-native';
import DashBoardScreen from '../../screens/main/DashboardScreen';
import WriteReviewScreen from '../../screens/main/WriteReviewScreen';
import WriteSuggestionScreen from '../../screens/main/WriteSuggestionScreen';
import { backgroundColor } from '../../shared/colors';
import StackHeader from '../../shared/StackHeader/StackHeader';
import StackHeaderBackButton from '../../shared/StackHeader/StackHeaderBackButton';

const Stack = createStackNavigator();


const DashBoardNavigator: FC = () => {
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
      name="DashBoard"
      component={DashBoardScreen}
      options={{
        headerTitle: "Dash Board",
        // headerShown: false,
      }}
    />

    <Stack.Screen
      name="WriteReview"
      component={WriteReviewScreen}
      options={{
        headerTitle: "",
        headerShown: true,
      }}
    />

    <Stack.Screen
      name="WriteSuggestion"
      component={WriteSuggestionScreen}
      options={{
        headerTitle: "",
        headerShown: true,
      }}
    />


    
  </Stack.Navigator>
  )
}

export default DashBoardNavigator