import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from '../Screens/Welcome';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import DashBoard from '../Screens/DashBoard';
import DrawerNavigationClass from './drawer';
import InformationFirst from '../Screens/InformationFirst';
import InformationSecond from '../Screens/InformationSecond';
import InformationThird from '../Screens/InformationThird';
import InformationFourth from '../Screens/InformationFourth';

const Stack = createNativeStackNavigator();

const Information = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      headerMode="none"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="InformationFirst" component={InformationFirst} />

      <Stack.Screen name="InformationSecond" component={InformationSecond} />

      <Stack.Screen name="InformationThird" component={InformationThird} />

      <Stack.Screen name="InformationFourth" component={InformationFourth} />
      {/* <Stack.Screen name="DashBoard" component={DashBoard} /> */}
      <Stack.Screen
        name="DrawerNavigationClass"
        component={DrawerNavigationClass}
      />
    </Stack.Navigator>
  );
};

export default Information;
