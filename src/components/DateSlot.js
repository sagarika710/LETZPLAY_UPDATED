import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

export default function DateSlot(props) {
  const [pressed, setIsPressed] = useState(true);

  return (
    <TouchableOpacity
      onPress={() => {
        setIsPressed(!pressed);
      }}
      style={{
        marginTop: 15,
        borderWidth: 1,
        padding: 5,
        borderColor: !pressed ? '#FAC516' : '#9C9C9C',
        borderRadius: 10,
        marginRight: 10,
        width: 60,
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: '#222',
          fontFamily: 'ReadexPro-Bold',

          letterSpacing: 1,
        }}>
        {props.date}
      </Text>
      <Text
        style={{
          //  color: selected ? '#FAC516' : '#9C9C9C',
          fontFamily: 'ReadexPro-Bold',
          letterSpacing: 1,
          fontSize: 10,
        }}>
        {props.day}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
