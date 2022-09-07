import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import SignStackNavigation from './navigation/SignStackNavigation/SignStackNavigation';

function App() {
  return (
    <NavigationContainer>
      <SignStackNavigation />
    </NavigationContainer>
  );
}

export default App;
