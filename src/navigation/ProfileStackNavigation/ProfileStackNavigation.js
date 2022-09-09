import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileScreen from '../../screen/BottomNav-Profile/ProfileScreen';
import EditProfileScreen from '../../screen/ProfileStack-EditProfile/EditProfileScreen';
import ThemeScreen from '../../screen/ProfileStack-Theme/ThemeScreen';

const Stack = createNativeStackNavigator();

function ProfileStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="Theme" component={ThemeScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  );
}

export default ProfileStackNavigation;
