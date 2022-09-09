import React from 'react';
import { View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import SignButton from '../../component/Button/SignButton';
import Input from '../../component/Input';
import { logout } from '../../redux/slice/userSlice';

function EditProfileScreen() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const logoutRedux = () => {
    dispatch(logout());
  };

  return (
    <View>
      <Input placeholder={`Change email ${user.email}`} />
      <Input placeholder={`Change password ${user.password}`} />
      <Input placeholder={`Change username ${user.username}`} />
      <SignButton title="Save Changes" />
      <SignButton title="Logout REDUX" onPress={logoutRedux} />
    </View>
  );
}

export default EditProfileScreen;
