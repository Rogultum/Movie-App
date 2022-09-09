import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import SignStackNavigation from './navigation/SignStackNavigation/SignStackNavigation';
import { store } from './redux/store/store';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SignStackNavigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
