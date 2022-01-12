import { createStackNavigator } from '@react-navigation/stack';
import React, { FC } from 'react';
import { View } from 'react-native';
import AllRewardsScreen from '../../screens/main/rewards/AllRewardsScreen';
import ConfirmPurchaseScreen from '../../screens/main/rewards/ConfirmPurchaseScreen';
import RewardsScreen from '../../screens/main/rewards/RewardsScreen';
import ScanPurchaseScreen from '../../screens/main/rewards/ScanPurchaseScreen';
import { backgroundColor } from '../../shared/colors';
import StackHeader from '../../shared/StackHeader/StackHeader';
import StackHeaderBackButton from '../../shared/StackHeader/StackHeaderBackButton';

const Stack = createStackNavigator();

const RewardsNavigator: FC = () => {
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
        name="Rewards"
        component={RewardsScreen}
        options={{
          headerTitle: () => <StackHeader name="Rewards" />,
          // headerShown: false,
        }}
      />

      <Stack.Screen
        name="All Rewards"
        component={AllRewardsScreen}
        options={{
          headerTitle: () => <StackHeader name="All Rewards" />,
          // headerShown: false,
        }}
      />

      <Stack.Screen
        name="Scan Purchase"
        component={ScanPurchaseScreen}
        options={{
          headerTitle: () => <StackHeader name="" />,
          // headerShown: false,
        }}
      />

      <Stack.Screen
        name="Confirm Purchase"
        component={ConfirmPurchaseScreen}
        options={{
          headerTitle: () => <StackHeader name="" />,
          // headerShown: false,
        }}
      />

      
    </Stack.Navigator>
  )
}

export default RewardsNavigator