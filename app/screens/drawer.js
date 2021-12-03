import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import DashBoard from './Home';

const Drawer = createDrawerNavigator();

export default function DrawerNavigationClass() {
  return (
    <Drawer.Navigator
      initialRouteName="DashBoard"
      headerMode="none"
      screenOptions={{
        headerTintColor: '#F2C534',
        headerTitle: '',
      }}>
      <Drawer.Screen name="DashBoard" component={DashBoard} />
    </Drawer.Navigator>
  );
}
