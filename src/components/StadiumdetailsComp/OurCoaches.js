import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
// import coach from '../../assets/img/coach.png';
import Colors from '../Colors';
import {List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

export default function OurCoaches(props) {
  const mWidth = Dimensions.get('screen').width;
  return (
    <View
      style={{
        width: mWidth * 0.85,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: Colors.darkGray,
        flexDirection: 'row',
        marginRight: 10,
      }}>
      <View>
        <Image
          source={{uri: props.data.coach_image}}
          style={{
            backgroundColor: '#FAC516',
            borderRadius: 10,
            height: 110,
            width: 100,
          }}
        />
      </View>
      <View style={{marginLeft: 10}}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontFamily: 'ReadexPro-Bold',
              fontSize: 12,
              color: '#222222',
              letterSpacing: 1,
            }}>
            {props.data.coach_name}
          </Text>
          <Text
            style={{
              backgroundColor: '#189E02',
              borderRadius: 5,
              color: 'white',
              fontFamily: 'ReadexPro-Bold',
              fontSize: 10,
              paddingHorizontal: 5,
              alignSelf: 'center',
              paddingVertical: 2,
              marginLeft: 15,
            }}>
            {props.data.coach_rating}
            <Icon size={10} name="star" />
          </Text>
        </View>
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          style={{
            color: Colors.darkGray,
            fontFamily: 'ReadexPro-Medium',
            fontSize: 13,
            width: mWidth * 0.5,
            paddingTop: 5,
            paddingBottom: 5,
          }}>
          {props.data.coach_designation}
        </Text>
        <View>
          <Text style={{width: mWidth * 0.48}}>
            <Text
              style={{
                color: Colors.darkGray,
                fontFamily: 'ReadexPro-Medium',
                fontSize: 15,
                paddingRight: 5,
              }}>
              {'\u2022'}
            </Text>
            <Text
              style={{
                color: 'gray',
                fontFamily: 'ReadexPro-Medium',
                fontSize: 10,
              }}>
              {props.data.coach_description}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
