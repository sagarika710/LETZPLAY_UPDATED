import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/AntDesign';
import Colors from '../Colors';
import {AirbnbRating} from 'react-native-ratings';
import {useNavigation} from '@react-navigation/native';
import StadiumlistSlider from './StadiumlistSlider';
import Carousel from './Carousel';
import SecondSlider from './SecondSlider';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {
  getId,
  getToken,
  setStadid,
  setKm,
  getplanname,
} from '../../../Redux/slices/userSlice';
import {apicaller} from '../../screens/api';

export default function Stadiumlistcomp(props) {
  const idRd = useSelector(getId);
  const [selected, setSelected] = useState(false);
  const navigation = useNavigation();
  const [wishList, setWishList] = useState([]);
  var [push, setPush] = useState([]);
  const [selectd, setSlected] = useState();
  const Token = useSelector(getToken);
  const Plan = useSelector(getplanname);
  const dispatch = useDispatch();
  console.log('propssss', props);
  useEffect(() => {
    getWish();
  }, [selectd]);

  function getWish() {
    apicaller(`myfav/${idRd}`, null, 'get', `Bearer ${Token}`)
      .then(function (response) {
        console.log('get', JSON.stringify(response.data.result));
        setWishList(response.data.result);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  wishList.map(e => {
    push.push(e.sports_center_id._id);
    console.log('ws', e.sports_center_id._id);
  });
  console.log('push', push);
  function addwishlist(sid) {
    // add wishlist
    console.log(push.includes(sid));
    var data = JSON.stringify({
      sports_center_id: sid,
      user_id: idRd,
    });
    apicaller('myfav', data, 'post', `Bearer ${Token}`)
      .then(function (response) {
        console.log('Post', JSON.stringify(response.data.result));
        setPush([]);
        getWish();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function removewishlist(sid) {
    console.log('remove wishlist');
    var axios = require('axios');

    var config = {
      method: 'delete',
      url: `http://15.207.26.74:8000/api/myfav/${idRd}/${sid}`,
      headers: {
        authorization: `Bearer ${Token}`,
        'Content-Type': 'application/json',
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setPush([]);

        getWish();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function wish(sid) {
    // setWishList([]);
    if (push.includes(sid)) {
      removewishlist(sid);
    } else {
      addwishlist(sid);
    }
  }
  return (
    <TouchableOpacity
      style={{
        borderRadius: 15,
        overflow: 'hidden',

        backgroundColor: '#FFFFFF',
        elevation: 4,
        marginVertical: 5,
        marginHorizontal: 15,
      }}
      onPress={() => {
        Plan
          ? navigation.navigate('Stadiumdetailsmember', props.data._id)
          : navigation.navigate('Stadiumdetails', props.data._id),
          dispatch(setStadid(props.data._id));
        dispatch(setKm(props.data.calculated));
      }}>
      <View style={{borderRadius: 15}}>
        {props.data.sports_centre_image && (
          <StadiumlistSlider img={props.data.sports_centre_image} />
        )}
      </View>

      <TouchableOpacity
        onPress={() => {
          wish(props.data._id);
        }}
        style={{
          position: 'absolute',
          alignSelf: 'flex-end',
        }}>
        <Icon
          name="cards-heart"
          size={25}
          color={push.includes(props.data._id) ? 'red' : 'white'}
          style={{
            padding: 20,
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <Text
          style={{
            color: Colors.main,
            fontFamily: 'ReadexPro-Bold',
            fontSize: 14,
            letterSpacing: 1,
          }}>
          {props.data.ground_name}
        </Text>
        <View style={{paddingTop: 5}}>
          <Text
            style={{
              fontFamily: 'ReadexPro-Bold',
              fontSize: 10,
              borderRadius: 3,
              backgroundColor: '#fac516',
              paddingLeft: 8,
              paddingRight: 8,
              color: 'white',
            }}>
            {props.data.calculated.toFixed(1)} Km
          </Text>
        </View>
      </View>
      <Text
        style={{
          fontFamily: 'ReadexPro-Medium',
          fontSize: 12,
          letterSpacing: 0.8,
          color: Colors.grayTwo,
          paddingLeft: 10,
        }}>
        {props.data.address}
      </Text>
      <View
        style={{
          alignSelf: 'flex-start',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {/* <AirbnbRating
          count={5}
          reviews={['Terrible', 'Bad', 'Meh', 'OK', 'Good']}
          showRating={false}
          defaultRating={5}
          size={15}
        /> */}
        <View
          style={{
            flexDirection: 'row',
            width: 70,
            justifyContent: 'space-between',
            marginRight: 10,
            paddingLeft: 10,
          }}>
          <Icons name="star" size={12} color="#FAC516" />
          <Icons name="star" size={12} color="#FAC516" />
          <Icons name="star" size={12} color="#FAC516" />
          <Icons name="star" size={12} color="#FAC516" />
          <Icons name="star" size={12} color="#FAC516" />
        </View>
        <Text
          style={{
            fontSize: 10,
            color: Colors.darkGray,
            fontFamily: 'ReadexPro-Medium',
          }}>
          12 reviews
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{width: 180}}>
          <Text
            numberOfLines={1}
            adjustsFontSizeToFit
            style={{
              color: Colors.main,
              fontFamily: 'ReadexPro-Bold',
              fontSize: 12,
              paddingTop: 10,
              paddingLeft: 10,
            }}>
            Timing: {props.data.time_start}- {props.data.time_end}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            Plan
              ? navigation.navigate('Stadiumdetailsmember', props.data._id)
              : navigation.navigate('Stadiumdetails', props.data._id),
              dispatch(setStadid(props.data._id));
            dispatch(setKm(props.data.calculated));
          }}
          style={{
            borderWidth: 1,
            borderRadius: 8,
            paddingLeft: 13,
            paddingRight: 13,
            paddingTop: 5,
            paddingBottom: 5,
            borderColor: '#fac516',
            marginRight: 10,
            marginBottom: 10,
          }}>
          <Text
            style={{
              fontFamily: 'ReadexPro-Bold',
              color: Colors.main,
              fontSize: 12,
            }}>
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
