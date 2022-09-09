/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './ShowMoviesV2.style';

function ShowMoviesV2(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.movies.title}</Text>
      <Image
        style={styles.image}
        source={{
          uri: `https://www.themoviedb.org/t/p/w500${props.movies.poster_path}`,
        }}
      />
      <View style={styles.overview_container}>
        <Text style={styles.overview_text}>{props.movies.overview}</Text>
      </View>
    </View>
  );
}

export default ShowMoviesV2;
