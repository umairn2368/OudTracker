import React, {useCallback, useState, useEffect} from 'react';
import {View, Text, TouchableHighlight, Image, LogBox} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
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
  
  const user = useSelector(state => state?.auth?.user);
  console.log('user', user);

  const logOut = async () => {
    await GoogleSignin.signOut();
    LoginManager.logOut();
    dispatch({type: types.REVERT_AUTH});
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props} bounces={false}>
        <View
          style={{
            flex: 1,
          }}>
          {/* <View
            style={{
              paddingRight: 20,
              paddingLeft: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: '100%', height: '50%'}}
              source={require('../assets/images/logo.png')}
            />
          </View> */}
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: 0.5,
              borderBottomColor: colors.darkGrey,
            }}>
            {user?.photo ? (
              <Image
                source={{
                  uri: user?.photo,
                }}
                style={{width: 100, height: 100, borderRadius: 100}}
              />
            ) : user?.picture ? (
              <Image
                source={{
                  uri: `${user?.picture?.data?.url}`,
                }}
                style={{width: 100, height: 100, borderRadius: 100}}
              />
            ) : (
              <Image
                style={{
                  width: '100%',
                  height: '50%',
                  paddingTop: 30,
                  paddingBottom: 30,
                }}
                source={require('../assets/images/logo.png')}
              />
            )}
            <Text
              style={{
                paddingTop: 20,
                fontSize: 22,
                fontWeight: 'bold',
                color: colors.darkBlue,
                paddingBottom: 20,
              }}>
              {user?.name}
            </Text>
          </View>
        </View>
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
