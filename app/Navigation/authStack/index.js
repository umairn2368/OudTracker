import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from '../../screens/Welcome';
import Login from '../../screens/Login';
import Register from '../../screens/Register';
import InformationFirst from '../../screens/InformationFirst';
import InformationSecond from '../../screens/InformationSecond';
import InformationThird from '../../screens/InformationThird';
import InformationFourth from '../../screens/InformationFourth';

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
    </Stack.Navigator>
  );
};

export default Auth;
