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
import {emailRegex} from '../constants/emailRegex';
import {heightPercentageToDP, widthPercentageToDP} from '../helper/Responsive';

const InformationFirst = ({navigation, route}) => {
  let routeData = route?.params;

  const [value, setValue] = useState(null);

  const [value2, setValue2] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const [fullName, setFullName] = useState('');
  const [position, setPosition] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  let data = [
    {
      label: 'Accounting/Audit/Tax',
      value: 'Accounting/Audit/Tax',
    },
    {
      label: 'Administration & Office Support',
      value: 'Administration & Office Support',
    },
    {
      label: 'Banking/Finance/Insurance',
      value: 'Banking/Finance/Insurance',
    },
    {
      label: 'Building Design/Architecture',
      value: 'Building Design/Architecture',
    },
    {
      label: 'Construction',
      value: 'Construction',
    },
    {
      label: 'Consulting/Business Strategy & Planning',
      value: 'Consulting/Business Strategy & Planning',
    },
    {
      label: 'Creatives(Arts, Design, Fashion)',
      value: 'Creatives(Arts, Design, Fashion)',
    },
    {
      label: 'Vocational Trade and Services',
      value: 'Vocational Trade and Services',
    },
    {
      label: 'Customer Service',
      value: 'Customer Service',
    },
    {
      label: 'Education/Teaching/Training',
      value: 'Education/Teaching/Training',
    },
    {
      label: 'Engineering',
      value: 'Engineering',
    },
    {
      label: 'Executive/Top Management',
      value: 'Executive/Top Management',
    },
    {
      label: 'Healthcare/Pharmaceutical',
      value: 'Healthcare/Pharmaceutical',
    },
    {
      label: 'Hospitality/Leisure/Travels',
      value: 'Hospitality/Leisure/Travels',
    },
    {
      label: 'Human Resources',
      value: 'Human Resources',
    },
    {
      label: 'Information Technology',
      value: 'Information Technology',
    },
    {
      label: 'Legal',
      value: 'Legal',
    },
    {
      label: 'Logistics/Transportation',
      value: 'Logistics/Transportation',
    },
    {
      label: 'Manufacturing/Production',
      value: 'Manufacturing/Production',
    },
    {
      label: 'Marketing/Advertising/Communications',
      value: 'Marketing/Advertising/Communications',
    },
    {
      label: 'NGO/Community Services & Dev',
      value: 'NGO/Community Services & Dev',
    },
    {
      label: 'Oil & Gas/Mining/Energy',
      value: 'Oil & Gas/Mining/Energy',
    },
    {
      label: 'Project/Programme Management',
      value: 'Project/Programme Management',
    },

    {
      label: 'Real Estate/Property',
      value: 'Real Estate/Property',
    },
    {
      label: 'Research',
      value: 'Research',
    },
    {
      label: 'Sales/Business Development',
      value: 'Sales/Business Development',
    },

    {
      label: 'Supply Chain/Procurement',
      value: 'Supply Chain/Procurement',
    },

    {
      label: 'Telecommunications',
      value: 'Telecommunications',
    },
  ];

  const nextStep = async () => {
    if (fullName == '') {
      alert('Please enter name');
    } else if (position == '') {
      alert('Please select position');
    } else if (phoneNumber == '') {
      alert('Please enter cell number');
    } else {
      navigation.navigate('InformationSecond', {
        fullName: fullName,
        position: position,
        phoneNumber: formattedValue,
        email: routeData?.email,
        password: routeData?.password,
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
              flex: 0,
              alignItems: 'center',
              justifyContent: 'flex-end',
              marginTop: 20,
            }}>
            <Image source={require('../assets/images/logo.png')} />
            <View
              style={{
                alignItems: 'center',
                marginTop: 37,
              }}>
              <Image
                source={require('../assets/images/firstInformationPic.png')}
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
              Hello, Nice to meet you!
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
                {`Lets get know to each other so we can set up your account`}
              </Text>
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
                onChangeText={val => setFullName(val)}
                keyboardType="default"
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
              Job Position*
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
                placeholder="Select a job position"
                placeholderTextColor={colors.lightGrey}
                baseColor={colors.white}
                data={data}
                onChangeText={item => {
                  setPosition(item);
                }}
                underlineColor="transparent"
                containerStyle={{}}
                style={{
                  width: '100%',
                  height: 43,
                  backgroundColor: 'white',
                  fontSize: 13,
                  fontWeight: '500',
                }}
              />
            </View>

            <Text
              style={{
                fontWeight: '500',
                fontSize: 14,
                marginTop: 6,
                marginLeft: 36,
                color: colors.darkBlue,
              }}>
              Phone No*
            </Text>

            <View
              style={{
                alignItems: 'center',
                marginTop: 6,
              }}>
              <PhoneInput
                defaultValue={value}
                defaultCode="PA"
                //layout="first"
                onChangeText={text => {
                  setPhoneNumber(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                }}
                containerStyle={{
                  width: '84%',
                  height: 50,
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: colors.lightGrey,
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                }}
                textContainerStyle={{
                  height: 44,
                }}
                codeTextStyle={{height: 24, alignSelf: 'center'}}
                textInputStyle={{width: '100%', height: 44}}
                withDarkTheme
                withShadow
                // autoFocus
              />
            </View>

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

export default InformationFirst;
