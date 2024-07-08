import {View, Text, TextInput, FlatList, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import search from '../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const DestionationSearchScreen = () => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/**Input Component */}

      <TextInput
        style={styles.textInput}
        placeholder="where are you going? "
        value={inputText}
        onChange={setInputText}
      />

      {/*List of destination  */}

      <FlatList
        data={search}
        renderItem={({item}) => (
          <Pressable
            onPress={() => navigation.navigate('Guests')}
            style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default DestionationSearchScreen;
