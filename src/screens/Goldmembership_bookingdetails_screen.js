import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Training_details from '../components/Training_details';
import Your_slot_booked from '../components/Your_slot_booked';

const Goldmembership_bookingdetails_screen = () => {
  return (
    <View style={styles.contrainer}>
      <Training_details />
      {/* <Your_slot_booked /> */}
    </View>
  );
};
export default Goldmembership_bookingdetails_screen;

const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
