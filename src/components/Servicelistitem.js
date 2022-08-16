import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Colors from './Colors';
// packages import

import {useSelector, useDispatch} from 'react-redux';
import {setService} from '../../Redux/slices/userSlice';
// initialisations
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Servicelistcomp(props) {
  const dispatch = useDispatch();
  var [sliststate, setSliststate] = useState([]);
  var [mark, setMark] = useState('');
  function handleSlistArr(da) {
    if (!sliststate.includes(da)) {
      sliststate.push(da.data);
      console.log('sliststate', sliststate);
      setMark(props._id);
      alert(da.data.service_name + ' added');
      dispatch(setService(sliststate));
    } else {
      const index = sliststate.indexOf(da);

      if (index > -1) {
        setMark('');
        sliststate.splice(index, 1); // 2nd parameter means remove one item only
        console.log('sliststate', sliststate);
        alert(da.data.service_name + ' removed');
        dispatch(setService(sliststate));
      }
    }
  }
  return (
    <View
      style={{
        padding: 10,

        borderRadius: 10,
        marginTop: 10,
        overflow: 'hidden',
        borderColor: '#ffffff',
        borderWidth: 0.5,
        backgroundColor: '#FFFFFF',
        elevation: 4,
        margin: 15,
      }}>
      <View>
        {props.data.service_image[0] && (
          <Image
            source={{uri: props.data.service_image[0].img}}
            style={{height: 110, borderRadius: 10, width: '100%'}}
            resizeMode="cover"
          />
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: Colors.main,
            fontFamily: 'ReadexPro-Bold',
            letterSpacing: 1,
            fontSize: 16,
          }}>
          {props.data.service_name}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{height: 30, width: 30}}
            source={{uri: props.data.category_image}}
          />
          <Text
            style={{
              fontFamily: 'ReadexPro-Bold',
              fontSize: 12,
              padding: 5,

              color: Colors.main,
            }}>
            {props.sports}
          </Text>
        </View>
      </View>
      <Text
        style={{
          fontFamily: 'ReadexPro-Bold',
          letterSpacing: 1,
          fontSize: 12,
          color: '#FAC516',
        }}>
        ₹{props.data.price_per_hr}/hour
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
          marginBottom: 10,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Servicedetails', props.data._id)}
          style={{
            borderWidth: 1,
            borderRadius: 5,
            paddingLeft: 8,
            paddingRight: 8,
            paddingTop: 5,
            paddingBottom: 5,
            width: '48%',
            borderColor: '#FAC516',
          }}>
          <Text
            style={{
              fontFamily: 'ReadexPro-Bold',
              letterSpacing: 1,
              textAlign: 'center',
              padding: 5,
              color: Colors.main,
              fontSize: 12,
            }}>
            View Details
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 5,
            paddingLeft: 8,
            paddingRight: 8,
            paddingTop: 5,
            width: '48%',
            paddingBottom: 5,
            backgroundColor: '#FAC516',
            borderColor: '#fde494',
          }}
          onPress={() => {
            handleSlistArr(props);
          }}>
          {mark == props._id ? (
            <Text
              style={{
                fontFamily: 'ReadexPro-Bold',
                letterSpacing: 1,
                color: Colors.main,
                textAlign: 'center',
                fontSize: 12,
                padding: 5,
              }}>
              Selected
            </Text>
          ) : (
            <Text
              style={{
                fontFamily: 'ReadexPro-Bold',
                letterSpacing: 1,
                color: Colors.main,
                textAlign: 'center',
                fontSize: 12,
                padding: 5,
              }}>
              Select
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
