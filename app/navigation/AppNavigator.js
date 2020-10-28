import React from 'react';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import BottomTabNavigator from './BottomTabNavigator';
import ScreenTwo from '../screens/ScreenTwo';

export default createAppContainer(
    createStackNavigator({
        //Login can be added here
        Main:BottomTabNavigator,
        ScreenTwo: ScreenTwo
    })
);