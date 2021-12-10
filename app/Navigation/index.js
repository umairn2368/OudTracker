import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import Auth from './authStack/index';
import DashBoard from './dashboardStack/index';

const Stack = createNativeStackNavigator();

const NavContainer = () => {
  const isLoggedIn = useSelector(state => state?.auth?.isLoggedIn);
  return <>{isLoggedIn ? <DashBoard /> : <Auth />}</>;
};

export default NavContainer;
