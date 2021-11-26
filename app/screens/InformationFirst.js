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

const InformationFirst = ({navigation}) => {
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
          Hello, Nice to meet you!
        </Text>
        <View style={{marginTop: 21, paddingLeft: 11, paddingRight: 7}}>
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
      </View>

      <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
        <View style={{marginTop: 39, marginLeft: 30}}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 14,
            }}>
            Full Name
          </Text>
        </View>
        <View style={{marginLeft: 29, marginRight: 29, marginTop: 6}}>
          <TextInput
            placeholder="John Doe"
            placeholderTextColor="#BFBEBE"
            style={{
              height: 44,
              backgroundColor: '#F8F1F1',
              borderWidth: 1,
              borderRadius: 5,
              color: 'black',
              paddingLeft: 10,
              paddingRight: 10,
            }}/>
        </View>

        <View style={{marginTop: 39, marginLeft: 30}}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 14,
            }}>
            Job Position
          </Text>
        </View>
        <View style={{marginLeft: 29, marginRight: 29, marginTop: 6}}>
          <TextInput
            placeholder="Select job position"
            placeholderTextColor="#BFBEBE"
            style={{
              height: 44,
              backgroundColor: '#F8F1F1',
              borderWidth: 1,
              borderRadius: 5,
              color: 'black',
              paddingLeft: 10,
              paddingRight: 10,
            }}/>
        </View>


        <View style={{marginTop: 39, marginLeft: 30}}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 14,
            }}>
            Phone No
          </Text>
        </View>
        <View style={{marginLeft: 29, marginRight: 29, marginTop: 6}}>
          <TextInput
            placeholder="+92333333333"
            placeholderTextColor="#BFBEBE"
            style={{
              height: 44,
              backgroundColor: '#F8F1F1',
              borderWidth: 1,
              borderRadius: 5,
              color: 'black',
              paddingLeft: 10,
              paddingRight: 10,
            }}/>
        </View>
      </View>

      <View style={{flex: 0.5, backgroundColor: '#E5E5E5',alignItems: 'center'}}>
        <TouchableHighlight
          onPress={() => navigation.navigate('InformationSecond')}
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

export default InformationFirst;
