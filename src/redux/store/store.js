/* eslint-disable import/no-named-as-default */

/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';

import themeReducer from '../slice/themeSlice';
import userReducer from '../slice/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});
