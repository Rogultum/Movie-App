import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';

import axios from 'axios';

// import { useDispatch, useSelector } from 'react-redux';
import ShowMoviesV2 from '../../component/ShowMoviesV2';
// import { fetchMovies } from '../../redux/slice/moviesSlice';
import styles from './HomeScreen.style';

function HomeScreen() {
  // TODO with redux
  // const data = useSelector((state) => state.movies);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchMovies);
  // }, [dispatch]);
  // console.log('MYDATA', data);

  const [moviesList, setMoviesList] = useState();

  const [title, setTitle] = useState();

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const renderMovies = ({ item }) => <ShowMoviesV2 movies={item} />;

  const getNowPlayingMovies = async () => {
    await axios
      .get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=969d6814449ce346efa3ab98a707cdee&language=en-US&page=1'
      )
      .then((result) => setMoviesList(result.data.results))
      .then(setTitle('Now Playing'));
  };

  const getTopRated = async () => {
    await axios
      .get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=969d6814449ce346efa3ab98a707cdee&language=en-US&page=1'
      )
      .then((result) => setMoviesList(result.data.results))
      .then(setTitle('Top Rated'));
  };

  const getLatest = async () => {
    await axios
      .get(
        'https://api.themoviedb.org/3/movie/latest?api_key=969d6814449ce346efa3ab98a707cdee&language=en-US'
      )
      .then((result) => setMoviesList(result.data.results))
      .then(setTitle('Latest'));
  };

  const getPopular = async () => {
    await axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=969d6814449ce346efa3ab98a707cdee&language=en-US&page=1'
      )
      .then((result) => setMoviesList(result.data.results))
      .then(setTitle('Popular'));
  };

  const getUpcoming = async () => {
    await axios
      .get(
        'https://api.themoviedb.org/3/movie/upcoming?api_key=969d6814449ce346efa3ab98a707cdee&language=en-US&page=1'
      )
      .then((result) => setMoviesList(result.data.results))
      .then(setTitle('Upcoming'));
  };

  return (
    <View>
      {/* view of upper_tabs */}
      <View style={styles.upper_tabs}>
        <Pressable style={styles.tab} onPress={getTopRated}>
          <Text style={styles.tab_text}>Top Rated</Text>
        </Pressable>
        <Pressable style={styles.tab} onPress={getLatest}>
          <Text style={styles.tab_text}>Latest</Text>
        </Pressable>
        <Pressable style={styles.tab} onPress={getPopular}>
          <Text style={styles.tab_text}>Popular</Text>
        </Pressable>
        <Pressable style={styles.tab} onPress={getUpcoming}>
          <Text style={styles.tab_text}>Upcoming</Text>
        </Pressable>
      </View>
      <View style={styles.title_container}>
        {/* TODO make it better to go back */}
        {/* <Pressable onPress={getNowPlayingMovies}>
          <Text style={styles.title_button}>Press for now playing.</Text>
        </Pressable> */}
        <Text style={styles.title}>{title}</Text>
      </View>
      {/* can also render with mapping, left it here for future reference */}
      {/* {moviesList ? moviesList.map((item) => <ShowMoviesV2 movies={item} />) : <Text>Loading</Text>} */}
      {moviesList ? (
        <FlatList
          data={moviesList}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderMovies}
        />
      ) : (
        <Pressable onPress={getNowPlayingMovies}>
          <Text style={styles.no_data_text}>
            There is no data available, Press Here to go to Now Playing.
          </Text>
        </Pressable>
      )}
    </View>
  );
}

export default HomeScreen;
