import React, {useCallback, useState, useEffect} from 'react';
import {
  Dimensions,
  Platform,
  ScrollView,
  View,
  Image,
  Text,
  TouchableHighlight,
  SafeAreaView,
} from 'react-native';

import colors from '../Constants/Colors';
import {useSelector, useDispatch} from 'react-redux';


const DashBoard = () => {
  const user = useSelector((state) => state?.auth?.user);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          marginTop: 64,
          marginLeft: 21,
          marginRight: 21,
          backgroundColor: '#F8F1F1',
          borderWidth: 1,
          borderColor: colors.black,
          borderRadius: 5,
        }}>
        <View
          style={{
            marginTop: 37,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: '500', fontSize: 24}}>
            Manage your brand
          </Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontWeight: '500', fontSize: 24}}>online</Text>
        </View>

        <View
          style={{
            marginTop: 37,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: '500', fontSize: 18, color: '#BFBEBE'}}>
            Listen to the online conversation and never miss the valuable
            information, measure your performance and start actioning insights
            that inform your strategy
          </Text>
        </View>

        <TouchableHighlight
          onPress={() => console.log('hi')}
          style={{
            height: 53,
            width: 229,
            backgroundColor: '#25414C',
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            marginBottom: 20,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 18,
              color: colors.white,
            }}>
            Create your first alert
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default DashBoard;
