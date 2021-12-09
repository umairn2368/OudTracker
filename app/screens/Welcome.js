import React, {useCallback, useState, useEffect} from 'react';
import {
  Dimensions,
  Platform,
  ScrollView,
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';

import colors from '../constants/colors';

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View
        style={{
          flex: 0.5,
          alignItems: 'center',
          justifyContent: 'flex-end',
          backgroundColor: colors.white,
        }}>
        <Image source={require('../assets/images/logo.png')} />
      </View>

      <View
        style={{
          flex: 0.5,
          alignItems: 'center',
          backgroundColor: colors.white,
        }}>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 18,
            justifyContent: 'center',
            textAlign: 'center',
            paddingTop: 37,
            color: colors.darkBlue,
          }}>
          Welcome
        </Text>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 18,
            justifyContent: 'center',
            textAlign: 'center',
            paddingTop: 37,
            color: colors.darkBlue,
          }}>
          {`Welcome to Qoud \n we Fragrance your Image`}
        </Text>
      </View>

      <View
        style={{
          flex: 0.5,
          alignItems: 'center',
          justifyContent: 'center',
          color: colors.white,
        }}>
        <TouchableHighlight
          underlayColor=""
          onPress={() => navigation.navigate('Login')}
          style={{
            height: 43,
            width: 318,
            backgroundColor: colors.green,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 18,
              color: colors.white,
            }}>
            Log In
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor=""
          onPress={() => navigation.navigate('Register')}
          style={{
            height: 43,
            width: 318,
            backgroundColor: colors.white,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 17,
            borderWidth: 1,
            borderColor: colors.darkGrey,
          }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 18,
              color: colors.black,
            }}>
            Register
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
