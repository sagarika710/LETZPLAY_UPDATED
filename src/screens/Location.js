import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  PermissionsAndroid,
} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import Geolocation from 'react-native-geolocation-service';
import {setLoc, getToken, getId} from '../../Redux/slices/userSlice';
import {useSelector, useDispatch} from 'react-redux';
import {apicaller} from './api';
export default function Location(props) {
  const Id = useSelector(getId);
  const Token = useSelector(getToken);

  const dispatch = useDispatch();
  const [location, setLocation] = useState();
  useEffect(() => {
    requestLoc();
  }, []);
  const requestLoc = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Letz Play',
          message: 'Letz play is asking for your permission to access location',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location granted');
        //  alert('Location granted');
        getlocdata();
      } else {
        console.log('location failed');
        //  alert('Location permission not granted');
      }
    } catch (e) {
      console.error('location error', e);
    }
  };
  useEffect(() => {
    getlocdata();
    if (location) {
      home();
    }
  }, []);
  function getlocdata() {
    console.log('position', Geolocation.getCurrentPosition);
    Geolocation.getCurrentPosition(
      position => {
        // console.log( position);

        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        dispatch(
          setLoc({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        );
        if (location) {
          home();
        }
      },
      error => {
        console.log(error.code, error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      },
    );
  }
  //   useEffect(async () => {
  //     let hasLoc = await requestLoc();
  //   }, []);
  function home() {
    var data = JSON.stringify({
      current_longitude: location.latitude,
      current_latitiude: location.longitude,
      _id: Id,
    });
    apicaller('location', data, 'put', `Bearer ${Token}`)
      .then(res => {
        console.log('sagggggggggggggggggggggggg', res.data);
        props.navigation.navigate('Tab');
      })
      .catch(e => {
        console.log(e.value);
      });
  }
  function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: {lat: 40.72, lng: -73.96},
    });
    const geocoder = new google.maps.Geocoder();
    const infowindow = new google.maps.InfoWindow();

    document.getElementById('submit').addEventListener('click', () => {
      geocodePlaceId(geocoder, map, infowindow);
    });
  }

  // This function is called when the user clicks the UI button requesting
  // a geocode of a place ID.
  function geocodePlaceId(geocoder, map, infowindow) {
    const placeId = document.getElementById('place-id').value;

    geocoder
      .geocode({placeId: placeId})
      .then(({results}) => {
        if (results[0]) {
          map.setZoom(11);
          map.setCenter(results[0].geometry.location);

          const marker = new google.maps.Marker({
            map,
            position: results[0].geometry.location,
          });
          console.log(marker);
          infowindow.setContent(results[0].formatted_address);
          infowindow.open(map, marker);
        } else {
          window.alert('No results found');
        }
      })
      .catch(e => window.alert('Geocoder failed due to: ' + e));
  }

  window.initMap = initMap;
  console.log(location);
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/img/location.png')}
      />
      <Text style={styles.had}>we just need your permission </Text>

      <View style={styles.box1}>
        <Text style={styles.txt}>
          Set your location and Explore Aarka sports center around you{' '}
        </Text>
        <TouchableOpacity style={styles.btn} onPress={() => requestLoc()}>
          <Text style={styles.btntext}>Detect Current Location</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn1}
          onPress={() => props.navigation.navigate('LocationSearch')}>
          <Text style={styles.btntext1}>Select Location Manually</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    height: 43,
    backgroundColor: '#FAC516',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  btntext: {
    color: '#fff',
    fontFamily: 'ReadexPro-Bold',
    fontWeight: 'bold',
  },
  btn1: {
    height: 43,
    backgroundColor: '#FEEFBE',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  btntext1: {
    color: '#FAC516',
    fontSize: 12,
    fontFamily: 'ReadexPro-Bold',
  },
  box1: {
    width: '88%',
    marginVertical: 30,
  },
  logo: {
    width: 220,
    height: 290,
  },
  had: {
    fontSize: 15,
    color: '#3F3E3E',
    fontFamily: 'ReadexPro-Medium',
  },
  txt: {
    fontSize: 12,
    color: '#9C9C9C',
    marginBottom: 30,
    letterSpacing: 1,
    fontFamily: 'ReadexPro-Regular',
  },
});
