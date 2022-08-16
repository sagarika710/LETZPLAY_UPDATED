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

export default EditSlotScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box} onPress={() => {}}>
        <Text style={styles.boxtxt}>Cricket</Text>
        <Text style={{color: '#717171', marginRight: 10}}>
          <Icon name="chevron-right" size={15} />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <Text style={styles.boxtxt}>Aarka Sports Center</Text>
        <Text style={{color: '#717171', marginRight: 10}}>
          <Icon name="chevron-right" size={15} />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={() => {}}>
        <Text style={styles.boxtxt}>07.30AM-09.30AM</Text>
        <Text style={{color: '#717171', marginRight: 10}}>
          <Icon name="chevron-right" size={15} />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          paddingTop: 4,
          height: 43,
          width: windowWidth * 0.9,
          marginLeft: 'auto',
          marginRight: 'auto',
          borderRadius: 10,
          borderColor: '#FAC516',
          borderWidth: 4,
          marginVertical: 20,
          marginHorizontal: 40,
          alignItems: 'center',
          backgroundColor: '#FAC516',
        }}>
        <Text
          style={{
            color: '#ffffff',
            fontSize: 18,
            fontWeight: '700',
            marginLeft: 10,
          }}>
          Select
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 3,
  },
  navtxt: {
    color: '#0003C1',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
    marginTop: 8,
  },
  boxtxt: {
    color: '#717171',
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 10,
  },
  box3txt: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
    marginTop: 8,
  },
  box: {
    paddingTop: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 51,
    width: windowWidth * 0.9,
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderColor: '#EBEAEA',
    borderWidth: 2,
    marginVertical: 20,
    marginHorizontal: 40,
    alignItems: 'center',
  },
  box2: {
    paddingTop: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 42,
    width: windowWidth * 0.2,
    justifyContent: 'space-evenly',
    borderRadius: 10,
    borderColor: '#9C9C9C',
    borderWidth: 1,
    marginTop: 10,
  },
  box3: {
    paddingTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 125,
    width: 340,
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderColor: '#EBEAEA',
    borderWidth: 4,
    marginVertical: 5,
    marginHorizontal: 40,
    alignItems: 'center',
  },
  but: {
    paddingTop: 4,
    height: 43,
    width: windowWidth * 0.9,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
    borderColor: '#FAC516',
    borderWidth: 4,
    marginVertical: 20,
    marginHorizontal: 40,
    alignItems: 'center',
    backgroundColor: '#FAC516',
  },
  timeselectbox: {
    paddingTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 42,
    width: 110,
    justifyContent: 'space-between',
    borderRadius: 10,
    borderColor: '#9C9C9C',
    borderWidth: 1,
    marginTop: 10,
  },
  sportsicon: {
    height: 20,
    width: 20,
    marginLeft: 3,
  },
  sportstext: {
    marginRight: 3,
    fontWeight: '600',
    fontSize: 9,
  },
});
