import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DestionationSearchScreen from '../Screens/DestinationSearch';
import GuestsScreen from '../Screens/Guests';
import HomeTabNavigator from './HomeTabNavigator';
import HomeScreen from '../Screens/Home';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={'Destination Search'}
          component={DestionationSearchScreen}
          options={{
            title: 'Search your destination',
          }}
        />

        {
          <Stack.Screen
            name={'Guests'}
            component={GuestsScreen}
            options={{
              title: 'How many peopole ?',
            }}
          />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
