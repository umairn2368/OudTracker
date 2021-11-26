import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from '../screens/Welcome';
import InformationFirst from '../screens/InformationFirst';
import InformationSecond from '../screens/InformationSecond';
import InformationThird from '../screens/InformationThird';
import DashBoard from '../screens/DashBoard';

const Stack = createNativeStackNavigator();

const Information = () => {
  return (
      <Stack.Navigator initialRouteName="InformationFirst">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="InformationFirst" component={InformationFirst} />
        <Stack.Screen name="InformationSecond" component={InformationSecond} />
        <Stack.Screen name="InformationThird" component={InformationThird} />
        <Stack.Screen name="DashBoard" component={DashBoard} />
      </Stack.Navigator>
  );
};

export default Information;
