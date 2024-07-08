import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResultScreen from '../Screens/SearchResult';

const Tab = createMaterialTopTabNavigator();
const SearchResultTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f15454',
        tabBarInactiveTintColor: '#f15454',
        tabBarIndicatorStyle: '#f15454',
      }}>
      <Tab.Screen name={'list'} component={SearchResultScreen} />
    </Tab.Navigator>
  );
};

export default SearchResultTabNavigator;
