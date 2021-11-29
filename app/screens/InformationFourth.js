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

import DropDownPicker from 'react-native-dropdown-picker';

import PhoneInput from 'react-native-phone-number-input';

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
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 0,
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginTop: 20,
        }}>
        <Image source={require('../Assets/images/logo.png')} />

        <View
          style={{
            alignItems: 'center',
            marginTop: 37,
          }}>
          <Image
            source={require('../Assets/images/fourthInformationPic.png')}
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
              color: '#25414C',
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

        <View style={{flexDirection: 'row', marginTop: 33, justifyContent: 'center',alignItems: 'center'}}>
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
                    borderColor: '#BFBEBE',
                    backgroundColor: '#32BEA6',
                  }}
                />
              ) : (
                <View
                  style={{
                    height: 18,
                    width: 18,
                    borderRadius: 18,
                    borderWidth: 1,
                    borderColor: '#BFBEBE',
                  }}
                />
              )}
            </TouchableHighlight>
        <Text
            style={{
              fontWeight: '500',
              fontSize: 14,
              color: '#25414C',
              paddingLeft: 5,
            }}>Custom alerts
          </Text>
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
                    borderColor: '#BFBEBE',
                    backgroundColor: '#32BEA6',
                  }}
                />
              ) : (
                <View
                  style={{
                    height: 18,
                    width: 18,
                    borderRadius: 18,
                    borderWidth: 1,
                    borderColor: '#BFBEBE',
                  }}
                />
              )}
            </TouchableHighlight>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 14,
              color: '#25414C',
              paddingLeft: 5,
            }}>
           Unlimited Social
          </Text>
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
                    borderColor: '#BFBEBE',
                    backgroundColor: '#32BEA6',
                  }}
                />
              ) : (
                <View
                  style={{
                    height: 18,
                    width: 18,
                    borderRadius: 18,
                    borderWidth: 1,
                    borderColor: '#BFBEBE',
                  }}
                />
              )}
            </TouchableHighlight>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 14,
              color: '#25414C',
            }}>
            Unlimited
          </Text>
          
        </View>

        <View
          style={{
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 5,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#BFBEBE',
            paddingBottom: 20,
            paddingTop: 7,
            shadowColor: '#BFBEBE',
          }}>
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
                    borderColor: '#BFBEBE',
                    backgroundColor: '#32BEA6',
                  }}
                />
              ) : (
                <View
                  style={{
                    height: 18,
                    width: 18,
                    borderRadius: 18,
                    borderWidth: 1,
                    borderColor: '#BFBEBE',
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
                  color: '#25414C',
                }}>
                Agency- Track the brand and compaigns your clients
              </Text>
            </View>
          </View>

          <View style={{marginLeft: 40}}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 14,
                color: '#BFBEBE',
              }}>
              14 days free trial. No credit card required custom pricing
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 5,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#BFBEBE',
            paddingBottom: 20,
            paddingTop: 7,
            shadowColor: '#BFBEBE',
          }}>
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
                    borderColor: '#BFBEBE',
                    backgroundColor: '#32BEA6',
                  }}
                />
              ) : (
                <View
                  style={{
                    height: 18,
                    width: 18,
                    borderRadius: 18,
                    borderWidth: 1,
                    borderColor: '#BFBEBE',
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
                  color: '#25414C',
                }}>
                ProPlus- for marketers and skilled professionals
              </Text>
            </View>
          </View>
          <View style={{marginLeft: 40}}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 14,
                color: '#BFBEBE',
              }}>
              14 days free trial. No credit card required 199$/month after trial
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 5,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#BFBEBE',
            paddingBottom: 20,
            paddingTop: 7,
            shadowColor: '#BFBEBE',
          }}>
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
                    borderColor: '#BFBEBE',
                    backgroundColor: '#32BEA6',
                  }}
                />
              ) : (
                <View
                  style={{
                    height: 18,
                    width: 18,
                    borderRadius: 18,
                    borderWidth: 1,
                    borderColor: '#BFBEBE',
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
                  color: '#25414C',
                }}>
                Pro- Track your Brand and competitiors
              </Text>
            </View>
          </View>
          <View style={{marginLeft: 40}}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 14,
                color: '#BFBEBE',
              }}>
              14 days free trial. No credit card required \99$/month after trial
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InformationFourth;
