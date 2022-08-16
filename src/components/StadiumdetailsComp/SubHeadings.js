import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function SubHeadings(props) {
  return (
    <View style={{}}>
      <Text style={{color: '#222', fontFamily: 'ReadexPro-Medium', fontSize: 15,letterSpacing:.5,marginVertical:10}}>
        {props.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
