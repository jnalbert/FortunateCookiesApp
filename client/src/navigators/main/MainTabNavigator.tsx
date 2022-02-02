import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { View } from 'react-native';
import { Black, Teal } from '../../shared/colors';
import RewardsNavigator from './RewardsNavigator';
import SettingsNavigator from './SettingsNavigator';
import DashBoardScreen from '../../screens/main/DashboardScreen';
import ShopScreen from '../../screens/main/ShopScreen';

import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

const MainTabNavigator: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Teal,
        tabBarInactiveTintColor: Black,
        tabBarShowLabel: false,
        tabBarItemStyle: { paddingTop: "2.5%"},
        tabBarStyle: { height: "10%" },
        tabBarIcon: ({ color }) => {

          if (route.name === "DashBoard") {
            return <Octicons name="home" size={30} color={color} />
          }
          if (route.name === "Shop") {
            return <AntDesign name="shoppingcart" size={30} color={color} />
          }
          
          if (route.name === "RewardsNav") {
            return <SimpleLineIcons name="present" size={30} color={color} />
          }
        
          return <AntDesign name="user" size={30} color={color} />

        }
        
      })}
      
     
      
    >
      <Tab.Screen options={{ headerTitle: "Dash Board"}} name="DashBoard" component={DashBoardScreen} />
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen options={{ headerTitle: "Rewards", headerShown: false }} name="RewardsNav" component={RewardsNavigator} />
      <Tab.Screen options={{ headerTitle: "Profile", headerShown: false}} name="SettingsNav" component={SettingsNavigator} />
    </Tab.Navigator>
  )
}

export default MainTabNavigator