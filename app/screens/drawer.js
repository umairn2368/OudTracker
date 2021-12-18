import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import DashBoard from './Home';
import DrawerContent from './DrawerContent';
import colors from '../constants/colors';
const Drawer = createDrawerNavigator();

export default function DrawerNavigationClass() {
  return (
    <Drawer.Navigator
      initialRouteName="DashBoard"
      headerMode="none"
      screenOptions={{
        headerTintColor: colors.darkBlue,
        headerTitle: '',
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="DashBoard" component={DashBoard} />
    </Drawer.Navigator>
  );
}
