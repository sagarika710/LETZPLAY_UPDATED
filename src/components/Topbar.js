import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from './Colors';

export default function Topbar(props) {
  return (
    <View style={{flexDirection: 'row', backgroundColor: 'transparent'}}>
      <TouchableOpacity
        onPress={props.backButtonPreesed}
        style={{
          backgroundColor: '#eff3fa',
          borderRadius: 50,
          justifyContent:'center',
          alignItems:'center',
          width:30,
          height:30
         
        }}>
        <Icon name="chevron-back-sharp" size={20} color={Colors.primaryDark} />
      </TouchableOpacity>
      <View>
        <Text
          style={{
            color: Colors.main,
            fontWeight: '700',
            fontSize: 19,
            paddingLeft: 20,
          }}>
          {props.topBarTitle}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
