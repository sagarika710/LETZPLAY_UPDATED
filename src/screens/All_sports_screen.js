import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {getLang, getLat} from '../../Redux/slices/userSlice';
import Color from '../components/Colors';
import {apicaller} from './api';
import {useSelector, useDispatch} from 'react-redux';
const Sports = ({navigation}) => {
  const [sportsCategories, setsportsCategories] = useState(null);
  const [Sports, setSports] = useState();
  const lat = useSelector(getLat);
  const lang = useSelector(getLang);
  useEffect(() => {
    apicaller(
      `get-nearby-category?longitude=${lang}&latitude=${lat}`,
      //`get-nearby-category?longitude=72.4997&latitude=22.30`,
      null,
      'get',
      null,
    )
      .then(res => {
        console.log(res.data);
        setSports(res.data.sports_catrgory);
      })
      .catch(e => {
        console.log(e.value);
      });
  }, []);

  return (
    <>
      {Sports ? (
        <View style={styles.container}>
          {Sports.map(item => {
            return (
              <TouchableOpacity
                style={styles.sportview}
                onPress={() => navigation.navigate('Stadiumlist')}>
                <View style={styles.sportimageview}>
                  <Image
                    style={styles.sportimage}
                    source={{uri: item.sports_category_id.category_image}}
                  />
                </View>
                <View>
                  <Text
                    numberOfLines={1}
                    adjustsFontSizeToFit
                    style={styles.sportname}>
                    {item.sports_category_id.category_name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#0003C1" />
        </View>
      )}
    </>
  );
};
export default Sports;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  sportview: {
    width: 110,
    height: 145,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
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
    fontFamily: 'ReadexPro-Bold',
    letterSpacing: 0.5,
    color: Color.blue,
    marginTop: 15,
  },
  sportimage: {
    height: 55,
    width: 65,
  },
});
