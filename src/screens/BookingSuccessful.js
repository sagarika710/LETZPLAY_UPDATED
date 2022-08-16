import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

// packages import
import Icon from 'react-native-vector-icons/dist/FontAwesome';

// components import
import Successful from '../assets/img/successful.png';

// initialisations
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function BookingSuccessful({navigation}) {
  setTimeout(() => {
    navigation.navigate('BookingManage');
  }, 3000);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('BookingManage')}>
        <Image
          style={{
            height: 100,
            width: 100,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          source={Successful}
        />
        <Text
          style={{
            fontWeight: '700',
            fontSize: 18,
            color: '#000000',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 10,
          }}>
          Your Booking has been Confirmed!
        </Text>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 18,
            color: '#000000',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 10,
          }}>
          Congratulations!
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: windowHeight,
    flexDirection: 'column',
    justifyContent: 'center',

    backgroundColor: 'white',
  },

  textList: {
    color: 'black',
  },
});
