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

import IconSearch from 'react-native-vector-icons/AntDesign';
import colors from '../constants/colors';

const Register = ({navigation}) => {
  const [signInCheck, setSignInCheck] = useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View
        style={{
          flex: 0,
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginTop: 20,
        }}>
        <Image source={require('../assets/images/logo.png')} />
      </View>
      <View style={{flex: 1}}>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 24,
            justifyContent: 'center',
            textAlign: 'center',
            paddingTop: 37,
            color: '#25414C',
          }}>
          Start your 14 days free Trial
        </Text>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 14,
            justifyContent: 'center',
            textAlign: 'center',
            paddingTop: 37,
            color: '#25414C',
          }}>
          {`You are one minute away from first oudpr
(we timed it) No credit card required.`}
        </Text>

        <Text
          style={{
            fontWeight: '500',
            fontSize: 14,
            marginTop: 26,
            marginLeft: 36,
            color: '#25414C',
          }}>
          Email
        </Text>

        <View style={{marginLeft: 29, marginRight: 29, marginTop: 6}}>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#BFBEBE"
            style={{
              height: 44,
              backgroundColor: '#FFFFFF',
              borderWidth: 1,
              borderColor: '#BFBEBE',
              borderRadius: 5,
              color: 'black',
              paddingLeft: 10,
              paddingRight: 10,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 8,
            marginLeft: 32,
            marginRight: 32,
          }}>
          <TouchableHighlight
            underlayColor=""
            onPress={() => setSignInCheck(!signInCheck)}>
            {signInCheck ? (
              <View
                style={{
                  height: 18,
                  width: 18,
                  borderWidth: 1,
                  borderRadius: 2,
                  borderColor: '#BFBEBE',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <IconSearch name="check" size={15} color={'#32BEA6'} />
              </View>
            ) : (
              <View
                style={{
                  height: 18,
                  width: 18,
                  borderWidth: 1,
                  borderRadius: 2,
                  borderColor: '#BFBEBE',
                }}
              />
            )}
          </TouchableHighlight>

          <Text
            style={{
              fontWeight: '500',
              fontSize: 14,
              paddingLeft: 5,
              color: '#BFBEBE',
            }}>
            I accept the
          </Text>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 14,
              paddingLeft: 5,
              color: '#1657AE',
            }}>
            terms and conditions
          </Text>
        </View>

        <View
          style={{
            marginTop: 21,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 32,
            marginRight: 33,
          }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 14,
              paddingLeft: 5,
              color: '#BFBEBE',
            }}>
            By submitting the form, you agree to allow oudpr store and process
            your personal data for the purpose of creating and administrating
            your user account. You can read more about how we store your data in
            our privacy policy. Please note that our terms and conditions apply
            to all use of our services.
          </Text>
        </View>

        <TouchableHighlight
          underlayColor=""
          disabled={signInCheck ? false : true}
          onPress={() => navigation.navigate('InformationFirst')}
          style={{
            height: 43,
            width: 318,
            backgroundColor: signInCheck
              ? '#32BEA6'
              : 'rgba(50, 190, 166, 0.39)',
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 20,
          }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 18,
              color: colors.white,
            }}>
            Create your account
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default Register;
