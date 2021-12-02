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
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import colors from '../Constants/Colors';

import {heightPercentageToDP, widthPercentageToDP} from '../Helper/Responsive';
const InformationThird = ({navigation}) => {

  const [checkOnline, setCheckOnline] = useState(false);
  const [checkMediaListening, setCheckMediaListening] = useState(false);
  const [checkBrandManagement, setCheckBrandManagement] = useState(false);
  const [checkSocailMediaMarketing, setCheckSocailMediaMarketing] =
    useState(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <ScrollView bounces={false} style={styles.scrollView}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <View
            style={{
              marginTop: 20,
              marginBottom: 30,
              alignItems: 'center',
            }}>
            <Image source={require('../Assets/images/logo.png')} />
          </View>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
            }}>
            <Image
              source={require('../Assets/images/thirdInformationPic.png')}
              style={{width: '70%'}}
            />
          </View>
        </View>

        <View style={{flex: 1}}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 24,
                paddingTop: 37,
                color: colors.darkBlue,
              }}>
              What brought you here
            </Text>
          </View>

          <View
            style={{
              marginTop: 17,
              marginLeft: 20,
              marginRight: 20,
            }}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 14,
                color: colors.darkBlue,
                textAlign: 'center',
              }}>
              {`We know you dace many daily challemges choose the primary one you want to tackle here`}
            </Text>
          </View>

          <TouchableHighlight
            underlayColor=""
            onPress={() => navigation.navigate('InformationFourth')}
            style={{
              marginTop: 20,
              marginLeft: 20,
              marginRight: 20,
              borderRadius: 5,
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderBottomWidth: 1,
              borderColor: colors.lightGrey,
              paddingBottom: 20,
              paddingTop: 7,
              shadowColor: colors.lightGrey,
            }}>
            <>
              <View style={{flexDirection: 'row', marginLeft: 13}}>
                <TouchableHighlight
                  underlayColor=""
                  onPress={() => {
                    setCheckOnline(!checkOnline),
                      setCheckMediaListening(false),
                      setCheckBrandManagement(false),
                      setCheckSocailMediaMarketing(false);
                  }}>
                  {checkOnline ? (
                    <View
                      style={{
                        height: 18,
                        width: 18,
                        borderRadius: 18,
                        borderWidth: 1,
                        borderColor: colors.lightGrey,
                        backgroundColor: colors.green,
                      }}
                    />
                  ) : (
                    <View
                      style={{
                        height: 18,
                        width: 18,
                        borderRadius: 18,
                        borderWidth: 1,
                        borderColor: colors.lightGrey,
                      }}
                    />
                  )}
                </TouchableHighlight>
                <View
                  style={{
                    marginLeft: 8,
                  }}>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 14,
                      justifyContent: 'center',
                      textAlign: 'center',
                      color: colors.darkBlue,
                    }}>
                    Online Media Monitoring
                  </Text>
                </View>
              </View>

              <View style={{marginLeft: 40}}>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 14,
                    color: colors.lightGrey,
                  }}>
                  Track media and never miss importamt conversation about your
                  brand
                </Text>
              </View>
            </>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor=""
            onPress={() => navigation.navigate('InformationFourth')}
            style={{
              marginTop: 20,
              marginLeft: 20,
              marginRight: 20,
              borderRadius: 5,
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderBottomWidth: 1,
              borderColor: colors.lightGrey,
              paddingBottom: 20,
              paddingTop: 7,
              shadowColor: colors.lightGrey,
            }}>
            <>
              <View style={{flexDirection: 'row', marginLeft: 13}}>
                <TouchableHighlight
                  underlayColor=""
                  onPress={() => {
                    setCheckOnline(false),
                      setCheckMediaListening(!checkMediaListening),
                      setCheckBrandManagement(false),
                      setCheckSocailMediaMarketing(false);
                  }}>
                  {checkMediaListening ? (
                    <View
                      style={{
                        height: 18,
                        width: 18,
                        borderRadius: 18,
                        borderWidth: 1,
                        borderColor: colors.lightGrey,
                        backgroundColor: colors.green,
                      }}
                    />
                  ) : (
                    <View
                      style={{
                        height: 18,
                        width: 18,
                        borderRadius: 18,
                        borderWidth: 1,
                        borderColor: colors.lightGrey,
                      }}
                    />
                  )}
                </TouchableHighlight>
                <View
                  style={{
                    marginLeft: 8,
                  }}>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 14,
                      justifyContent: 'center',
                      textAlign: 'center',
                      color: colors.darkBlue,
                    }}>
                    Social Media Listening
                  </Text>
                </View>
              </View>
              <View style={{marginLeft: 40}}>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 14,
                    color: colors.lightGrey,
                  }}>
                  Build your social strategy by listening to relevent
                  conversation about your industry
                </Text>
              </View>
            </>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor=""
            onPress={() => navigation.navigate('InformationFourth')}
            style={{
              marginTop: 20,
              marginLeft: 20,
              marginRight: 20,
              borderRadius: 5,
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderBottomWidth: 1,
              borderColor: colors.lightGrey,
              paddingBottom: 20,
              paddingTop: 7,
              shadowColor: colors.lightGrey,
            }}>
            <>
              <View style={{flexDirection: 'row', marginLeft: 13}}>
                <TouchableHighlight
                  underlayColor=""
                  onPress={() => {
                    setCheckOnline(false),
                      setCheckMediaListening(false),
                      setCheckBrandManagement(!checkBrandManagement),
                      setCheckSocailMediaMarketing(false);
                  }}>
                  {checkBrandManagement ? (
                    <View
                      style={{
                        height: 18,
                        width: 18,
                        borderRadius: 18,
                        borderWidth: 1,
                        borderColor: colors.lightGrey,
                        backgroundColor: colors.green,
                      }}
                    />
                  ) : (
                    <View
                      style={{
                        height: 18,
                        width: 18,
                        borderRadius: 18,
                        borderWidth: 1,
                        borderColor: colors.lightGrey,
                      }}
                    />
                  )}
                </TouchableHighlight>
                <View
                  style={{
                    marginLeft: 8,
                  }}>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 14,
                      justifyContent: 'center',
                      textAlign: 'center',
                      color: colors.darkBlue,
                    }}>
                    Brand Managment
                  </Text>
                </View>
              </View>
              <View style={{marginLeft: 40}}>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 14,
                    color: colors.lightGrey,
                  }}>
                  Analyse how your brand is precieved online to strengthen your
                  strategy
                </Text>
              </View>
            </>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor=""
            onPress={() => navigation.navigate('InformationFourth')}
            style={{
              marginTop: 20,
              marginLeft: 20,
              marginRight: 20,
              borderRadius: 5,
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderBottomWidth: 1,
              borderColor: colors.lightGrey,
              paddingBottom: 20,
              paddingTop: 7,
              shadowColor: colors.lightGrey,
            }}>
            <>
              <View style={{flexDirection: 'row', marginLeft: 13}}>
                <TouchableHighlight
                  underlayColor=""
                  onPress={() => {
                    setCheckOnline(false),
                      setCheckMediaListening(false),
                      setCheckBrandManagement(false),
                      setCheckSocailMediaMarketing(!checkSocailMediaMarketing);
                  }}>
                  {checkSocailMediaMarketing ? (
                    <View
                      style={{
                        height: 18,
                        width: 18,
                        borderRadius: 18,
                        borderWidth: 1,
                        borderColor: colors.lightGrey,
                        backgroundColor: colors.green,
                      }}
                    />
                  ) : (
                    <View
                      style={{
                        height: 18,
                        width: 18,
                        borderRadius: 18,
                        borderWidth: 1,
                        borderColor: colors.lightGrey,
                      }}
                    />
                  )}
                </TouchableHighlight>
                <View
                  style={{
                    marginLeft: 8,
                  }}>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 14,
                      justifyContent: 'center',
                      textAlign: 'center',
                      color: colors.darkBlue,
                    }}>
                    Social Media Marketing
                  </Text>
                </View>
              </View>
              <View style={{marginLeft: 40}}>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 14,
                    color: colors.lightGrey,
                  }}>
                  Track earned media and never miss important conversation about
                  your brand product
                </Text>
              </View>
            </>
          </TouchableHighlight>
        </View>
      </ScrollView>
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
});

export default InformationThird;
