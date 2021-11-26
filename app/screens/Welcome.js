import React, {useCallback, useState, useEffect} from 'react';
import {
  Dimensions,
  Platform,
  ScrollView,
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableHighlight
} from 'react-native';
const {width, height} = Dimensions.get('window');

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{marginTop: 97}}>
          <Text style={{fontWeight: '500', fontSize: 24}}>
            Welcome to the mention
          </Text>
        </View>
        <View style={{marginTop: 52}}>
          <Image
            style={{height: 232, width: 331}}
            source={require('../assets/images/welcomeImage.png')}
          />
        </View>
        <View style={{marginLeft: 53, marginRight: 41}}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 18,
              justifyContent: 'center',
              textAlign: 'center',
            }}>
            Let's get know to each other so we can setup your account
          </Text>
        </View>

        <TouchableHighlight
        onPress={()=>
            navigation.navigate('InformationFirst')}
          style={{
            marginTop: 47,
            marginLeft: 61,
            marginRight: 60,
            height: 53,
            width: 229,
            backgroundColor: '#25414C',
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
            Create Account
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
