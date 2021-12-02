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

import {Dropdown} from 'react-native-material-dropdown-v2-fixed';
import PhoneInput from 'react-native-phone-number-input';
import colors from '../Constants/Colors';
import {heightPercentageToDP, widthPercentageToDP} from '../Helper/Responsive';

const InformationFourth = ({navigation}) => {
  const [customAlert, setCustomAlert] = useState(false);
  const [unlimitedSocial, setUnlimitedSocial] = useState(false);
  const [unlimited, setUnlimited] = useState(false);

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
              source={require('../Assets/images/fourthInformationPic.png')}
              style={{width: '70%'}}
            />
          </View>
        </View>

        <View style={{flex: 1}}>
          <View style={{marginLeft: 38, marginRight: 38}}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 24,
                justifyContent: 'center',
                textAlign: 'center',
                paddingTop: 37,
                color: colors.darkBlue,
              }}>
              Select the plan you want to try free
            </Text>
          </View>
          <View style={{marginTop: 17, marginLeft: 20, marginRight: 20}}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 14,
                justifyContent: 'center',
                textAlign: 'center',
              }}>
              {`
            We know you face many daily challemges choose the primary one you want to tackle here`}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 33,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableHighlight
              underlayColor=""
              onPress={() => setCustomAlert(!customAlert)}>
              {customAlert ? (
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
            <Text
              style={{
                fontWeight: '500',
                fontSize: 14,
                color: colors.darkBlue,
                paddingLeft: 5,
              }}>
              Custom alerts
            </Text>
            <TouchableHighlight
              underlayColor=""
              onPress={() => setUnlimitedSocial(!unlimitedSocial)}
              style={{marginLeft: 11}}>
              {unlimitedSocial ? (
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
            <Text
              style={{
                fontWeight: '500',
                fontSize: 14,
                color: colors.darkBlue,
                paddingLeft: 5,
              }}>
              Unlimited Social
            </Text>
            <TouchableHighlight
              underlayColor=""
              onPress={() => setUnlimited(!unlimited)}
              style={{marginLeft: 11}}>
              {unlimited ? (
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
            <Text
              style={{
                fontWeight: '500',
                fontSize: 14,
                color: colors.darkBlue,
                paddingLeft: 5,
              }}>
              Unlimited
            </Text>
          </View>

          <View
            style={{
              flex: 1,
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
            <View style={{flexDirection: 'row'}}>
              <TouchableHighlight
                underlayColor=""
                onPress={() => {
                  setCheckOnline(!checkOnline),
                    setCheckMediaListening(false),
                    setCheckBrandManagement(false),
                    setCheckSocailMediaMarketing(false);
                }}
                style={{
                  flex: 0.1,
                  alignItems: 'center',
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
              <View style={{flex: 0.9}}>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 14,
                    justifyContent: 'center',
                    color: colors.darkBlue,
                  }}>
                  Agency- Track the brand and compaigns your clients
                </Text>
              </View>
            </View>

            <View
              style={{flex: 1, marginLeft: 35, marginRight: 35, marginTop: 5}}>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 14,
                  color: colors.lightGrey,
                }}>
                14 days free trial. No credit card required custom pricing
              </Text>
            </View>
          </View>

          <View
            style={{
              flex: 1,
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
            <View style={{flexDirection: 'row'}}>
              <TouchableHighlight
                underlayColor=""
                onPress={() => {
                  setCheckOnline(false),
                    setCheckMediaListening(!checkMediaListening),
                    setCheckBrandManagement(false),
                    setCheckSocailMediaMarketing(false);
                }}
                style={{
                  flex: 0.1,
                  alignItems: 'center',
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
              <View style={{flex: 0.9}}>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 14,
                    justifyContent: 'center',
                    color: colors.darkBlue,
                  }}>
                  ProPlus- for marketers and skilled professionals
                </Text>
              </View>
            </View>

            <View
              style={{flex: 1, marginLeft: 35, marginRight: 35, marginTop: 5}}>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 14,
                  color: colors.lightGrey,
                }}>
                14 days free trial. No credit card required 199$/month after
                trial
              </Text>
            </View>
          </View>

          <View
            style={{
              flex: 1,
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
            <View style={{flexDirection: 'row'}}>
              <TouchableHighlight
                underlayColor=""
                onPress={() => {
                  setCheckOnline(false),
                    setCheckMediaListening(false),
                    setCheckBrandManagement(!checkBrandManagement),
                    setCheckSocailMediaMarketing(false);
                }}
                style={{
                  flex: 0.1,
                  alignItems: 'center',
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
              <View style={{flex: 0.9}}>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 14,
                    justifyContent: 'center',
                    color: colors.darkBlue,
                  }}>
                  Pro- Track your Brand and competitiors
                </Text>
              </View>
            </View>

            <View
              style={{flex: 1, marginLeft: 35, marginRight: 35, marginTop: 5}}>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 14,
                  color: colors.lightGrey,
                }}>
                14 days free trial. No credit card required 99$ /month after
                trial
              </Text>
            </View>
          </View>
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

export default InformationFourth;
