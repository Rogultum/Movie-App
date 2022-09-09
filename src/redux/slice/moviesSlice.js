/* eslint-disable import/prefer-default-export */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMovies = createAsyncThunk('movies/getMovies', async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/movie/now_playing?api_key=969d6814449ce346efa3ab98a707cdee&language=en-US&page=1'
  );
  return response;
});

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetchMovies.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
  },
});

export default moviesSlice.reducer;
