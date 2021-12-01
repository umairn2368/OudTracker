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
const {width, height} = Dimensions.get('window');

import DropDownPicker from 'react-native-dropdown-picker';

import PhoneInput from 'react-native-phone-number-input';
import colors from '../Constants/Colors';

import {heightPercentageToDP, widthPercentageToDP} from '../Helper/Responsive';

const InformationFirst = ({navigation}) => {
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

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
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
        <Image source={require('../Assets/images/logo.png')} />
        <View
          style={{
            alignItems: 'center',
            marginTop: 37,
          }}>
          <Image
            source={require('../Assets/images/firstInformationPic.png')}
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
        {/* 
        <Text
          style={{
            fontWeight: '500',
            fontSize: 14,
            marginTop: 26,
            marginLeft: 36,
          }}>
          Job Position*
        </Text> */}

        {/* <View>
          <DropDownPicker
            zIndex={1000}
            zIndexInverse={1000}
            showTickIcon={false}
            dropDownDirection={'BOTTOM'}
            open={open}
            value={value2}
            items={items}
            setOpen={setOpen}
            setValue={setValue2}
            setItems={setItems}
            style={{
              width: widthPercentageToDP(90),
              borderWidth: 0,
              borderBottomWidth: 1,
              borderBottomColor: '#ABB1BB',
            }}
          />
        </View> */}

        <Text
          style={{
            fontWeight: '500',
            fontSize: 14,
            marginTop: 26,
            marginLeft: 36,
            color: colors.darkBlue
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
