import React, {useCallback, useState, useEffect} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';
import {useDispatch} from 'react-redux';

import LogoutIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeIcon from 'react-native-vector-icons/Ionicons';
import SettingsIcon from 'react-native-vector-icons/Feather';
import NotificationsIcon from 'react-native-vector-icons/AntDesign';

import colors from '../constants/colors';
import types from '../redux/types';

import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const DrawerContent = props => {
  const dispatch = useDispatch();

  const logOut = async () => {
    await GoogleSignin.signOut();
    LoginManager.logOut();
    dispatch({type: types.REVERT_AUTH});
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        {/* <DrawerItem
          icon={({color, size}) => (
            <HomeIcon name="md-home" color={colors.darkBlue} size={18} />
          )}
          label="Home"
          onPress={() => alert('Home')}
        />
        <DrawerItem
          icon={({color, size}) => (
            <NotificationsIcon
              name="notification"
              color={colors.darkBlue}
              size={18}
            />
          )}
          label="Notification"
          onPress={() => alert('notification')}
        />
        <DrawerItem
          icon={({color, size}) => (
            <SettingsIcon name="settings" color={colors.darkBlue} size={18} />
          )}
          label="Settings"
          onPress={() => alert('Settings')}
        /> */}
      </DrawerContentScrollView>
      <Drawer.Section
        style={{
          marginBottom: 15,
          borderTopColor: '#f4f4f4',
          borderTopWidth: 1,
        }}>
        <DrawerItem
          icon={({color, size}) => (
            <LogoutIcon name="logout" color={colors.darkBlue} size={18} />
          )}
          label="Sign Out"
          labelStyle={{color: colors.darkBlue}}
          onPress={() => {
            logOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
};

export default DrawerContent;
