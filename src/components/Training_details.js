import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Iconm from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {apicaller} from '../screens/api';

const Training_details = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    apicaller(`getbookingdetails/62f88e7beff2f42a613c3913`, null, 'get', null)
      .then(res => {
        setData(res.data);
        console.log('kjhgfgkilhgufyctu', data);
      })
      .catch(e => {
        console.log(e.value);
      });
  }, []);
  return (
    <View style={styles.mainview}>
      {data ? (
        <View style={{margin: 18}}>
          <Text style={styles.heading}>Training Details</Text>
          <View style={styles.couch_view}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {/* <Image
                style={styles.cricket_icon}
                source={require('../assets/img/Cricket_icon.png')}
              /> */}
              <Text
                style={{fontSize: 14, color: '#717171', fontWeight: 'bold'}}>
                {data.booking.sports_category_id.category_name}
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.location_details}>
                <Text style={{fontSize: 13, color: '#717171'}}>
                  {data.booking.sports_center_id.ground_name}
                </Text>
                <Text style={{fontSize: 13, color: '#717171'}}>
                  {data.booking.sports_center_id.address}
                </Text>
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
                {data.slot.slot_start_time} - {data.slot.slot_end_time}
              </Text>
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
};
export default Training_details;

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
