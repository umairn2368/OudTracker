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
  TextInput,
} from 'react-native';
const {width, height} = Dimensions.get('window');

const InformationThird = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      <View
        style={{
          flex: 0.5,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#E5E5E5',
        }}>
        <Text style={{fontWeight: '500', fontSize: 24}}>
          What brought you here
        </Text>
        <View style={{marginTop: 21, paddingLeft: 11, paddingRight: 7}}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 18,
              justifyContent: 'center',
              textAlign: 'center',
            }}>
            We know you dace many daily challemges choose the primary one you
            want to tackle here
          </Text>
        </View>
      </View>

      <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
        <View
          style={{
            backgroundColor: '#F8F1F1',
            borderWidth: 1,
            borderRadius: 5,
            paddingLeft: 10,
            paddingRight: 10,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 18,
            }}>
            Online Media Monitoring
          </Text>
        </View>
      </View>

      <View
        style={{flex: 0.5, backgroundColor: '#E5E5E5', alignItems: 'center'}}>
        <TouchableHighlight
          onPress={() => navigation.navigate('DashBoard')}
          style={{
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
            Next
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default InformationThird;
