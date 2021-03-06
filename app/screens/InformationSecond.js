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

import colors from '../constants/colors';
import {heightPercentageToDP, widthPercentageToDP} from '../helper/Responsive';

const InformationSecond = ({navigation, route}) => {
  let routeData = route?.params;

  let data = [
    {
      label: '1',
      value: '1',
    },
    {
      label: '2',
      value: '2',
    },
    {
      label: '3',
      value: '3',
    },
    {
      label: '4',
      value: '4',
    },
    {
      label: '5',
      value: '5',
    },
  ];

  let data2 = [
    {
      label: 'Company Service One',
      value: 'Company Service One',
    },
    {
      label: 'Company Service Two',
      value: 'Company Service Two',
    },
    {
      label: 'Company Service Three',
      value: 'Company Service Three',
    },
    {
      label: 'Company Service Four',
      value: 'Company Service Four',
    },
    {
      label: 'Company Service Five',
      value: 'Company Service Five',
    },
  ];

  const [checkAgencyYes, setCheckAgencyYes] = useState(false);
  const [checkAgencyNo, setCheckAgencyNo] = useState(false);

  const [companyName, setCompanyName] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [serviceProvide, setServiceProvide] = useState('');

  const nextStep = async () => {
    if (companyName == '') {
      alert('Please enter company name');
    } else if (companySize == '') {
      alert('Please select company size');
    } else if (checkAgencyYes == true) {
      if (serviceProvide == '') {
        alert('Please select service provide');
      } else {
        navigation.navigate('InformationThird', {
          fullName: routeData.fullName,
          position: routeData.position,
          phoneNumber: routeData.phoneNumber,
          email: routeData.email,
          password: routeData?.password,
          companyName: companyName,
          companySize: companySize,
          serviceProvide: serviceProvide,
          checkAgencyYes: checkAgencyYes
        });
      }
    } else {
      navigation.navigate('InformationThird', {
        fullName: routeData.fullName,
        position: routeData.position,
        phoneNumber: routeData.phoneNumber,
        email: routeData.email,
        companyName: companyName,
        companySize: companySize,
        serviceProvide: serviceProvide,
      });
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
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
              <Image source={require('../assets/images/logo.png')} />
            </View>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/images/secondInformationPic.png')}
                style={{width: '70%'}}
              />
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
                color: colors.darkBlue,
              }}>
              Where do you Work?
            </Text>

            <View style={{marginTop: 17, marginLeft: 20, marginRight: 20}}>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 14,
                  justifyContent: 'center',
                  textAlign: 'center',
                  color: colors.darkBlue,
                }}>
                {`Tell us more about your company, so we can Adapt your experience to your needs`}
              </Text>
            </View>

            <Text
              style={{
                fontWeight: '500',
                fontSize: 14,
                marginTop: 26,
                marginLeft: 36,
                color: colors.darkBlue,
              }}>
              Company Name*
            </Text>

            <View style={{marginLeft: 29, marginRight: 29, marginTop: 6}}>
              <TextInput
                placeholder="Enter your company name"
                placeholderTextColor={colors.lightGrey}
                onChangeText={val => setCompanyName(val)}
                keyboardType="default"
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
                color: colors.darkBlue,
              }}>
              Company Size*
            </Text>

            <View
              style={{
                flex: 1,
                width: '84%',
                marginTop: 6,
                alignSelf: 'center',
                borderWidth: 1,
                borderColor: colors.lightGrey,
                borderRadius: 5,
                padding: 2,
              }}>
              <Dropdown
                icon="chevron-down"
                iconColor="#BFBEBE"
                placeholder="Chose your company size"
                placeholderTextColor={colors.lightGrey}
                data={data}
                onChangeText={item => {
                  setCompanySize(item);
                }}
                underlineColor="transparent"
                style={{
                  width: '100%',
                  height: 44,
                  backgroundColor: 'white',
                }}
                baseColor="white"
              />
            </View>

            <Text
              style={{
                fontWeight: '500',
                fontSize: 14,
                marginTop: 9,
                marginLeft: 36,
                color: colors.darkBlue,
              }}>
              Are you an agency*
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 8,
                marginLeft: 32,
                marginRight: 32,
              }}>
              <View style={{flexDirection: 'row'}}>
                <TouchableHighlight
                  underlayColor=""
                  onPress={() => {
                    setCheckAgencyYes(!checkAgencyYes), setCheckAgencyNo(false);
                  }}>
                  {checkAgencyYes ? (
                    <View
                      style={{
                        height: 18,
                        width: 18,
                        borderWidth: 1,
                        borderRadius: 18,
                        borderColor: colors.lightGrey,
                        justifyContent: 'center',
                        alignItems: 'center',
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
                    paddingLeft: 5,
                    color: colors.lightGrey,
                  }}>
                  Yes
                </Text>
              </View>

              <View style={{flexDirection: 'row', marginLeft: 24}}>
                <TouchableHighlight
                  underlayColor=""
                  onPress={() => {
                    setCheckAgencyYes(false), setCheckAgencyNo(!checkAgencyNo);
                  }}>
                  {checkAgencyNo ? (
                    <View
                      style={{
                        height: 18,
                        width: 18,
                        borderWidth: 1,
                        borderRadius: 18,
                        borderColor: colors.lightGrey,
                        justifyContent: 'center',
                        alignItems: 'center',
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
                    paddingLeft: 5,
                    color: colors.lightGrey,
                  }}>
                  No
                </Text>
              </View>
            </View>

            {checkAgencyYes ? (
              <>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 14,
                    marginTop: 9,
                    marginLeft: 36,
                    color: colors.darkBlue,
                  }}>
                  Service(s) you provide*
                </Text>

                <View
                  style={{
                    flex: 1,
                    width: '84%',
                    marginTop: 6,
                    alignSelf: 'center',
                    borderWidth: 1,
                    borderColor: colors.lightGrey,
                    borderRadius: 5,
                    padding: 2,
                  }}>
                  <Dropdown
                    icon="chevron-down"
                    iconColor="#BFBEBE"
                    placeholder="Company service"
                    placeholderTextColor={colors.lightGrey}
                    data={data2}
                    onChangeText={item => {
                      setServiceProvide(item);
                    }}
                    underlineColor="transparent"
                    style={{
                      width: '100%',
                      height: 44,
                      backgroundColor: 'white',
                    }}
                    baseColor="white"
                  />
                </View>
              </>
            ) : null}

            <TouchableHighlight
              underlayColor=""
              onPress={() => nextStep()}
              style={{
                height: 43,
                width: 318,
                backgroundColor: colors.green,
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
                  color: colors.white,
                }}>
                Next Step
              </Text>
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
});

export default InformationSecond;
