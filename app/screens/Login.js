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
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

import {useDispatch} from 'react-redux';
import IconSearch from 'react-native-vector-icons/AntDesign';
import EyeIcon from 'react-native-vector-icons/Feather';
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

import colors from '../constants/colors';
import types from '../redux/types';
import {emailRegex} from '../constants/emailRegex';
import Api from '../api';

GoogleSignin.configure({
  webClientId:
    '811590839213-nnml5log03o8gc4gmaj7888dsokd61kp.apps.googleusercontent.com',
  offlineAccess: true,
});

const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const [signInCheck, setSignInCheck] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [loadingFB, setLoadingFB] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);

  const login = async () => {
    if (email == '') {
      alert('Please enter email');
    } else if (!emailRegex.test(email)) {
      alert('Please enter valid email');
    } else if (password == '') {
      alert('Please enter password');
    } else {
      setLoading(true);
      setLoadingFB(false);
      setLoadingGoogle(false);

      let data = new FormData();
      data.append('email', email);
      data.append('password', password);
      console.log({data});

      try {
        let res = await Api.post('/login', data);
        console.log('User login api response', res);
        dispatch({
          type: types.ADD_USER,
          user: res?.data?.data,
        });
        setLoading(false);
        console.log('hi1');
      } catch (error) {
        setLoading(false);
        console.log(error);
        console.log('hi2')
        if (error?.message == 'Request failed with status code 403') {
          alert('wrong credentials!');
        }
      }
    }
  };

  const loginWithGoogle = async () => {
    setLoading(false);
    setLoadingFB(false);
    setLoadingGoogle(true);
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      console.log(userInfo);
      let data = new FormData();
      data.append('email', userInfo?.user?.email);
      data.append('social_id', userInfo?.user?.id);
      data.append('name', userInfo?.user?.name);

      try {
        let res = await Api.post('/loginWithGoogle', data);
        console.log('User google login api response', res);
        dispatch({
          type: types.ADD_USER,
          user: res?.data?.data,
        });

        setLoadingGoogle(false);
      } catch (error) {
        setLoadingGoogle(false);
        console.log(error);
      }
    } catch (error) {
      setLoadingGoogle(false);
      console.log(error.message);
    }
  };

  const loginWithFacebook = () => {
    setLoadingFB(true);
    setLoading(false);
    setLoadingGoogle(false);

    LoginManager.logInWithPermissions(['public_profile']).then(
      login => {
        if (login.isCancelled) {
          console.log('Login cancelled');
          setLoadingFB(false);
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            const accessToken = data.accessToken.toString();
            getInfoFromToken(accessToken);
          });
        }
      },
      error => {
        console.log('Login fail with error: ' + error);
      },
    );
  };

  const getInfoFromToken = token => {
    setLoadingFB(true);
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: 'id,name,first_name,last_name,picture',
      },
    };
    const profileRequest = new GraphRequest(
      '/me',
      {token, parameters: PROFILE_REQUEST_PARAMS},
      (error, user) => {
        if (error) {
          setLoadingFB(false);
          console.log('login info has error: ' + error);
        } else {
          console.log('result:', user);
          loginWithFacebookAPI(user);
        }
      },
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  };

  const loginWithFacebookAPI = async user => {
    setLoadingFB(true);
    let data = new FormData();
    data.append('social_id', user?.id);
    data.append('name', user?.name);

    try {
      let res = await Api.post('/loginWithFacebook', data);
      console.log('User facebook login api response', res);
      dispatch({
        type: types.ADD_USER,
        user: res?.data?.data,
      });
      setLoadingFB(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <ScrollView bounces={false} style={styles.scrollView}>
          <View style={styles.imageContainer}>
            <Image source={require('../assets/images/logo.png')} />
          </View>

          <View style={styles.mainContainer}>
            <View
              style={{
                marginTop: 30,
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 24,
                  paddingTop: 37,
                  color: colors.darkBlue,
                }}>
                Log In
              </Text>
            </View>

            <View style={{marginTop: 30, marginLeft: 25, marginRight: 25}}>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 18,
                  textAlign: 'center',
                }}>
                {`Stay Signed in with your account makes searching easier`}
              </Text>
            </View>

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
                placeholderTextColor={colors.lightGrey}
                onChangeText={val => setEmail(val)}
                autoCapitalize="none"
                keyboardType="email-address"
                style={{
                  height: 44,
                  backgroundColor: colors.white,
                  borderWidth: 1,
                  borderColor: colors.lightGrey,
                  borderRadius: 5,
                  color: colors.black,
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

            <View
              style={{
                flex: 1,
                marginLeft: 29,
                marginRight: 29,
                marginTop: 6,
                flexDirection: 'row',
                borderWidth: 1,
                borderRadius: 5,
                borderColor: colors.lightGrey,
              }}>
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor={colors.lightGrey}
                secureTextEntry={showPassword}
                keyboardType="default"
                onChangeText={val => setPassword(val)}
                style={{
                  height: 44,
                  backgroundColor: colors.white,
                  color: colors.black,
                  marginLeft: 10,
                  marginRight: 10,
                  flex: 0.9,
                }}
              />
              <TouchableHighlight
                underlayColor=""
                onPress={() => setShowPassword(!showPassword)}
                style={{flex: 0.1, justifyContent: 'center'}}>
                {showPassword ? (
                  <EyeIcon name="eye-off" size={18} color={'#BFBEBE'} />
                ) : (
                  <EyeIcon name="eye" size={18} color={'#32BEA6'} />
                )}
              </TouchableHighlight>
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
                        borderColor: colors.lightGrey,
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
                        borderColor: colors.lightGrey,
                      }}
                    />
                  )}
                </TouchableHighlight>

                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 14,
                    paddingLeft: 5,
                    color: colors.lightGrey,
                  }}>
                  Keep me signed in
                </Text>
              </View>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 14,
                  paddingLeft: 5,
                  color: colors.red,
                }}>
                Forgot password?
              </Text>
            </View>

            <TouchableHighlight
              underlayColor=""
              onPress={() => login()}
              style={styles.loginButtonContainer}>
              {loading ? (
                <ActivityIndicator size="small" color={colors.white} />
              ) : (
                <Text style={styles.loginButtonText}>Log In</Text>
              )}
            </TouchableHighlight>

            <View
              style={{
                marginTop: 14,
                flexDirection: 'row',
                marginLeft: 40,
                marginRight: 40,
              }}>
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: colors.lightGrey,
                  width: '46.5%',
                  height: 0,
                  marginTop: 7,
                }}
              />
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 13,
                  color: colors.lightGrey,
                  marginLeft: 4,
                  marginRight: 4,
                }}>
                Or
              </Text>
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: colors.lightGrey,
                  width: '46.5%',
                  height: 0,
                  marginTop: 7,
                }}
              />
            </View>

            <TouchableHighlight
              underlayColor=""
              onPress={() => loginWithGoogle()}
              style={{
                height: 43,
                width: 318,
                backgroundColor: colors.white,
                borderRadius: 5,
                alignItems: 'center',
                marginTop: 17,
                borderWidth: 1,
                borderColor: colors.darkGrey,
                alignSelf: 'center',
                flexDirection: 'row',
              }}>
              <>
                {loadingGoogle ? (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <ActivityIndicator size="small" color={colors.green} />
                  </View>
                ) : (
                  <>
                    <View
                      style={{
                        flex: 0.25,
                        alignItems: 'flex-end',
                        paddingRight: 15,
                      }}>
                      <Image
                        source={require('../assets/images/google.png')}
                        style={{width: 18, height: 18}}
                      />
                    </View>
                    <View style={{flex: 0.75}}>
                      <Text
                        style={{
                          fontWeight: '500',
                          fontSize: 18,
                          color: colors.darkBlue,
                        }}>
                        Continue with Google
                      </Text>
                    </View>
                  </>
                )}
              </>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor=""
              onPress={() => loginWithFacebook()}
              style={{
                height: 43,
                width: 318,
                backgroundColor: colors.white,
                borderRadius: 5,
                alignItems: 'center',
                marginTop: 17,
                borderWidth: 1,
                borderColor: colors.darkGrey,
                alignSelf: 'center',
                flexDirection: 'row',
              }}>
              <>
                {loadingFB ? (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <ActivityIndicator size="small" color={colors.green} />
                  </View>
                ) : (
                  <>
                    <View
                      style={{
                        flex: 0.25,
                        alignItems: 'flex-end',
                        paddingRight: 15,
                      }}>
                      <Image
                        source={require('../assets/images/facebook.png')}
                        style={{width: 18, height: 18}}
                      />
                    </View>
                    <View style={{flex: 0.75}}>
                      <Text
                        style={{
                          fontWeight: '500',
                          fontSize: 18,
                          color: colors.darkBlue,
                        }}>
                        Continue with Facebook
                      </Text>
                    </View>
                  </>
                )}
              </>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: colors.white,
    flex: 1,
    marginBottom: 10,
  },
  imageContainer: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  mainContainer: {
    flex: 1,
  },
  loginButtonContainer: {
    height: 43,
    width: 318,
    backgroundColor: colors.green,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 24,
  },
  loginButtonText: {
    fontWeight: '500',
    fontSize: 18,
    color: colors.white,
  },
});

export default Login;
