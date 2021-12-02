import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DashBoard from '../Screens/DashBoard';
import DrawerNavigationClass from '../Screens/drawer';

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      headerMode="none"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="DrawerNavigationClass"
        component={DrawerNavigationClass}
      />
      <Stack.Screen name="DashBoard" component={DashBoard} />
    </Stack.Navigator>
  );
};

export default Home;
