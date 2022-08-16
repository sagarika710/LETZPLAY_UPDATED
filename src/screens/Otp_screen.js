import {NavigationContainer} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {apicaller} from './api';
import {useSelector, useDispatch} from 'react-redux';
import {
  setName,
  setEmail,
  setDOB,
  setPhone,
  setToken,
  setId,
  getLoc,
  setreferralpoint,
  setPlanid,
  setPlanname,
  setExpdate,
} from '../../Redux/slices/userSlice';
function VerificationScreen({navigation, route}) {
  const id = route.params;
  const dispatch = useDispatch();
  const location = useSelector(getLoc);
  const [err, setErr] = useState();
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp, setOtp] = useState({a: '', b: '', c: '', d: ''});
  var x = otp.a + otp.b + otp.c + otp.d;
  console.log(id, x);
  console.log(location);
  function otpverification() {
    var data = JSON.stringify({
      _id: id,
      otp: x,
    });
    apicaller('otp', data, 'post', null)
      .then(res => {
        console.log('otp', res.data);
        dispatch(setToken(res.data.token));
        if (res.data.user) {
          console.log('user data', res.data.user.name);
          dispatch(setName(res.data.user.name));
          dispatch(setId(res.data.user._id));
          dispatch(setEmail(res.data.user.email));
          dispatch(setPhone(res.data.user.phone_number));
          dispatch(setDOB(res.data.user.dob));
          dispatch(setreferralpoint(res.data.user.refferal_code));
          if (res.data.user.plan_id != null) {
            console.log('enter');
            dispatch(setPlanid(res.data.user.plan_id._id));
            dispatch(setPlanname(res.data.user.plan_id.plan_name));
            dispatch(setExpdate(res.data.user.plan_duration_time));
          }
          console.log('res.data.user_data.plan_id', res.data.user.plan_id);
          if (location) {
            navigation.navigate('Tab');
          } else {
            navigation.navigate('Location');
          }
        } else {
          navigation.navigate('Ragistration');
        }
      })
      .catch(e => {
        console.log('login error', e.value);
        //alert('Invaid OTP Please Try again');
        setErr(true);
      });
  }
  function resend() {
    var data = JSON.stringify({
      _id: id,
    });
    apicaller('resend-otp', data, 'post', null)
      .then(res => {
        console.log('otp', res.data);
      })
      .catch(e => {
        console.log(e.value);
        alert('Somthing went to wrong');
      });
  }
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/img/lock.png')} />
      <Image style={styles.dot} source={require('../assets/img/dot.png')} />
      <Text style={styles.heading}>OTP Verification</Text>
      <View style={styles.inputs}>
        <View style={styles.row}>
          <TextInput
            style={styles.id_input}
            keyboardType="number-pad"
            maxLength={1}
            ref={firstInput}
            placeholderTextColor="#000"
            onChangeText={text => {
              setOtp({...otp, a: text});
              text && secondInput.current.focus();
            }}
          />

          <TextInput
            style={styles.id_input}
            keyboardType="number-pad"
            maxLength={1}
            ref={secondInput}
            placeholderTextColor="#000"
            onChangeText={text => {
              setOtp({...otp, b: text});
              text ? thirdInput.current.focus() : firstInput.current.focus();
            }}
          />

          <TextInput
            style={styles.id_input}
            keyboardType="number-pad"
            maxLength={1}
            ref={thirdInput}
            placeholderTextColor="#222222"
            onChangeText={text => {
              setOtp({...otp, c: text});
              text ? fourthInput.current.focus() : secondInput.current.focus();
            }}
          />

          <TextInput
            style={styles.id_input}
            keyboardType="number-pad"
            maxLength={1}
            ref={fourthInput}
            placeholderTextColor="#222222"
            onChangeText={text => {
              setOtp({...otp, d: text});
              text ? fourthInput.current.focus() : thirdInput.current.focus();
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',

            marginVertical: 20,
          }}>
          {err && (
            <Text style={styles.receive}>Invalid OTP Please Try again</Text>
          )}
          <TouchableOpacity
            style={[styles.resend, {position: 'absolute', right: 0}]}
            onPress={() => resend()}>
            <Text style={styles.resend}>Resend OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => otpverification()}
        disabled={x.length != '4'}
        style={x.length == '4' ? styles.otp_btn : styles.otp_btndisable}>
        <Text style={styles.send}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 80,
  },
  logo: {
    width: 90,
    height: 90,
  },
  box: {
    position: 'relative',
    bottom: '10%',
    alignItems: 'center',
    paddingHorizontal: '14%',
  },
  dot: {
    width: 205,
    height: 37,
    marginVertical: 10,
    marginBottom: 40,
  },
  heading: {
    fontSize: 36,
    color: '#FAC516',
    fontFamily: 'ReadexPro-Bold',
  },
  otpContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  otpBox: {
    borderWidth: 0.5,
  },
  otpText: {
    fontSize: 25,
    padding: 0,
    textAlign: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
    fontFamily: 'ReadexPro-Bold',
  },
  inputs: {
    width: '100%',
    paddingHorizontal: '8%',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  id_input: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'ReadexPro-Bold',
    borderRadius: 5,
    width: 60,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: '#D8D8D8',
  },

  otp_btn: {
    backgroundColor: '#FAC516',
    marginVertical: 20,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '90%',
    height: 43,
    color: 'white',
    fontFamily: 'ReadexPro-Bold',
  },
  otp_btndisable: {
    backgroundColor: '#E8DBB1',
    marginVertical: 20,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '90%',
    height: 43,
    color: 'white',
    fontFamily: 'ReadexPro-Bold',
  },
  send: {
    color: '#fff',
    fontFamily: 'ReadexPro-Bold',
    fontSize: 12,
  },
  resend: {
    color: '#1D6AFF',
    fontSize: 12,
    fontFamily: 'ReadexPro-Medium',
  },
  receive: {
    color: 'red',
    fontSize: 12,
    fontFamily: 'ReadexPro-Medium',
  },
});

export default VerificationScreen;
