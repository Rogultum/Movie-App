import React, { useState } from 'react';
import { Alert, SafeAreaView, ScrollView } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import SignButton from '../../component/Button/SignButton';
import Input from '../../component/Input';
import styles from './SignIn.style';

function SignIn() {
  const [userPassword, setUserPassword] = useState(null);
  const [username, setUsername] = useState(null);

  const navigation = useNavigation();

  let count = 0;
  const handleSignIn = async () => {
    const userData = await AsyncStorage.getItem('user');
    const user = JSON.parse(userData);
    if (user.username !== username) {
      return Alert.alert('Username not found!');
    }
    if (user.password !== userPassword) {
      count += 1;
      if (count >= 3) {
        return Alert.alert('Do you want to reset your password?');
      }
      return Alert.alert('Your Password is wrong!');
    }
    if (count >= 3) {
      return Alert.alert('Do you want to reset your password?');
    }
    if (user.username === username && user.password === userPassword)
      return navigation.navigate('BottomNavigation');

    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Input label="Type your username" placeholder="username" onChangeText={setUsername} />
        <Input
          label="Type your password"
          secureTextEntry
          placeholder="*****"
          onChangeText={setUserPassword}
        />
      </ScrollView>
      <SignButton title="Sign In" onPress={handleSignIn} />
    </SafeAreaView>
  );
}

export default SignIn;
