import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

export default function HealthandHygine(props) {
  return (
    <View style={{flexDirection: 'row', marginTop: 3}}>
      <Text style={{padding: 4}}>
        <Icon name="checkcircle" color="green" />
      </Text>
      <Text
        style={{
          paddingLeft: 10,
          color: 'gray',
          fontWeight: '500',
          fontSize: 12,
          fontFamily: 'ReadexPro-Medium',
          letterSpacing:1
        }}>
        {props.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
