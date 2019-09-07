
import React from 'react';
import {AppRegistry} from 'react-native';
//import { StackNavigator } from 'react-native-navigation';
//import { createStackNavigator } from 'react-native-navigation-stack';
import { createStackNavigator } from 'react-navigation-stack';

import Category from './screens/Category';
import Categories from './screens/Categories';

const AppNavigator = createStackNavigator({
  Categories: {
    screen: Categories
  },
  Category: {
    screen: Category
  }
});
export default AppNavigator;

//AppRegistry.registerComponent('ShopStore', () => AppNavigator);
