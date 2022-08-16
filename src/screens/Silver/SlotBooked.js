import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Topbar from '../../components/Topbar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SlotBooked({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 10}}>
      <Topbar backButtonPreesed={() => navigation.goBack()} />
      <View
        style={{
          borderColor: '#E7E7E7',
          borderRadius: 10,
          borderWidth: 1,
          padding: 10,
          marginTop: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomColor: '#DFDDDD',
            borderBottomWidth: 1,
            paddingBottom: 10,
          }}>
          <Text style={{color: '#222222', fontWeight: '600', fontSize: 17}}>
            Your Slot Booked
          </Text>
          <TouchableOpacity>
            <Icon name="pencil-outline" size={24} color="gray" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomColor: '#DFDDDD',
            borderBottomWidth: 1,
            paddingBottom: 10,
            marginTop: 10,
          }}>
          <View>
            <Text style={{color: '#292A2E', fontWeight: '500', fontSize: 14}}>
              SAGARIKA MOHANTY
            </Text>
            <Text
              style={{
                color: '#717171',
                marginTop: 10,
                fontWeight: '500',
              }}>
              adi@gmail.com
            </Text>
            <Text style={{color: '#717171', fontWeight: '500'}}>
              1234567890
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#717171', fontWeight: '500'}}>Cricket</Text>
          </View>
        </View>
        <Text style={{color: '#717171', fontWeight: '500'}}>
          Slot Booked: 27th Jan 2021, Monday, 09.30AM-11.30AM
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              width: '70%',
              color: '#717171',
              fontWeight: '500',
              marginTop: 15,
            }}>
            Aarka Sports Center, Near Bigbazar,Patia, INFO City
            Road,Bhubaneswar, Pin - 745321
          </Text>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="directions" size={26} color="#FAC516" />
            <Text style={{color: '#FAC516', fontWeight: '500'}}>
              Get Direction
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          alignContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FAC516',
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 20,
          paddingRight: 20,
          borderRadius: 10,
          marginTop: 30,
        }}>
        <Text style={{color: 'white', fontWeight: '700', fontSize: 18}}>
          Ok! Got it
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
