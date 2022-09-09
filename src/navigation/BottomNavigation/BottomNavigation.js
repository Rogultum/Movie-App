import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SearchScreen from '../../screen/BottomNav-Search/SearchScreen';
import HomeStackNavigation from '../HomeStackNavigation/HomeStackNavigation';
import ProfileStackNavigation from '../ProfileStackNavigation/ProfileStackNavigation';

const Tab = createBottomTabNavigator();

// TODO add icons
function BottomNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeStackNavigation} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileStackNavigation} />
    </Tab.Navigator>
  );
}

export default BottomNavigation;
