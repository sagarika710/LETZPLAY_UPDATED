import React, {useEffect} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Color from '../components/Colors';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {apicaller} from '../screens/api';
import {
  getLang,
  getLat,
  getToken,
  setStadid,
  setKm,
  getplanname,
} from '../../Redux/slices/userSlice';
import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import {Rating, AirbnbRating} from 'react-native-ratings';
const Sportscenter = props => {
  const navigation = useNavigation();
  const Token = useSelector(getToken);
  const lat = useSelector(getLat);
  const lang = useSelector(getLang);
  const [Sportsname, setSportsname] = useState();
  const Plan = useSelector(getplanname);
  const dispatch = useDispatch();
  if (props.data.sports_centre_image[0] != []) {
    console.log(
      'Rating is: ',
      JSON.stringify(props.data.sports_centre_image[0]),
    );
  }

  useEffect(() => {
    apicaller(
      ` sports-center?longitude=${lat}&latitude=${lang}`,
      // 'sports-center?longitude=72.4997&latitude=22.30',
      null,
      'get',
      `Bearer ${Token}`,
    )
      .then(res => {
        //  console.log('center', res.data.sportCenterCategory);
        setSportsname(res.data.sportCenterCategory);
      })
      .catch(e => {
        console.log(e.value);
      });
  }, []);

  return (
    <TouchableOpacity
      style={styles.stadiumview}
      onPress={() => {
        Plan
          ? navigation.navigate('Stadiumdetailsmember', props.data._id)
          : navigation.navigate('Stadiumdetails', props.data._id),
          dispatch(setStadid(props.data._id));
        dispatch(setKm(props.data.calculated));
      }}>
      {props.data.sports_centre_image[0] && (
        <Image
          style={styles.stadiumimage}
          source={{uri: props.data.sports_centre_image[0].img}}
        />
      )}
      <View style={styles.stadiumdetails}>
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          style={{
            color: Color.blue,
            fontSize: 13,
            fontFamily: 'ReadexPro-Bold',
            letterSpacing: 0.8,
            marginVertical: 5,
          }}>
          {props.data.ground_name}
        </Text>
        <Text
          numberOfLines={2}
          adjustsFontSizeToFit
          style={{
            color: '#717171',
            fontSize: 10,
            fontFamily: 'ReadexPro-Regular',
            letterSpacing: 0.5,
          }}>
          {props.data.address}
        </Text>

        {/* {Sportsname &&
          Sportsname.map(item => {
            return props.data._id == item.sports_center_id ? (
              <Text
                style={{
                  color: '#666060',
                  fontSize: 10,
                  fontFamily: 'ReadexPro-Bold',
                  letterSpacing: 0.5,
                  marginVertical: 5,
                }}>
                {item.sports_category_id.category_name}
              </Text>
            ) : null;
          })} */}
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <View style={styles.rating_iconview}>
            <AirbnbRating
              reviewSize={0}
              reviews={[]}
              count={props.data.rating_avg}
              defaultRating={props.data.rating_avg}
              size={10}
            />

            {/* <Rating showRating style={{paddingVertical: 10}} />
            <Icon name="star" size={10} color="#FAC516" />
            <Icon name="star" size={10} color="#FAC516" />
            <Icon name="star" size={10} color="#FAC516" />
            <Icon name="star" size={10} color="#FAC516" />
            <Icon name="star" size={10} color="#FAC516" /> */}
          </View>
          <View style={styles.km}>
            <Text
              style={[
                styles.kmtxt,
                {color: 'white', fontFamily: 'ReadexPro-Bold'},
              ]}>
              {props.data.calculated.toFixed(1)}km
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Sportscenter;

const styles = StyleSheet.create({
  stadiumview: {
    backgroundColor: Color.white,
    borderRadius: 20,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 15,
    flexGrow: 1,
    overflow: 'hidden',
    shadowColor: '#000',
    borderWidth: 0.4,
    borderColor: '#E3E1E1',
    padding: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 5,
    position: 'relative',
  },
  stadiumimage: {
    borderRadius: 20,
    height: 100,
    width: 150,
    margin: 8,
  },
  stadiumdetails: {
    margin: 5,
    width: '50%',
    marginVertical: 10,
    marginBottom: 15,
  },
  rating_iconview: {
    flexDirection: 'row',
  },
  km: {
    backgroundColor: '#FAC516',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',

    height: 15,
    position: 'absolute',
    right: 10,
    padding: 2,
  },
  kmtxt: {
    fontSize: 8,
    fontWeight: 'bold',
  },
});
