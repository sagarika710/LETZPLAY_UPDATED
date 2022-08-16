import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
// import statium from '../../assets/img/Sports/Net.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../Colors';
import {AirbnbRating} from 'react-native-ratings';
import {useNavigation} from '@react-navigation/native';
import {
  getUser,
  setUser,
  setSlist,
  getUsersportsId,
} from '../../../Redux/slices/userSlice';
import {useSelector, useDispatch} from 'react-redux';

export default function ServicelistComp(props) {
  var [selectd, setSlected] = useState(false);
  const navigation = useNavigation();
  var [push, setPush] = useState([]);
  const [theArray, setTheArray] = useState();
  const dispatch = useDispatch();

  // const itemSelected = () => {
  //   setSlected(!selectd);

  // };

  var x = props.service._id;

  //   function sagarika(id){
  //     alert(id)
  //     setSlected(!selectd);
  //     if(!selectd){
  //       push.push(id)
  //       alert('se',push)
  //       dispatch(setSlist(push))
  //     }
  //     else{
  // if (push.indexOf(5) > -1) {
  //   push.splice(index, 1);
  // }

  //       dispatch(setSlist(push))
  //       alert('un',push)
  //     }
  //   }
  function sagarika(id) {
    setSlected(!selectd);
    setTheArray(prevArray => [...prevArray, id]);
    alert(theArray);
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
        <Image
          //  source={statium}
          style={{height: 110, borderRadius: 10, width: '100%'}}
          resizeMode="cover"
        />
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
          {props.service.serviceName}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontFamily: 'ReadexPro-Bold',
              fontSize: 12,
              padding: 5,

              color: Colors.main,
            }}>
            Cricket
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
        ₹ {props.service.servicePrice}/hour
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
          marginBottom: 10,
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Servicedetails', props.service._id)
          }
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
          onPress={() => {
            sagarika(props.service._id);
          }}
          style={{
            borderWidth: 1,
            borderRadius: 5,
            paddingLeft: 8,
            paddingRight: 8,
            paddingTop: 5,
            width: '48%',
            paddingBottom: 5,
            backgroundColor: !selectd ? '#fde494' : '#FAC516',
            borderColor: '#fde494',
          }}>
          <Text
            style={{
              fontFamily: 'ReadexPro-Bold',
              letterSpacing: 1,
              color: Colors.main,
              textAlign: 'center',
              fontSize: 12,
              padding: 5,
            }}>
            {!selectd ? 'Select' : 'Selected'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
