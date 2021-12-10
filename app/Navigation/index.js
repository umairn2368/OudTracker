import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import Auth from './authStack/index';
import DashBoard from './dashboardStack/index';

const Stack = createNativeStackNavigator();

const NavContainer = () => {
  const user = useSelector(state => state?.auth?.user);
  return <>{user.email && user.password ? <DashBoard /> : <Auth />}</>;
};

export default NavContainer;
