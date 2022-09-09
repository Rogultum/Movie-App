import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../../screen/SignIn/SignIn';
import SignUp from '../../screen/SignUp/SignUp';
import BottomNavigation from '../BottomNavigation/BottomNavigation';

const Stack = createNativeStackNavigator();

function SignStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen
        name="BottomNavigation"
        component={BottomNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default SignStackNavigation;
