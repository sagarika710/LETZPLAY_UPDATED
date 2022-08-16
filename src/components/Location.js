import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import Style from '../styles/Style';
import Color from '../components/Colors';
import Icon, {Icons} from '../components/Icons';
const Location = props => {
  return (
    <View>
      <View style={styles.location_view}>
        <Icons.Ionicons name="location-outline" style={styles.location_icon} />

        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          style={styles.location_name}>
          {props.pop.length < 40
            ? `${props.pop}`
            : `${props.pop.substring(0, 30)}...`}
        </Text>
      </View>
      <View style={styles.border} />
    </View>
  );
};
export default Location;

const styles = StyleSheet.create({
  location_name: {
    fontSize: 18,
    color: Color.blue,
    fontFamily: 'ReadexPro-Bold',
    alignItems: 'center',
    letterSpacing: 2,
    width: 260,
  },
  location_icon: {
    fontSize: 24,
    color: Color.blue,
    marginBottom: 9,
  },

  location_view: {
    flexDirection: 'row',
    alignItems: 'center',

    width: Dimensions.get('window').width * 0.85,
  },
  border: {
    borderRadius: 1,
    borderStyle: 'dashed',
    borderBottomWidth: 0.9,
    borderColor: Color.blue,
    backgroundColor: Color.white,
    marginTop: -4,
  },
});
