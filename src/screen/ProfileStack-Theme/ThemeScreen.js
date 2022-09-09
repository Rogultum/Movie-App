import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { changeTheme } from '../../redux/slice/themeSlice';
import styles from './ThemeScreen.style';

function ThemeScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    dispatch(changeTheme());
  };
  const theme = useSelector((state) => state.theme.value);

  const dispatch = useDispatch();

  return (
    <View style={[styles.container, { backgroundColor: theme ? 'white' : 'black' }]}>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={[styles.text, { color: theme ? 'black' : 'white' }]}>THEME</Text>
    </View>
  );
}

export default ThemeScreen;
