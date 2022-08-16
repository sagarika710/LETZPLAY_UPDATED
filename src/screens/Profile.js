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
  Linking,
} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icono from 'react-native-vector-icons/Octicons';
import {useDispatch, useSelector} from 'react-redux';
import {
  getDob,
  getEmail,
  getexpdate,
  getName,
  getplanname,
  getUserPhone,
  logout,
} from '../../Redux/slices/userSlice';
import {useState, useEffect} from 'react';
import {apicaller} from './api';

export default function Profile({navigation}) {
  const dispatch = useDispatch();
  const emailRd = useSelector(getEmail);
  const nameRd = useSelector(getName);
  const phoneRd = useSelector(getUserPhone);
  const plan = useSelector(getplanname);
  const expdate = useSelector(getexpdate);
  var axios = require('axios');

  // useEffect(() => {

  //     apicaller(`user/getuserbymobileno/+917008170556`, null, 'get')
  //         .then((res) => {
  //             console.log(JSON.stringify(res.data.data[0]));
  //             setProfile(res.data.data[0])

  //         });

  // }, []);
  function log() {
    dispatch(logout());
    navigation.navigate('Auth');
  }
  function convert(str) {
    var date = new Date(str),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2);
    return [day, mnth, date.getFullYear()].join('-');
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/img/Sports/Profile_bg.png')}
      />
      <TouchableOpacity
        style={styles.closebtn}
        onPress={() => navigation.goBack()}>
        <Icon name="close" size={20} color="#fff" />
      </TouchableOpacity>
      <View style={styles.name_view}>
        <View
          style={{
            position: 'relative',
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
            width: 50,
          }}>
          <Image
            style={{height: 50, width: 50, position: 'absolute'}}
            source={require('../assets/img/Sports/Ellipse.png')}
          />
          <Text
            style={{
              fontSize: 25,
              fontFamily: 'ReadexPro-SemiBold',
              color: '#fff',
            }}>
            S
          </Text>
        </View>
        <View style={styles.Details_view}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.name}>{nameRd}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Profile_Edit')}>
              <Icono name="pencil" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
          <Text style={styles.txt}>{emailRd}</Text>
          <Text style={styles.txt}>{phoneRd}</Text>
        </View>
      </View>
      {plan ? (
        <TouchableOpacity disabled={true} style={styles.statusview}>
          <Text numberOfLines={1} adjustsFontSizeToFit style={styles.statustxt}>
            You have {plan}
          </Text>
          <Text style={styles.infotxt}>
            Your Membership Expair on {convert(expdate)}
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.statusview}
          onPress={() => navigation.navigate('Membership')}>
          <Text numberOfLines={1} adjustsFontSizeToFit style={styles.statustxt}>
            Active your Membership Now
          </Text>
          <Text style={styles.infotxt}>
            Get Unlimited access to all our center
          </Text>
        </TouchableOpacity>
      )}
      <View style={{marginHorizontal: 40, marginTop: 40}}>
        {plan && (
          <TouchableOpacity
            style={styles.mainview}
            onPress={() => navigation.navigate('Stadiumlistmember')}>
            <View style={styles.box}>
              <Image
                style={{height: 22, width: 22, marginRight: 15}}
                source={require('../assets/img/Sports/calendar_icon.png')}
              />
              <Text style={styles.profiletxt}>Book Slot</Text>
            </View>
            <View>
              <Icon name="keyboard-arrow-right" size={16} color={'#0003c1'} />
            </View>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.mainview}
          onPress={() => navigation.navigate('Bookinghistory')}>
          <View style={styles.box}>
            <Image
              style={{height: 22, width: 22, marginRight: 15}}
              source={require('../assets/img/Sports/booking_icon.png')}
            />
            <Text style={styles.profiletxt}>Booking History</Text>
          </View>
          <View>
            <Icon name="keyboard-arrow-right" size={16} color={'#0003c1'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mainview}
          onPress={() => navigation.navigate('Wishlist')}>
          <View style={styles.box}>
            <Image
              style={{height: 22, width: 22, marginRight: 15}}
              source={require('../assets/img/Sports/wishlist_icon.png')}
            />
            <Text style={styles.profiletxt}>Wishlist</Text>
          </View>
          <View>
            <Icon name="keyboard-arrow-right" size={16} color={'#0003c1'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Support')}
          style={styles.mainview}>
          <View style={styles.box}>
            <Image
              style={{height: 22, width: 22, marginRight: 15}}
              source={require('../assets/img/Sports/support_icon.png')}
            />
            <Text style={styles.profiletxt}>Support</Text>
          </View>
          <View>
            <Icon name="keyboard-arrow-right" size={16} color={'#0003c1'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mainview}
          onPress={() => navigation.navigate('Termcondition')}>
          <View style={styles.box}>
            <Image
              style={{height: 22, width: 22, marginRight: 15}}
              source={require('../assets/img/Sports/t&c_icon.png')}
            />
            <Text style={styles.profiletxt}>Terms of Use</Text>
          </View>
          <View>
            <Icon name="keyboard-arrow-right" size={16} color={'#0003c1'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mainview}
          onPress={() => navigation.navigate('Privacypolicy')}>
          <View style={styles.box}>
            <Image
              style={{height: 22, width: 22, marginRight: 15}}
              source={require('../assets/img/Sports/privacy_icon.png')}
            />
            <Text style={styles.profiletxt}>Privacy Policy</Text>
          </View>
          <View>
            <Icon name="keyboard-arrow-right" size={16} color={'#0003c1'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mainview}
          onPress={() => navigation.navigate('Faqs')}>
          <View style={styles.box}>
            <Image
              style={{height: 22, width: 22, marginRight: 15}}
              source={require('../assets/img/Sports/faq_icon.png')}
            />
            <Text style={styles.profiletxt}>FAQs</Text>
          </View>
          <View>
            <Icon name="keyboard-arrow-right" size={16} color={'#0003c1'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mainview}
          onPress={() => navigation.navigate('Refernearn')}>
          <View style={styles.box}>
            <Image
              style={{height: 22, width: 22, marginRight: 15}}
              source={require('../assets/img/Sports/faq_icon.png')}
            />
            <Text style={styles.profiletxt}>Refer & Earn</Text>
          </View>
          <View>
            <Icon name="keyboard-arrow-right" size={16} color={'#0003c1'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(
              'https://play.google.com/store/apps/details?id=com.reactnativeui',
            );
          }}
          style={styles.mainview}>
          <View style={styles.box}>
            <Image
              style={{height: 22, width: 22, marginRight: 15}}
              source={require('../assets/img/Sports/rate_icon.png')}
            />
            <Text style={styles.profiletxt}>Rate Us</Text>
          </View>
          <View>
            <Icon name="keyboard-arrow-right" size={16} color={'#0003c1'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => log()} style={styles.mainview}>
          <View style={styles.box}>
            <Image
              style={{height: 22, width: 22, marginRight: 15}}
              source={require('../assets/img/Sports/logout_icon.png')}
            />
            <Text style={styles.profiletxt}>Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{height: 80}}></View>
    </ScrollView>
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

    position: 'absolute',
    top: 70,
    left: 20,
  },
  Details_view: {
    marginLeft: 10,
    marginTop: 5,
  },
  name: {
    fontFamily: 'ReadexPro-Bold',
    letterSpacing: 1,
    color: 'white',
    fontSize: 16,
    marginRight: 10,
  },
  txt: {
    fontFamily: 'ReadexPro-Regular',
    letterSpacing: 1,
    color: 'white',
    fontSize: 10,
  },
  statusview: {
    height: 65,
    position: 'absolute',
    alignSelf: 'center',
    top: 190,
    borderRadius: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 8,
  },
  statustxt: {
    fontFamily: 'ReadexPro-Bold',
    letterSpacing: 1,
    color: '#0003c1',
    fontSize: 16,
  },
  infotxt: {
    fontFamily: 'ReadexPro-Medium',
    letterSpacing: 0.2,
    color: '#222222',
    fontSize: 12,
  },
  mainview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profiletxt: {
    fontFamily: 'ReadexPro-Bold',
    letterSpacing: 0.5,
    color: '#0003c1',
    fontSize: 14,
  },
});
