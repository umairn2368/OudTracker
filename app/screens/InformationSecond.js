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
            source={require('../Assets/images/secondInformationPic.png')}
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
            color: '#25414C',
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
          }}>
          Company Name*
        </Text>

        <View style={{marginLeft: 29, marginRight: 29, marginTop: 6}}>
          <TextInput
            placeholder="Enter your company name"
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
            color: '#25414C',
          }}>
          Full Name
        </Text>

        <View style={{marginLeft: 29, marginRight: 29, marginTop: 6}}>
          <TextInput
            placeholder="John Doe"
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

        <Text
          style={{
            fontWeight: '500',
            fontSize: 14,
            marginTop: 9,
            marginLeft: 36,
            color: '#25414C',
          }}>
          Company Size*
        </Text>

        <View style={{marginLeft: 29, marginRight: 29, marginTop: 6}}>
          <TextInput
            placeholder="Chose your company name"
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

        <Text
          style={{
            fontWeight: '500',
            fontSize: 14,
            marginTop: 9,
            marginLeft: 36,
            color: '#25414C',
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
                    borderColor: '#BFBEBE',
                    justifyContent: 'center',
                    alignItems: 'center',
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
                paddingLeft: 5,
                color: '#BFBEBE',
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
                    borderColor: '#BFBEBE',
                    justifyContent: 'center',
                    alignItems: 'center',
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
                paddingLeft: 5,
                color: '#BFBEBE',
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
                color: '#25414C',
              }}>
              Service(s) you provide*
            </Text>

            <View style={{marginLeft: 29, marginRight: 29, marginTop: 6}}>
              <TextInput
                placeholder="Company service"
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
          </>
        ) : null}

        <TouchableHighlight
          underlayColor=""
          onPress={() => navigation.navigate('InformationThird')}
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
            Next Step
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default InformationSecond;
