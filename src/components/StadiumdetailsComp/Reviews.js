import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Divider} from 'react-native-paper';

export default function Reviews(props) {
  console.log(props);
  return (
    <View style={{marginTop: 10}}>
      <View style={{flexDirection: 'row'}}>
        <Icon name="account-circle" size={35} color="#0003c1" />
        {props.data.from_user && (
          <>
            <Text
              style={{
                fontFamily: 'ReadexPro-Bold',
                letterSpacing: 1,
                color: '#222',
                fontSize: 14,
                paddingLeft: 20,
                padding: 5,
              }}>
              {props.data.from_user.name}
            </Text>
          </>
        )}
      </View>
      <Text
        style={{
          color: 'gray',
          fontFamily: 'ReadexPro-Medium',
          letterSpacing: 1,
          lineHeight: 15,
          fontSize: 12,
          textAlign: 'justify',
          marginTop: 10,
        }}>
        {props.data.review}
      </Text>

      <View
        style={{
          borderColor: '#ebeaea',
          borderBottomWidth: 1,
          width: '100%',
          marginTop: 20,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
