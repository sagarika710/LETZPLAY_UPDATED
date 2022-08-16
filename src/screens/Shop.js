import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import comingsoon from '../assets/img/commingsoon.png';

export default function Shop() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
       justifyContent:'center'
      }}>
      <Image source={comingsoon} />
    </View>
  );
}

const styles = StyleSheet.create({});
