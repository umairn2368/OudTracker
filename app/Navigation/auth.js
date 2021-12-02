import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from '../Screens/Welcome';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import InformationFirst from '../Screens/InformationFirst';
import InformationSecond from '../Screens/InformationSecond';
import InformationThird from '../Screens/InformationThird';
import InformationFourth from '../Screens/InformationFourth';

import {useSelector, useDispatch} from 'react-redux';
import DashBoard from '../Screens/DashBoard';

const Stack = createNativeStackNavigator();

const Auth = () => {
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
      <Stack.Screen name="DashBoard" component={DashBoard} />
    </Stack.Navigator>
  );
};

export default Auth;
