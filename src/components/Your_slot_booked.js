import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Iconm from 'react-native-vector-icons/MaterialCommunityIcons';

const Your_slot_booked = () => {
  return (
    <View style={styles.mainview}>
      <View style={{margin: 18}}>
        <Text style={styles.heading}>Your Slot Booked</Text>
        <View style={styles.couch_view}>
          <View style={{width: '70%'}}>
            <Text style={{fontSize: 14, color: '#717171', fontWeight: 'bold'}}>
              Sagarika Mohanty
            </Text>
            <Text style={{fontSize: 14, color: '#717171'}}>
              sagarika@gmail.com
            </Text>
            <Text style={{fontSize: 14, color: '#717171'}}>7894562371</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={styles.cricket_icon}
              source={require('../assets/img/Cricket_icon.png')}
            />
            <Text style={{fontSize: 14, color: '#717171', fontWeight: 'bold'}}>
              Cricket
            </Text>
          </View>
        </View>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.location_details}>
              <Text style={{fontSize: 13, color: '#717171'}}>
                Aka Sports Center,
              </Text>
              <Text style={{fontSize: 13, color: '#717171'}}>
                Near Bigbazar,Patia, INFO City Road,Bhubaneswar,
              </Text>
              <Text style={{fontSize: 13, color: '#717171'}}>Pin - 745321</Text>
            </View>

            <TouchableOpacity style={styles.direction}>
              <Iconm name="directions" color={'#FAC516'} size={20} />
              <Text
                style={{fontSize: 10, fontWeight: 'bold', color: '#FAC516'}}>
                Get Direction
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{fontSize: 12, color: '#717171', marginTop: 20}}>
              Slot Booked: 27th Jan 2021, Monday, 09.30AM-11.30AM
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Your_slot_booked;

const styles = StyleSheet.create({
  mainview: {
    borderWidth: 1,
    borderColor: '#E7E7E7',
    borderRadius: 10,
    margin: 10,
  },
  heading: {
    color: '#222222',
    fontWeight: 'bold',
    fontSize: 16,
    borderBottomWidth: 1,
    paddingVertical: 15,
    borderColor: '#E7E7E7',
  },
  couch_view: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between',
  },
  cricket_icon: {
    width: 30,
    height: 30,
  },
  location_details: {
    width: '70%',
  },
  direction: {
    alignItems: 'center',
  },
});
