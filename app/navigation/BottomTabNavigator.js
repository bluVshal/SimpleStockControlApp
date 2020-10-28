import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import ProductsScreen from '../screens/Products';
import ScreenTwo from '../screens/ScreenTwo';

const BottomTabNavigator = createBottomTabNavigator({
    Products: ProductsScreen,
    Two: ScreenTwo
});

export default BottomTabNavigator;