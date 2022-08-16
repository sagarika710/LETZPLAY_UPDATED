import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useState, useEffect} from 'react';
import {apicaller} from './api';
import {api} from '../styles/Api';
import {
  getDob,
  getEmail,
  getName,
  getUserPhone,
  setName,
  setEmail,
  setDOB,
  getId,
  setId,
  getToken,
  setPhone,
} from '../../Redux/slices/userSlice';
import DatePicker from 'react-native-date-picker';
import {useSelector, useDispatch} from 'react-redux';

export default function Profile_Edit({navigation}) {
  const dispatch = useDispatch();
  const dob = useSelector(getDob);
  const emails = useSelector(getEmail);
  const names = useSelector(getName);
  const phones = useSelector(getUserPhone);

  const forwardSlashRegex = /\/.*\//;
  const [name, setname] = React.useState(names);
  const [email, setemail] = React.useState(emails);
  const [DOB, setDOBs] = React.useState(dob);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const Token = useSelector(getToken);
  var show =
    date.getFullYear().toString() +
    '/' +
    date.getMonth().toString() +
    '/' +
    date.getDate().toString();

  function edit() {
    var data = JSON.stringify({
      name: name,
      dob: show,
      email: email,
    });
    apicaller('profile', data, 'put', `Bearer ${Token}`).then(res => {
      console.log('otp', res.data);
      if (res.data.user_data) {
        console.log('user data', res.data.user_data.name);
        dispatch(setName(res.data.user_data.name));
        dispatch(setId(res.data.user_data._id));
        dispatch(setEmail(res.data.user_data.email));
        dispatch(setPhone(res.data.user_data.phone_number));
        navigation.navigate('Tab');
      }
    });
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/img/Sports/Profile_bg.png')}
      />
      <DatePicker
        mode="date"
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <TouchableOpacity
        style={styles.closebtn}
        onPress={() => navigation.goBack()}>
        <Icon name="close" size={20} color="#fff" />
      </TouchableOpacity>
      <View style={styles.name_view}>
        <View
          style={{
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{height: 80, width: 80, position: 'absolute'}}
            source={require('../assets/img/Sports/Ellipse.png')}
          />
          <Text
            style={{
              fontSize: 40,
              fontFamily: 'ReadexPro-SemiBold',
              color: '#fff',
            }}>
            S
          </Text>
        </View>
      </View>

      <View style={styles.box1}>
        <View style={styles.textAreaContainer}>
          <Icons name="user" size={20} color="#9C9C9C" />
          <TextInput
            onChangeText={setname}
            value={name}
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Full Name"
            placeholderTextColor="#9C9C9C"
          />
        </View>

        <View style={styles.textAreaContainer}>
          <Icons name="mail" size={20} color="#9C9C9C" />
          <TextInput
            onChangeText={setemail}
            value={email}
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Email Id"
            placeholderTextColor="#9C9C9C"
          />
        </View>

        <TouchableOpacity
          style={styles.textAreaContainer}
          onPress={() => setOpen(true)}>
          <Icons name="calendar" size={20} color="#9C9C9C" />

          <TextInput
            editable={false}
            selectTextOnFocus={false}
            style={[styles.textArea, {color: 'black'}]}
            maxLength={10}
            value={show}
            placeholder="Enter DOB (DD/MM/YYYY)"
            placeholderTextColor="#9C9C9C"
            autoCapitalize="none"
            returnKeyType="next"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            edit();
          }}>
          <Text style={styles.btntext}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  logo: {
    width: '100%',
  },
  closebtn: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  name_view: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -150,
  },
  textArea: {
    marginHorizontal: 5,
    width: 200,
    fontSize: 12,
    fontFamily: 'ReadexPro-Regular',
  },
  textAreaContainer: {
    flexDirection: 'row',
    borderColor: '#9C9C9C',
    borderBottomWidth: 0.5,
    alignItems: 'center',
    marginVertical: 20,
  },
  box1: {
    marginHorizontal: 20,
    marginTop: 150,
  },
  btn: {
    height: 43,
    backgroundColor: '#FAC516',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    fontFamily: 'ReadexPro-Bold',
  },
  btntext: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'ReadexPro-Bold',
  },
});
