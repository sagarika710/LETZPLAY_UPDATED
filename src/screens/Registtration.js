import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert,
  Button,
  ActivityIndicator,
} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
// import fetch from 'node-fetch';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {api} from '../styles/Api';

import {apicaller} from './api';
import {color} from 'react-native-reanimated';
import {useSelector, useDispatch} from 'react-redux';
import {
  setName,
  setEmail,
  setDOB,
  setPhone,
  getToken,
  setId,
  setreferralpoint,
} from '../../Redux/slices/userSlice';
export default function Ragistration(props) {
  const [name, setname] = React.useState('');
  const [email, setemail] = React.useState('');
  const [reff, setReff] = React.useState('');
  const [DOBs, setDOBs] = React.useState();
  const [phone, setphone] = React.useState('');
  const navigation = useNavigation();
  const forwardSlash = /\/.*\//;
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [doberr, setDoberr] = useState(false);
  const [errn, setErrn] = useState(false);
  const [emailerror, setEmailerror] = useState();
  const Token = useSelector(getToken);
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  // alert(users)
  const dispatch = useDispatch();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  console.log(date.getDate(), date.getMonth(), date.getFullYear());

  function Register() {
    console.log(email, reg.test(email));

    var data = JSON.stringify({
      name: name,
      dob: show,
      email: email,
    });
    var datar = JSON.stringify({
      name: name,
      dob: show,
      email: email,
      user_refferal_code: reff,
    });
    apicaller('signup', reff ? datar : data, 'put', `Bearer ${Token}`)
      .then(res => {
        console.log('otp', res.data);
        if (res.data.user_data) {
          console.log('user data', res.data.user_data.name);
          dispatch(setName(res.data.user_data.name));
          dispatch(setId(res.data.user_data._id));
          dispatch(setEmail(res.data.user_data.email));
          dispatch(setPhone(res.data.user_data.phone_number));
          dispatch(setDOB(res.data.user_data.dob));
          dispatch(setreferralpoint(res.data.user_data.refferal_code));
          console.log('res.data.user_data.plan_id', res.data.user_data.plan_id);
          if (res.data.user_data.plan_id != null) {
          }
          navigation.navigate('Location');
        }
      })
      .catch(function (error) {
        console.log(error.params);
      });
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/img/spo.png')} />

      <DatePicker
        mode="date"
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);

          setShow(
            date.getFullYear().toString() +
              '/' +
              (date.getMonth() + 1).toString() +
              '/' +
              date.getDate().toString(),
          );
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <View style={styles.box1}>
        <Text style={styles.had}> Welcome To</Text>
        <Text style={styles.had}> Letzplay</Text>
        <Text style={styles.txt}> Please Fill all the details. </Text>
        <View style={styles.textAreaContainer}>
          <Icons name="user" size={20} color="#9C9C9C" />
          <TextInput
            onChangeText={setname}
            value={name}
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Full Name"
            placeholderTextColor="#9C9C9C"
            numberOfLines={1}
            ellipsizeMode="tail"
          />
        </View>
        {errn && (
          <Text style={{color: 'red', fontWeight: 'bold', marginTop: 2}}>
            **Required
          </Text>
        )}
        <View style={styles.textAreaContainer}>
          <Icons name="mail" size={20} color="#9C9C9C" />
          <TextInput
            onChangeText={setemail}
            //  onChangeText={validate}
            value={email}
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Email Id"
            placeholderTextColor="#9C9C9C"
          />
        </View>
        {emailerror ? (
          <Text style={{color: 'red'}}>Invalid email id</Text>
        ) : null}
        <TouchableOpacity
          style={styles.textAreaContainer}
          onPress={() => {
            setOpen(true);
          }}>
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
        {doberr && (
          <Text style={{color: 'red'}}>Age should be gratethen 5 year</Text>
        )}
        <View style={styles.textAreaContainer}>
          <Icons name="mail" size={20} color="#9C9C9C" />
          <TextInput
            onChangeText={setReff}
            value={reff}
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Refferal code (optional)"
            placeholderTextColor="#9C9C9C"
          />
        </View>
        <TouchableOpacity
          //     disabled={!errn&& !doberr&&!emailerror}
          style={styles.btn}
          onPress={() => {
            if (name.length > 2) {
              setErrn(false);
              if (reg.test(email)) {
                setEmailerror(false);
                if (date.getFullYear() < 2018 && date != '0') {
                  setDoberr(false);
                  Register();
                } else {
                  setDoberr(true);
                }
              } else {
                setEmailerror(true);
              }
            } else {
              setErrn(true);
            }
          }}>
          <Text style={styles.btntext}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAreaContainer: {
    flexDirection: 'row',
    borderColor: '#9C9C9C',
    borderBottomWidth: 0.5,
    alignItems: 'center',
    marginVertical: 5,
  },
  textArea: {
    marginHorizontal: 5,
    width: 200,
    fontSize: 12,
    fontFamily: 'ReadexPro-Regular',
  },
  btn: {
    height: 43,
    backgroundColor: '#FAC516',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    fontFamily: 'ReadexPro-Bold',
  },
  btntext: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'ReadexPro-Bold',
  },
  box1: {
    width: '88%',
    marginVertical: 30,
  },
  logo: {
    width: Dimensions.get('window').width - 40,
    height: 300,
  },
  had: {
    color: '#FAC516',
    fontSize: 24,
    fontFamily: 'ReadexPro-Bold',
    letterSpacing: 3,
    marginLeft: -5,
  },
  txt: {
    fontSize: 10,
    color: '#717171',
    marginBottom: 20,
    fontFamily: 'ReadexPro-Regular',
  },
});
