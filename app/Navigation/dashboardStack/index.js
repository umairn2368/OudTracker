import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../../Screens/Home';
import DrawerNavigationClass from '../../Screens/drawer';

const Stack = createNativeStackNavigator();

const DashBoard = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      headerMode="none"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="DrawerNavigationClass"
        component={DrawerNavigationClass}
      />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default DashBoard;
