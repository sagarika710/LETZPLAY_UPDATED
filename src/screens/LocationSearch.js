import React, {useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';

import Style from '../styles/Style';
import Color from '../components/Colors';
import {color} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {
  setLoc,
  getToken,
  getId,
  setLocationOf,
} from '../../Redux/slices/userSlice';
import {useSelector, useDispatch} from 'react-redux';
import {apicaller} from './api';
const LocationSearch = props => {
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();

  const Id = useSelector(getId);
  const Token = useSelector(getToken);
  const dispatch = useDispatch();
  useEffect(() => {
    location();
  }, [lat, lng]);

  function location() {
    console.log('id', Id);
    console.log('token', Token);
    var data = JSON.stringify({
      current_longitude: lat,
      current_latitiude: lng,
      _id: Id,
    });
    apicaller('location', data, 'put', `Bearer ${Token}`)
      .then(res => {
        console.log(res.data);
        props.navigation.navigate('Tab');
      })
      .catch(e => {
        console.log(e.value);
      });
  }
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        fetchDetails={true}
        placeholder="Search"
        query={{
          key: 'AIzaSyAYc0uNa8aaNiX_aL6GZaAzX-S1SiUK6ZY',
          language: 'en', // language of the results
        }}
        onPress={(data, details = null) => {
          console.log('loacation of', details.name);
          setLat(details.geometry.location.lat);
          setLng(details.geometry.location.lng);
          dispatch(setLocationOf(details.name));
          dispatch(
            setLoc({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
            }),
          );
        }}
        onFail={error => console.error(error)}
        requestUrl={{
          url: 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
          useOnPlatform: 'web',
        }} // this in only required for use on the web. See https://git.io/JflFv more for details.
      />
    </View>
  );
};

export default LocationSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,

    backgroundColor: '#ecf0f1',
  },
  inputlocation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#DDDDDD',
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 50,
    paddingLeft: 15,
  },

  input: {
    width: '93%',

    color: '#909383',
    fontFamily: 'ReadexPro-Medium',
  },
  resultbox: {
    width: '90%',
    height: 40,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  resultxt: {color: '#9093A3', fontFamily: 'ReadexPro-Medium'},
});
