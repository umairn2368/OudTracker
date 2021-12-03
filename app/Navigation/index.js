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
import Auth from './authStack/index';
import DashBoard from './dashboardStack/index';

const Stack = createNativeStackNavigator();

const NavContainer = () => {
  const user = useSelector(state => state?.auth?.user);
  return <>{user ? <Auth /> : <DashBoard />}</>;
};

export default NavContainer;
