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
  KeyboardAvoidingView,
} from 'react-native';
import {Container} from '../Components/Container/Container';
import {heightPercentageToDP, widthPercentageToDP} from '../Helper/Responsive';

import IconSearch from 'react-native-vector-icons/AntDesign';

const Login = ({navigation}) => {
  const [signInCheck, setSignInCheck] = useState(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 0,
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginTop: 20,
        }}>
        <Image source={require('../Assets/images/logo.png')} />
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
          Log In
        </Text>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 18,
            justifyContent: 'center',
            textAlign: 'center',
            paddingTop: 37,
          }}>
          {`Stay Signed in with your account makes searching easier`}
        </Text>

        <Text
          style={{
            fontWeight: '500',
            fontSize: 14,
            marginTop: 26,
            marginLeft: 36,
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

        <Text
          style={{
            fontWeight: '500',
            fontSize: 14,
            marginTop: 9,
            marginLeft: 36,
          }}>
          Password
        </Text>

        <View style={{marginLeft: 29, marginRight: 29, marginTop: 6}}>
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor="#BFBEBE"
            style={{
              height: 44,
              backgroundColor: '#FFFFFF',
              borderWidth: 1,
              borderRadius: 5,
              borderColor: '#BFBEBE',
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
            justifyContent: 'space-between',
            marginLeft: 32,
            marginRight: 32,
          }}>
          <View
            style={{
              flexDirection: 'row',
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
                    alignItems: 'center'
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
              Keep me signed in
            </Text>
          </View>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 14,
              paddingLeft: 5,
              color: '#DB1010',
            }}>
            Forgot password?
          </Text>
        </View>

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
            alignSelf: 'center',
            marginTop: 24,
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
        <View
          style={{
            marginTop: 14,
            flexDirection: 'row',
            marginLeft: 10,
            marginRight: 10,
          }}>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#BFBEBE',
              width: '46.5%',
              height: 0,
              marginTop: 7,
            }}
          />
          <Text
            style={{
              fontWeight: '500',
              fontSize: 13,
              color: '#BFBEBE',
              marginLeft: 4,
              marginRight: 4,
            }}>
            Or
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#BFBEBE',
              width: '46.5%',
              height: 0,
              marginTop: 7,
            }}
          />
        </View>

        <TouchableHighlight
          underlayColor=""
          onPress={() => navigation.navigate('Login')}
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
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 18,
              color: 'black',
            }}>
            Continue with Google
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor=""
          onPress={() => navigation.navigate('Login')}
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
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 18,
              color: 'black',
            }}>
            Continue with Facebook
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default Login;
