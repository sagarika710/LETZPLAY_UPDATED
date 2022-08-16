import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../Colors';

export default function Ourfacilities(props) {
  return (
    <View style={{flexDirection: 'row', paddingTop: 15, alignItems: 'center'}}>
      <Image style={{height: 16, width: 16}} source={{uri: props.iconName}} />

      <Text
        style={{
          color: Colors.grayThree,
          fontWeight: '500',
          paddingLeft: 10,
          paddingTop: 3,
          fontSize: 10,
          fontFamily: 'ReadexPro-Ragular',
          letterSpacing: 0.5,
        }}>
        {props.facilityName}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
