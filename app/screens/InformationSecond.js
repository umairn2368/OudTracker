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

import DropDownPicker from 'react-native-dropdown-picker';
import PhoneInput from 'react-native-phone-number-input';
import colors from '../Constants/Colors';
import {heightPercentageToDP, widthPercentageToDP} from '../Helper/Responsive';

const InformationSecond = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  const [value2, setValue2] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const [checkAgencyYes, setCheckAgencyYes] = useState(false);

  const [checkAgencyNo, setCheckAgencyNo] = useState(false);

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
              <Image source={require('../Assets/images/logo.png')} />
            </View>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
              }}>
              <Image
                source={require('../Assets/images/secondInformationPic.png')}
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
              Full Name
            </Text>

            <View style={{marginLeft: 29, marginRight: 29, marginTop: 6}}>
              <TextInput
                placeholder="John Doe"
                placeholderTextColor={colors.lightGrey}
                style={{
                  height: 44,
                  backgroundColor: colors.white,
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: colors.lightGrey,
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

            <View style={{marginLeft: 29, marginRight: 29, marginTop: 6}}>
              <TextInput
                placeholder="Chose your company name"
                placeholderTextColor={colors.lightGrey}
                style={{
                  height: 44,
                  backgroundColor: colors.white,
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: colors.lightGrey,
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

                <View style={{marginLeft: 29, marginRight: 29, marginTop: 6}}>
                  <TextInput
                    placeholder="Company service"
                    placeholderTextColor={colors.lightGrey}
                    style={{
                      height: 44,
                      backgroundColor: colors.white,
                      borderWidth: 1,
                      borderRadius: 5,
                      borderColor: colors.lightGrey,
                      color: colors.black,
                      paddingLeft: 10,
                      paddingRight: 10,
                    }}
                  />
                </View>
              </>
            ) : null}

            <TouchableHighlight
              underlayColor=""
              onPress={() => navigation.navigate('InformationThird')}
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
