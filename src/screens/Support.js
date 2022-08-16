import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import support1 from '../assets/img/support.png';

export default function Support() {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: windowWidth * 0.8,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        source={support1}
      />
      <View
        style={{height: windowHeight * 0.4, justifyContent: 'space-evenly'}}>
        <View
          style={{
            borderRadius: 10,
            flexDirection: 'column',
            backgroundColor: '#fff',
            width: windowWidth * 0.9,
            marginLeft: 'auto',
            marginRight: 'auto',
            borderWidth: 1,
            borderColor: '#E7E7E7',
            padding: 40,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#0003C1', marginRight: 10}}>
              <Icon name="address-book" size={12} />
            </Text>
            <Text style={{fontSize: 12, color: '#0003C1', fontWeight: '700'}}>
              CONTACT US
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 10, fontWeight: '700', marginLeft: 23}}>
              +91 9876543219
            </Text>
          </View>
        </View>

        <View
          style={{
            borderRadius: 10,
            flexDirection: 'column',
            width: windowWidth * 0.9,
            marginLeft: 'auto',
            marginRight: 'auto',
            borderWidth: 1,
            borderColor: '#E7E7E7',
            padding: 40,
            backgroundColor: '#fff',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#0003C1', marginRight: 10}}>
              <Icon name="user" size={12} />
            </Text>
            <Text style={{fontSize: 12, color: '#0003C1', fontWeight: '700'}}>
              MAIL US
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 10, fontWeight: '700', marginLeft: 23}}>
              aarka@gmail.com
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },
});
