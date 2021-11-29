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

const InformationThird = ({navigation}) => {
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
          <Image source={require('../Assets/images/thirdInformationPic.png')} />
        </View>
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
          What brought you here
        </Text>
        <View style={{marginTop: 17, marginLeft: 20, marginRight: 20}}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 14,
              justifyContent: 'center',
              textAlign: 'center',
            }}>
            {`
            We know you dace many daily challemges choose the primary one you want to tackle here`}
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
            borderColor: '#BFBEBE',
            paddingBottom: 20,
            paddingTop: 7,
            shadowColor: '#BFBEBE',
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
                Online Media Monitoring
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
              Track media and never miss importamt conversation about your brand
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
            borderColor: '#BFBEBE',
            paddingBottom: 20,
            paddingTop: 7,
            shadowColor: '#BFBEBE',
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
                Social Media Listening
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
              Build your social strategy by listening to relevent conversation
              about your industry
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
            borderColor: '#BFBEBE',
            paddingBottom: 20,
            paddingTop: 7,
            shadowColor: '#BFBEBE',
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
                Brand Managment
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
            borderColor: '#BFBEBE',
            paddingBottom: 20,
            paddingTop: 7,
            shadowColor: '#BFBEBE',
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
                Social Media Marketing
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
              Track earned media and never miss important conversation about
              your brand product
            </Text>
          </View>
        </>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default InformationThird;
