import React, {useEffect, useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getEmail, getToken, getLoc} from '../../Redux/slices/userSlice';
import Icons from 'react-native-vector-icons/Octicons';
import {apicaller} from './api';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export default function Auth({navigation}) {
  const [type, setType] = useState('0');
  const Token = useSelector(getToken);
  const email = useSelector(getEmail);
  const [err, setErr] = useState();
  const location = useSelector(getLoc);
  useEffect(() => {
    console.log(Token);
    if (Token && email) {
      if (location) {
        navigation.navigate('Tab');
      } else {
        navigation.navigate('Location');
      }
    }
  }, [Token]);

  function phonenumber() {
    if (type.length == 10) {
      var data = JSON.stringify({
        phone_number: type,
      });

      apicaller('login', data, 'post', null)
        .then(res => {
          setErr(false);
          if (res.data.user) {
            navigation.navigate('VerificationScreen', res.data.user._id);
          }
          if (res.data._id) {
            navigation.navigate('VerificationScreen', res.data._id);
          }
        })
        .catch(e => {
          console.log(e.value);
          setErr(true);
        });
    } else {
      setErr(true);
    }
  }

  // By Adil

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '241083630563-1644jk8ftjfvkdd2b258g0susbnmfs9p.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);

  const signInWithGoogle = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.backimg} source={require('../assets/img/bg.png')} />
      <Image style={styles.logo} source={require('../assets/img/logo.png')} />

      <View style={styles.box1}>
        <Text style={styles.had}>Login</Text>
        <View style={styles.textAreaContainer}>
          <Icons name="device-mobile" size={20} color="#fff" />
          <TextInput
            onChangeText={setType}
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Enter Mobile Number"
            placeholderTextColor="#fff"
            multiline={true}
            keyboardType="numeric"
            maxLength={10}
          />
        </View>
        {err && (
          <Text style={{color: 'red', fontWeight: 'bold', marginTop: 5}}>
            **Invalid Phone Number
          </Text>
        )}

        <TouchableOpacity
          disabled={type.length != '10'}
          style={type.length == '10' ? styles.btn : styles.btndisable}
          onPress={() => phonenumber()}>
          <Text style={styles.btntext}>Get OTP</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.txt}>OR</Text>
      <Text style={styles.txt}>Login with Social Accounts</Text>

      <View style={styles.box2}>
        <View style={styles.iconback}>
          <TouchableOpacity
            onPress={() =>
              signInWithGoogle()
                .then(res => {
                  console.log(res);
                  setShowAgreement(true);
                })
                .catch(err => console.log(err))
            }>
            <Image
              style={styles.sicon}
              source={require('../assets/img/google.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.iconback}>
          <TouchableOpacity>
            <Image
              style={styles.sicon}
              source={require('../assets/img/Facebook.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.iconback}>
          <Image
            style={styles.sicon}
            source={require('../assets/img/apple.png')}
          />
        </View>
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
    fontFamily: 'ReadexPro-Regular',
  },
  backimg: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  textAreaContainer: {
    flexDirection: 'row',
    borderColor: 'white',
    borderBottomWidth: 0.8,
    alignItems: 'center',
  },
  textArea: {
    marginHorizontal: 5,
    fontSize: 14,
    width: 200,
    color: 'white',
    fontFamily: 'ReadexPro-Regular',
  },
  btn: {
    height: 43,
    backgroundColor: '#FAC516',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  btndisable: {
    height: 43,
    backgroundColor: '#E8DBB1',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
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
    height: 118,
  },
  had: {
    marginBottom: 50,
    color: 'white',
    fontSize: 36,
    fontFamily: 'ReadexPro-Bold',
  },
  txt: {
    color: 'white',
    fontSize: 12,
    lineHeight: 30,
    fontFamily: 'ReadexPro-Medium',
  },
  box2: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  sicon: {
    height: 32,
    width: 32,
  },
  iconback: {
    marginHorizontal: 10,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 100,
  },
  containeri: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 80,
  },
  logoi: {
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
    paddingHorizontal: '4%',
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
