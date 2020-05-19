import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import NewsScreen from '../screens/NewsScreen'


const AppNavigator = createStackNavigator({
  Home: {
    screen: NewsScreen,
  },
});

export default createAppContainer(AppNavigator);