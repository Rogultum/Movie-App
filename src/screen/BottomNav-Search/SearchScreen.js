import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

import axios from 'axios';

import SignButton from '../../component/Button/SignButton/SignButton';
import Input from '../../component/Input';
import ShowMoviesV2 from '../../component/ShowMoviesV2';

function SearchScreen() {
  const [searchedMovie, setSearchedMovie] = useState();
  const [searchList, setSearchList] = useState();

  const getSearchedMovie = async () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=969d6814449ce346efa3ab98a707cdee&query=${searchedMovie}`
      )
      .then((result) => setSearchList(result.data.results));
  };

  const renderMovies = ({ item }) => <ShowMoviesV2 movies={item} />;

  return (
    <View>
      <Input placeholder="Search a movie..." onChangeText={setSearchedMovie} />
      <SignButton title="Search" onPress={getSearchedMovie} />
      <FlatList
        data={searchList}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderMovies}
      />
    </View>
  );
}

export default SearchScreen;
