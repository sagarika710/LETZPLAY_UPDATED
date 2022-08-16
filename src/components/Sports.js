import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';
import Color from '../components/Colors';
import {useNavigation} from '@react-navigation/native';

const Sports = props => {
  const navigation = useNavigation();
  console.log('frvbtebtrbtrbgtr', props.id);
  return (
    <>
      <TouchableOpacity
        style={styles.sportview}
        onPress={() => navigation.navigate('Stadiumlist', props.id)}>
        <View style={styles.sportimageview}>
          <Image style={styles.sportimage} source={{uri: props.url}} />
        </View>
        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.sportname}>
          {props.name}
        </Text>
      </TouchableOpacity>
    </>
  );
};
export default Sports;

const styles = StyleSheet.create({
  sportview: {
    width: 124,
    height: 165,
    backgroundColor: Color.dark_yellow,
    borderRadius: 20,
    marginTop: 15,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 5,
  },
  sportimageview: {
    backgroundColor: '#FFF4F0',
    height: 75,
    width: 79,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sportname: {
    fontSize: 16,
    color: Color.blue,
    marginTop: 15,
    fontFamily: 'ReadexPro-Bold',
    letterSpacing: 1,
    paddingHorizontal: 3,
  },
  sportimage: {
    height: 55,
    width: 65,
  },
});
