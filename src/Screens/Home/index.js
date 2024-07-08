import {View, Text, ImageBackground, Button, Pressable} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import React from 'react';
import styles from './styles';

import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      {/*Search Bar */}
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Destination Search')}>
        <Fontisto name="search" size={25} color="#f15454" />
        <Text style={styles.searchbtText}>Where are you going</Text>
      </Pressable>

      <ImageBackground
        source={require('../../assets/iamges/wallpaper.jpg')}
        style={styles.image}>
        {/*Title */}

        <Text style={styles.title}>Go Near</Text>

        {/*Button */}
        <Pressable
          style={styles.button}
          onPress={() => console.warn('explore button clicked')}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
