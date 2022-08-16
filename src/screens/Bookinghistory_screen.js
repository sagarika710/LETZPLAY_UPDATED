import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Bookinghistory from '../components/Bookinghistory';

const Bookinghistory_screen = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://15.207.26.74:8000/api/getbookings/62ec19df4af75d5c52d1ca96',
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  var History = [
    {
      url: require('../assets/img/Cricket_icon.png'),
      centername: 'Aarka Sports Center',
      name: 'Cricket',
      time: '06.30',
      date: '22.02.2022',
      bookingtype: 'One Day Booking',
      price: '₹240',
    },
    {
      url: require('../assets/img/Cricket_icon.png'),
      centername: 'Aarka Sports Center',
      name: 'Cricket',
      time: '06.30',
      date: '22.02.2022',
      bookingtype: 'Silver Membership Plan',
      price: '₹240',
    },
    {
      url: require('../assets/img/Cricket_icon.png'),
      centername: 'Barbati Sports Center',
      name: 'Cricket',
      time: '06.30',
      date: '22.02.2022',
      bookingtype: 'Glod Membership Plan',
      price: '₹240',
    },
    {
      url: require('../assets/img/Cricket_icon.png'),
      centername: 'Aarka Sports Center',
      name: 'Cricket',
      time: '06.30',
      date: '22.02.2022',
      bookingtype: 'One Day Booking',
      price: '₹240',
    },
    {
      url: require('../assets/img/Cricket_icon.png'),
      centername: 'Barbati Sports Center',
      name: 'Cricket',
      time: '06.30',
      date: '22.02.2022',
      bookingtype: 'One Day Booking',
      price: '₹240',
    },
    {
      url: require('../assets/img/Cricket_icon.png'),
      centername: 'Aarka Sports Center',
      name: 'Cricket',
      time: '06.30',
      date: '22.02.2022',
      bookingtype: 'One Day Booking',
      price: '₹240',
    },
  ];
  return (
    <ScrollView style={styles.contrainer}>
      {data
        ? data?.map(booinghistorydata => {
            return <Bookinghistory data={booinghistorydata} />;
          })
        : null}
    </ScrollView>
  );
};
export default Bookinghistory_screen;

const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
