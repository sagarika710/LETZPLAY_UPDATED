import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
  PermissionsAndroid,
  BackHandler,
} from 'react-native';
import axios from 'axios';

import Style from '../styles/Style';
import Color from '../components/Colors';
import {color} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Ionicons';
import Iconf from 'react-native-vector-icons/FontAwesome';
import Location from '../components/Location';
import Autoslider from '../components/Autoslider';
import Sportscomp from '../components/Sports';
import Sportscenter from '../components/sportscenter';
import {api} from '../styles/Api';
import {apicaller} from './api';
import Geolocation from 'react-native-geolocation-service';
import {
  getToken,
  getlocationOf,
  getLoc,
  getLat,
  getLang,
} from '../../Redux/slices/userSlice';
import {useSelector, useDispatch} from 'react-redux';
import Geocoder from 'react-native-geocoding';
const Home = props => {
  //lert(JSON.stringify( user.phone))

  const [sportsCentres, setsportsCentres] = useState(null);
  const [Image, setImage] = useState();
  const [Sports, setSports] = useState();
  const [address, setAddress] = useState();
  const [SportsCenterall, setSportsCenter] = useState();
  const Token = useSelector(getToken);
  const Loca = useSelector(getlocationOf);
  const lat = useSelector(getLat);
  const lang = useSelector(getLang);
  console.log('longitude:', lang, 'latitude', lat);
  useEffect(() => {
    //slider
    apicaller('getSlider', null, 'get', null)
      .then(res => {
        //   console.log(res.data.advertiseSlider[0].slider_image[0]);
        setImage(res.data.advertiseSlider[0].slider_image);
        //console.log('image', Image);
      })
      .catch(e => {
        console.log(e.value);
      });
  }, []);
  // category
  useEffect(() => {
    apicaller(
      // `get-nearby-category?longitude=72.4997&latitude=22.30`,
      `get-nearby-category?longitude=${lang}&latitude=${lat}`,
      // 'get-nearby-category?longitude=85.8343254&latitude=20.3596102',
      null,
      'get',
      null,
    )
      .then(res => {
        console.log('categporylist', res.data);
        setSports(res.data.sports_catrgory);
      })
      .catch(e => {
        console.log(e.value);
      });
  }, []);

  // sports center
  useEffect(() => {
    apicaller(
      `sports-center?longitude=${lang}&latitude=${lat}`,
      // 'sports-center?longitude=85.8343254&latitude=20.3596102',
      null,
      'get',
      `Bearer ${Token}`,
    )
      .then(res => {
        //  console.log('center', res.data.sportCenter);
        setSportsCenter(res.data.sportCenter);
      })
      .catch(e => {
        console.log(e.value);
      });
  }, []);
  //console.log('ssssss', SportsCenterall);
  Geocoder.init('AIzaSyAYc0uNa8aaNiX_aL6GZaAzX-S1SiUK6ZY');
  Geocoder.from({
    latitude: lat,
    longitude: lang,
  })
    .then(json => {
      var addressComponent = json.results[0].formatted_address;
      // console.log(addressComponent);
      setAddress(addressComponent);
    })
    .catch(error => console.warn(error));
  let currentCount = 0;
  const subscription = BackHandler.addEventListener('hardwareBackPress', () => {
    if (currentCount === 1) {
      BackHandler.exitApp();
    }
    backPressHandler();
    return true;
  });

  const backPressHandler = () => {
    if (currentCount < 1) {
      currentCount += 1;
    }
    setTimeout(() => {
      currentCount = 0;
    }, 2000);
  };
  return (
    <>
      <ScrollView
        style={Style.Container}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View>
          <View style={styles.inputlocation}>
            <TouchableOpacity
              style={{height: 60, justifyContent: 'flex-end'}}
              onPress={() => props.navigation.navigate('LocationSearch')}>
              {Loca
                ? Loca && <Location pop={Loca} />
                : address && <Location pop={address} />}
            </TouchableOpacity>

            <View style={styles.notification}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Notification')}>
                <Icons
                  name="notifications-outline"
                  style={styles.notification_icon}
                />
                <View style={styles.notification_count}>
                  <Text style={styles.count}>10</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView
            style={{padding: 2, marginBottom: 100}}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            {Image ? <Autoslider img={Image} /> : null}
            <View style={styles.explore_sports_view}>
              <View>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginRight: 12,
                    alignItems: 'center',
                  }}
                  onPress={() => props.navigation.navigate('All_sports')}>
                  <Text
                    numberOfLines={1}
                    adjustsFontSizeToFit
                    style={[styles.heading, {width: 240}]}>
                    Explore sports around you
                  </Text>

                  <Iconf name="angle-right" size={20} color="#0003C1" />
                </TouchableOpacity>
              </View>
              <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                style={styles.verticalscrollview}>
                {Sports
                  ? Sports.map(item => {
                      // console.log(item.category_image);
                      return (
                        <Sportscomp
                          id={item.sports_category_id._id}
                          name={item.sports_category_id.category_name}
                          url={item.sports_category_id.category_image}
                        />
                      );
                    })
                  : null}
                {/* {Sports.map(item => {
                  console.log(item);
                  return (
                    <Sports
                      name={item.category_name}
                      url={item.category_image}
                    />
                  );
                })} */}
              </ScrollView>
            </View>

            <View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginRight: 20,
                  alignItems: 'center',
                }}
                onPress={() => props.navigation.navigate('Stadiumlist')}>
                <Text
                  numberOfLines={1}
                  adjustsFontSizeToFit
                  style={[styles.heading, {width: 180}]}>
                  Our sports centers
                </Text>
                <Iconf name="angle-right" size={20} color="#0003C1" />
              </TouchableOpacity>
            </View>
            {/* {sportsCentres !== null &&
              sportsCentres.map(item => {
                let category = [];

                return (
                  <Sportscenter
                    url={require('../assets/img/stadium.png')}
                    data={item}
                    Distance={item.currentDistance}
                  />
                );

              })} */}
            {SportsCenterall &&
              SportsCenterall.map(data => {
                return (
                  <Sportscenter
                    data={data}
                    // img={(data.sports_centre_image[1].img)}
                  />
                );
              })}
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  inputlocation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: Color.blue,
    marginHorizontal: 10,
  },
  location_name: {
    fontSize: 18,
    color: Color.blue,

    fontFamily: 'ReadexPro-Bold',
    alignItems: 'center',
  },
  location_icon: {
    fontSize: 24,
    color: Color.blue,
    fontFamily: 'ReadexPro-Medium',
  },
  notification: {
    alignItems: 'flex-end',
    position: 'relative',
  },
  notification_icon: {
    fontSize: 24,
    color: Color.blue,
    fontFamily: 'ReadexPro-Medium',
  },
  notification_count: {
    backgroundColor: Color.dark_yellow,
    height: 15,
    width: 15,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 9,
    bottom: 13,
  },
  count: {
    color: Color.white,
    fontSize: 8,
    fontFamily: 'ReadexPro-Bold',
  },
  location_view: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.85,
  },
  border: {
    borderRadius: 1,
    borderStyle: 'dashed',
    borderWidth: 0.9,
    borderColor: Color.blue,
    backgroundColor: Color.white,
    marginTop: -6,
  },
  explore_sports_view: {
    marginVertical: 20,
  },
  heading: {
    fontSize: 17,
    color: Color.blue,
    marginLeft: 10,
    fontFamily: 'ReadexPro-Medium',
  },
  verticalscrollview: {
    flexDirection: 'row',
  },
});
