import React, { useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import Input from '../../component/Input';
import styles from './ProfileScreen.style';

function ProfileScreen() {
  const navigation = useNavigation();

  const theme = useSelector((state) => state.theme.value);

  useEffect(() => {
    getUser();
  }, []);
  const [userImageUrl, setUserImageUrl] = useState();
  const [user, setUser] = useState({});

  const getUser = async () => {
    const userData = await AsyncStorage.getItem('user');
    setUser(JSON.parse(userData));
  };

  const handleLogout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
    navigation.navigate('SignUp');
  };

  const navigateEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  const navigateTheme = () => {
    navigation.navigate('Theme');
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme ? 'white' : 'black' }}>
      <View style={styles.image_container}>
        {userImageUrl ? (
          <Image style={styles.image} source={{ uri: userImageUrl }} />
        ) : (
          <Input
            placeholder="Please provide an image URL for your profile picture."
            onChangeText={setUserImageUrl}
          />
        )}
        <View style={styles.username_container}>
          <Text style={{ color: theme ? 'grey' : 'white' }}>Username:</Text>
          {user ? (
            <Text style={{ color: theme ? 'grey' : 'white' }}>{user.username}</Text>
          ) : (
            <Text style={{ color: theme ? 'grey' : 'white' }} onPress={getUser}>
              Press here to get your info!
            </Text>
          )}
        </View>

        {/* TODO create custom component for items below. */}
        <Pressable style={styles.button_container} onPress={navigateTheme}>
          <Text style={[styles.button_text, { color: theme ? 'black' : 'white' }]}>THEME</Text>
        </Pressable>
        <Pressable style={styles.button_container} onPress={navigateEditProfile}>
          <Text style={[styles.button_text, { color: theme ? 'black' : 'white' }]}>
            EDIT PROFILE
          </Text>
        </Pressable>
        <Pressable style={styles.button_container} onPress={handleLogout}>
          <Text style={[styles.button_text, { color: theme ? 'black' : 'white' }]}>LOGOUT</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default ProfileScreen;
