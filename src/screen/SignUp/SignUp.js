/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, ScrollView } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import SignButton from '../../component/Button/SignButton';
import Input from '../../component/Input';
import { signUp } from '../../redux/slice/userSlice';
import styles from './SignUp.style';

function SignUp() {
  const dispatch = useDispatch();

  const handleSignUpRedux = () => {
    dispatch(signUp({ email: userMail, password: userPassword, username }));
  };

  const navigation = useNavigation();

  const [userMail, setUserMail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [userPasswordCheck, setUserPasswordCheck] = useState(null);
  const [username, setUsername] = useState(null);

  // eslint-disable-next-line consistent-return
  const handleSignUp = async () => {
    if (userPassword !== userPasswordCheck) {
      return Alert.alert("Passwords don't match.");
    }
    if (
      userPassword === null ||
      userMail === null ||
      userPasswordCheck === null ||
      username === null
    ) {
      return Alert.alert('Missing Information');
    }

    await AsyncStorage.setItem(
      'user',
      JSON.stringify({
        mail: userMail,
        password: userPassword,
        username,
      })
    );

    await axios.post('http://localhost:3000/user', {
      email: userMail,
      password: userPassword,
      username,
    });

    navigation.navigate('SignIn');
  };

  const userCheck = async () => {
    const userData = await AsyncStorage.getItem('user');
    if (userData !== null) {
      navigation.navigate('SignIn');
    }
  };

  useEffect(() => {
    userCheck();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Input
          label="Type your e-mail"
          placeholder="example@example.com"
          onChangeText={setUserMail}
        />
        <Input
          label="Type your password"
          secureTextEntry
          placeholder="*****"
          onChangeText={setUserPassword}
        />
        <Input
          label="Re-Type your password"
          secureTextEntry
          placeholder="*****"
          onChangeText={setUserPasswordCheck}
        />
        <Input label="Type your username" placeholder="username" onChangeText={setUsername} />
      </ScrollView>
      <SignButton title="Sign Up" onPress={handleSignUp} />
      <SignButton title="Sign Up REDUX" onPress={handleSignUpRedux} />
    </SafeAreaView>
  );
}

export default SignUp;
