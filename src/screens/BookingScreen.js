import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Linking,
  BackHandler,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import dir from '../assets/img/direction.png';
import Topbar from '../components/Topbar';
const windowWidth = Dimensions.get('window').width;
import {useDispatch, useSelector} from 'react-redux';
import {
  getBookingid,
  getDob,
  getEmail,
  getName,
  getSname,
  getToken,
  getUserPhone,
  logout,
} from '../../Redux/slices/userSlice';
// packages import
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RazorpayCheckout from 'react-native-razorpay';
import {apicaller} from './api';
export default function BookingManage({navigation, route}) {
  const pays = route.params;
  console.log('routs', pays);
  const dispatch = useDispatch();
  const emailRd = useSelector(getEmail);
  const nameRd = useSelector(getName);
  const phoneRd = useSelector(getUserPhone);
  const sport = useSelector(getSname);
  const id = useSelector(getBookingid);
  const Token = useSelector(getToken);
  function getpay() {
    apicaller(`get-order-id/${pays._id}`, null, 'get', `Bearer ${Token}`)
      .then(res => {
        console.log('link', res.data);
        razor(res.data.order_id);
      })
      .catch(e => {
        console.log(e.value);
      });
  }
  function razor(opid) {
    var options = {
      description: '',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_AAbStcgvQzjGfV',

      order_id: opid, //Replace this with an order_id created using Orders API.
      prefill: {
        email: 'sagarika@gmail.com',
        contact: '7608053853',
        name: 'sagarika Kumar',
      },
      theme: {color: '#53a20e'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        // alert(`Success: ${data.razorpay_payment_id}`);
        navigation.navigate('BookingSuccess');
      })
      .catch(error => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  }
  const subscription = BackHandler.addEventListener('hardwareBackPress', () => {
    navigation.navigate('Tab');
    return true;
  });

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: 'white'}}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      {pays ? (
        <>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              marginBottom: 20,
            }}></View>
          <View style={styles.container2}>
            <View>
              <Text style={[styles.cl1, {color: '#0003c1'}]}>
                BOOKING ID :{pays.booking_id}
              </Text>
            </View>
          </View>

          <View style={styles.container2}>
            <Text
              style={{
                color: '#222222',
                fontFamily: 'ReadexPro-Bold',
                fontSize: 14,
                marginTop: 10,
                letterSpacing: 1,
              }}>
              Payment Summary
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 5,
                justifyContent: 'space-between',
                borderBottomColor: '#DFDDDD',
                borderBottomWidth: 1,
                paddingBottom: 10,
              }}></View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 5,
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 13,
                  color: '#717171',
                  fontFamily: 'ReadexPro-Medium',
                }}>
                Total
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: '#717171',
                  fontFamily: 'ReadexPro-Medium',
                }}>
                ₹{pays.price}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 5,
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 13,
                  color: '#717171',
                  fontFamily: 'ReadexPro-Medium',
                }}>
                Gst
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: '#717171',
                  fontFamily: 'ReadexPro-Medium',
                }}>
                ₹{pays.gst}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                justifyContent: 'space-between',
              }}>
              <Text style={{fontFamily: 'ReadexPro-Bold', fontSize: 13}}>
                Grand Total
              </Text>
              <Text style={{fontFamily: 'ReadexPro-Bold', fontSize: 13}}>
                ₹ {pays.final_amount}
              </Text>
            </View>
          </View>
          <View style={{padding: 10}}>
            <TouchableOpacity
              onPress={() => getpay()}
              style={{
                backgroundColor: '#fac516',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                height: 43,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'ReadexPro-Bold',
                  fontSize: 14,
                }}>
                Procced to pay
              </Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <Text>no data</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container1: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E7E7E7',
    flexDirection: 'row',
  },
  bookingid: {color: '#0003C1', fontWeight: '500', fontSize: 15},
  container2: {
    padding: 10,
    margin: 10,
    marginTop: 0,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E7E7E7',
  },

  cl1: {
    color: '#222222',
    fontSize: 14,
    fontFamily: 'ReadexPro-Bold',
    letterSpacing: 1,
  },
  dir: {height: 30, width: 30, marginTop: 20},
});
