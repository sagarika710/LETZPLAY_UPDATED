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
  getUserPhone,
  logout,
} from '../../Redux/slices/userSlice';
// packages import
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function BookingManage({navigation}) {
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const emailRd = useSelector(getEmail);
  const nameRd = useSelector(getName);
  const phoneRd = useSelector(getUserPhone);
  const sport = useSelector(getSname);
  const id = useSelector(getBookingid);
  useEffect(() => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: `http://15.207.26.74:8000/api/getbookingdetails/${id}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setData(response.data);
        console.log('details', data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const subscription = BackHandler.addEventListener('hardwareBackPress', () => {
    navigation.navigate('Tab');
    return true;
  });

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: 'white'}}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      {data ? (
        <>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              marginBottom: 20,
            }}>
            <Topbar backButtonPreesed={() => navigation.goBack()} />

            <TouchableOpacity onPress={() => navigation.navigate('Support')}>
              <Text
                style={[styles.cl1, {color: '#0003c1', marginVertical: 10}]}>
                Support
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container2}>
            <View>
              <Text style={[styles.cl1, {color: '#0003c1'}]}>
                BOOKING ID : {data.booking_id}
              </Text>
            </View>
          </View>

          <View style={styles.container2}>
            <View
              style={{
                marginTop: 13,
                paddingBottom: 10,
                borderBottomWidth: 1,
                borderBottomColor: '#DFDDDD',
              }}>
              <Text style={styles.cl1}>Booking Summary</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
              <Text
                style={{
                  flex: 1,
                  color: '#292A2E',
                  fontFamily: 'ReadexPro-Bold',
                  letterSpacing: 0.5,
                  fontSize: 12,
                }}>
                {nameRd}
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'ReadexPro-Medium',
                    color: '#717171',
                  }}>
                  Cricket
                </Text>
              </View>
            </View>
            <View
              style={{
                marginTop: 13,
                paddingBottom: 10,
                borderBottomWidth: 1,
                borderBottomColor: '#DFDDDD',
              }}>
              <Text
                style={{
                  color: '#717171',
                  fontFamily: 'ReadexPro-Regular',
                  fontSize: 12,
                }}>
                {emailRd}
              </Text>
              <Text
                style={{
                  color: '#717171',
                  fontFamily: 'ReadexPro-Regular',
                  fontSize: 12,
                }}>
                {phoneRd}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    marginTop: 20,
                    color: '#717171',
                    fontFamily: 'ReadexPro-Regular',
                    fontSize: 12,
                    width: windowWidth * 0.65,
                  }}>
                  {/* {data.sports_center_id.ground_name},{' '}
                  {data.sports_center_id.address} */}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  padding: 5,

                  alignItems: 'center',
                }}
                onPress={() =>
                  Linking.openURL(
                    `geo:0,0?q=${data.sports_center_id.latitude},${data.sports_center_id.longitude}`,
                  )
                }>
                <Icon name="directions" size={15} color={'#fac516'} />
                <Text
                  style={{
                    color: '#fac516',
                    fontSize: 8,
                    fontFamily: 'ReadexPro-Bold',
                  }}>
                  Get Direction
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 13,
                paddingBottom: 10,
                width: windowWidth * 0.8,
              }}>
              {/* <Text
                style={{
                  width: windowWidth * 0.57,
                  color: '#717171',
                  fontFamily: 'ReadexPro-Regular',
                  fontSize: 12,
                }}>
                Couch Name : Shubham Mohapatra
              </Text> */}
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 13,
                borderBottomColor: '#DFDDDD',
                borderBottomWidth: 1,
                paddingBottom: 10,
                justifyContent: 'space-between',
                width: windowWidth * 0.9,
              }}>
              <Text
                style={{
                  color: '#717171',
                  fontFamily: 'ReadexPro-Regular',
                  fontSize: 12,
                }}>
                09.30 AM - 11.30 AM
              </Text>
              <Text
                style={{
                  color: '#717171',
                  fontFamily: 'ReadexPro-Regular',
                  fontSize: 12,
                }}>
                Date: 27th Jan 2021
              </Text>
            </View>

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

            {/* {data.services.map(e => {
              console.log(e);
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: 13,
                      color: '#717171',
                      fontFamily: 'ReadexPro-Medium',
                    }}>
                    {e.ground_name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: '#717171',
                      fontFamily: 'ReadexPro-Medium',
                    }}>
                    ₹{e.price_per_hr}
                  </Text>
                </View>
              );
            })} */}

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
                ₹{data.price}
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
                ₹{data.gst}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                paddingBottom: 10,
                borderBottomColor: '#DFDDDD',
              }}>
              <Text
                style={{
                  fontFamily: 'ReadexPro-Medium',
                  fontSize: 13,
                  color: '#717171',
                }}>
                Other Charges
              </Text>
              <Text
                style={{
                  fontFamily: 'ReadexPro-Medium',
                  fontSize: 13,
                  color: '#717171',
                }}>
                ₹ {data.other_charges}
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
                ₹ {data.final_amount}
              </Text>
            </View>
          </View>
          <View style={{padding: 10}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Tab')}
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
                Thank you
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
