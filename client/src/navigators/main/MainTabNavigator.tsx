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
        activeTintColor: Teal,
        inactiveTintColor: Black,
        showLabel: false,
        tabStyle: {paddingTop: 17},
        tabBarIcon: ({color}) => {

          if (route.name === "DashBoard") {
            return  <Octicons name="home" size={24} color={color} />
          }
          if (route.name === "Shop") {
            return <AntDesign name="shoppingcart" size={24} color={color} />
          }
          if (route.name === "Rewards") {
            <SimpleLineIcons name="present" size={24} color={color} />
          }
          
          return <AntDesign name="user" size={24} color={color} />

        }
        
      })}
     
      
    >
      <Tab.Screen name="DashBoard" component={DashBoardScreen} />
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen name="Rewards" component={RewardsNavigator} />
      <Tab.Screen name="Settings" component={SettingsNavigator} />
    </Tab.Navigator>
  )
}

export default MainTabNavigator