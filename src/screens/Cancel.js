import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import dir from '../assets/img/direction.png';

const windowWidth = Dimensions.get('window').width;

// packages import
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Cancel({navigation}) {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Support')}>
        <Text
          style={[
            styles.cl1,
            {
              color: '#0003c1',
              alignSelf: 'flex-end',
              marginRight: 20,
              marginVertical: 10,
            },
          ]}>
          Support
        </Text>
      </TouchableOpacity>
      <View style={styles.container2}>
        <View>
          <Text style={[styles.cl1, {color: '#0003c1'}]}>
            BOOKING ID : AARKA12345ABCD#123
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
            SAGARIKA MOHANTY
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
            Sagarika@gmail.com
          </Text>
          <Text
            style={{
              color: '#717171',
              fontFamily: 'ReadexPro-Regular',
              fontSize: 12,
            }}>
            +91 9876543210
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
              Aarka Sports Center, Near Bigbazar,Patia, INFO City
              Road,Bhubaneswar, Pin - 745321
            </Text>
          </View>
          <TouchableOpacity
            style={{
              padding: 5,

              alignItems: 'center',
            }}>
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
          <Text
            style={{
              width: windowWidth * 0.57,
              color: '#717171',
              fontFamily: 'ReadexPro-Regular',
              fontSize: 12,
            }}>
            Couch Name : Shubham Mohapatra
          </Text>
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
            Ground fee
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: '#717171',
              fontFamily: 'ReadexPro-Medium',
            }}>
            ₹ 540.00{' '}
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
            Net practice
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: '#717171',
              fontFamily: 'ReadexPro-Medium',
            }}>
            ₹ 540.00{' '}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
            justifyContent: 'space-between',
            borderBottomColor: '#DFDDDD',
            borderBottomWidth: 1,
            paddingBottom: 10,
          }}>
          <Text
            style={{
              fontSize: 13,
              color: '#717171',
              fontFamily: 'ReadexPro-Medium',
            }}>
            1 x Player
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: '#717171',
              fontFamily: 'ReadexPro-Medium',
            }}>
            ₹ 540.00{' '}
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
            Ground fee
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: '#717171',
              fontFamily: 'ReadexPro-Medium',
            }}>
            ₹ 540.00{' '}
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
            Net practice
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: '#717171',
              fontFamily: 'ReadexPro-Medium',
            }}>
            ₹ 540.00{' '}
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
            1 x Player
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: '#717171',
              fontFamily: 'ReadexPro-Medium',
            }}>
            ₹ 540.00{' '}
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
            GST
          </Text>
          <Text
            style={{
              fontFamily: 'ReadexPro-Medium',
              fontSize: 13,
              color: '#717171',
            }}>
            ₹ 10.00{' '}
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
            ₹ 550.00
          </Text>
        </View>
      </View>
      <View style={{padding: 10}}>
        <Text
          style={{
            fontFamily: 'ReadexPro-Bold',
            marginLeft: 10,
            color: '#222',
            marginBottom: 10,
          }}>
          Are you want to cancel this booking?
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Modal')}
          style={{
            backgroundColor: '#fac516',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            height: 43,
          }}>
          <Text
            style={{color: '#fff', fontFamily: 'ReadexPro-Bold', fontSize: 14}}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
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
