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

const InformationFirst = ({navigation}) => {
  const [value, setValue] = useState(null);

  const [value2, setValue2] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');

  let data = [
    {
      value: 'Devloper',
    },
    {
      value: 'Graphic Designer',
    },
    {
      value: 'Backend Developer',
    },
  ];

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
                marginTop: 26,
                marginLeft: 36,
                color: colors.darkBlue,
              }}>
              Email
            </Text>

            <View style={{marginLeft: 29, marginRight: 29, marginTop: 6}}>
              <TextInput
                placeholder="Enter your email"
                placeholderTextColor={colors.lightGrey}
                onChangeText={val => setEmail(val)}
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
                onChangeText={val => setFullName(val)}
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
                width: '84%',
                marginTop: 6,
                alignSelf: 'center',
                borderWidth: 1,
                borderColor: colors.lightGrey,
                borderRadius: 5,
              }}>
              <Dropdown
                icon="chevron-down"
                iconColor="#BFBEBE"
                placeholder="Select a job position"
                placeholderTextColor={colors.lightGrey}
                baseColor={colors.white}
                data={data}
                //backgroundColor={ 'red'}
                containerStyle={
                  {
                    // borderBottomColor: colors.yellow,
                    // borderBottomWidth: 1,
                  }
                }
                style={{
                  width: '100%',
                  height: 44,
                  backgroundColor: 'white',
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
                  setValue(text);
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
              onPress={() => navigation.navigate('InformationSecond')}
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
