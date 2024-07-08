import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import Post from '../../components/post';
import feed from '../../assets/data/feed';

const SearchResultScreen = props => {
  return (
    <View>
      <FlatList data={feed} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};

export default SearchResultScreen;
