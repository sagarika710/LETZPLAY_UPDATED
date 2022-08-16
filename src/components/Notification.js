import * as React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import moment from 'moment';
import Moment from 'react-moment';
export default function Card(props) {
  return (
    <View style={styles.container}>
      <View style={styles.notification_view}>
        <Text style={styles.notification_message}>{props.title}</Text>

        <Text style={styles.time}>
          {moment().startOf('props.dat').fromNow()}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 5,

    borderRadius: 15,
    height: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  notification_view: {
    marginVertical: 5,

    borderRadius: 50,
  },
  notification_message: {
    marginVertical: 12,
    marginHorizontal: 10,
    fontSize: 12,
    fontFamily: 'ReadexPro-Bold',
    color: '#222222',
    letterSpacing: 0.5,
  },
  time: {
    fontSize: 10,
    fontWeight: 'normal',
    marginHorizontal: 10,
    marginBottom: 10,
    color: '#717171',
    fontFamily: 'ReadexPro-Medium',
  },
});
