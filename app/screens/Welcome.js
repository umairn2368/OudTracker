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
const {width, height} = Dimensions.get('window');

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 0.5,
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <Image source={require('../Assets/images/logo.png')} />
      </View>
      <View style={{flex: 0.5, alignItems: 'center'}}>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 18,
            justifyContent: 'center',
            textAlign: 'center',
            paddingTop: 37,
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
          }}>
          {`Welcome to Qoud \n we Fragrance your Image`}
        </Text>
      </View>

      <View
        style={{
          flex: 0.5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableHighlight
          underlayColor=""
          onPress={() => navigation.navigate('Login')}
          style={{
            height: 43,
            width: 318,
            backgroundColor: '#32BEA6',
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 18,
              color: 'white',
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
            backgroundColor: '#FFFFFF',
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 17,
            borderWidth: 1,
            borderColor: '#E5E5E5',
          }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 18,
              color: 'black',
            }}>
            Register
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
