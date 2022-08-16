import {StyleSheet, Text, View, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import {AirbnbRating} from 'react-native-ratings';
import Colors from '../Colors';
import {getkm} from '../../../Redux/slices/userSlice';
import {useSelector, useDispatch} from 'react-redux';
import dir from '../../assets/img/directionBlue.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/AntDesign';
export default function StadiumNameAndAddress(props) {
  console.log(props);
  const Km = useSelector(getkm);
  return (
    <View style={{padding: 10}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{
            color: Colors.main,
            fontSize: 18,
            letterSpacing: 1,
            fontFamily: 'ReadexPro-Bold',
          }}>
          {props.center.ground_name}
        </Text>
        <TouchableOpacity
          style={{
            padding: 5,

            alignItems: 'center',
          }}
          onPress={() =>
            Linking.openURL(
              `geo:0,0?q=${props.center.latitude},${props.center.longitude}`,
            )
          }>
          <Icon name="directions" size={15} color={Colors.main} />
          <Text
            style={{
              color: Colors.blue,

              fontSize: 8,
              fontFamily: 'ReadexPro-Bold',
            }}>
            Get Direction
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{
            fontFamily: 'ReadexPro-Regular',
            fontSize: 12,
            color: Colors.grayTwo,
            width: '60%',
          }}>
          {props.center.address}
        </Text>
        <View style={{alignSelf: 'center', paddingRight: 8}}>
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
            {Km.toFixed(1)}
          </Text>
        </View>
      </View>

      <View style={{alignSelf: 'flex-start', marginTop: 5}}>
        {/* <AirbnbRating
          count={5}
          reviews={['Terrible', 'Bad', 'Meh', 'OK', 'Good']}
          showRating={false}
          defaultRating={5}
          size={20}
        /> */}
        <View
          style={{
            flexDirection: 'row',
            width: 70,
            justifyContent: 'space-between',
            marginRight: 10,
          }}>
          <AirbnbRating
            reviewSize={0}
            reviews={[]}
            count={props.center.rating_avg}
            defaultRating={props.center.rating_avg}
            size={10}
          />
        </View>
      </View>
      <Text
        style={{
          color: Colors.main,
          fontFamily: 'ReadexPro-Bold',
          fontSize: 12,
          paddingTop: 10,
        }}>
        Timing: {props.center.time_start} - {props.center.time_end}
      </Text>

      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({});
