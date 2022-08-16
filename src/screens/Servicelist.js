import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';

import React, {useState, useEffect} from 'react';
import Topbar from '../components/Topbar';
import Colors from '../components/Colors';

import {useNavigation} from '@react-navigation/native';
import {api} from '../styles/Api';
import {
  getId,
  getSportid,
  getStadid,
  getToken,
  setService,
} from '../../Redux/slices/userSlice';
import {useSelector, useDispatch} from 'react-redux';
import Servicelistitem from '../components/Servicelistitem';

import {apicaller} from '../screens/api';
import Btn from '../components/Btn';
import {setEnabled} from 'react-native/Libraries/Performance/Systrace';

export default function Servicelist({navigation, route}) {
  const id = route.params;
  console.log('khjghfgcf,', id);
  var [selectd, setSlected] = useState(false);
  const [data, setData] = useState('');
  const [Sname, setSname] = useState('');
  const Idrd = useSelector(getId);
  const spid = useSelector(getStadid);
  const scid = useSelector(getSportid);
  const Token = useSelector(getToken);
  const dispatch = useDispatch();
  var [sliststate, setSliststate] = useState([]);
  var [push, setPush] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [enabled, setEnabled] = useState();
  var axios = require('axios');
  useEffect(() => {
    apicaller(
      //'services-by-sport-center-id?sports_center_id=62bbcb290f31d4e3cce6c553&sports_category_id=62b564a927d097a67fcb9936',
      `services-by-sport-center-id?sports_center_id=${spid}&sports_category_id=${scid}`,
      null,
      'get',
      `Bearer ${Token}`,
    )
      .then(res => {
        console.log('kjhgfgkilhgufyctu', res.data);
        setData(res.data);
      })
      .catch(e => {
        console.log(e.value);
      });
  }, []);
  if (data) {
    // console.log(data[0].sports_center_id);
    apicaller(
      // `get-category-by-sports-center/${data[0].sports_center_id}`,62bbcb290f31d4e3cce6c553
      `get-category-by-sports-center/${spid}`,
      null,
      'get',
      null,
    )
      .then(res => {
        //  console.log('aaaaaaa', res.data.category);
        if (res.data.category) {
          res.data.category.map(s => {
            console.log(s.sports_category_id._id);
            if (s.sports_category_id._id == data[0].sports_category_id) {
              setSname(s.sports_category_id.category_name);
            }
          });
        }
      })
      .catch(e => {
        console.log(e.value);
      });
  }

  wishList.map(e => {
    push.push(e.service_id);
    console.log('ws', e.service_id);
  });
  console.log('push', push);

  function handleSlistArr(da) {
    if (!sliststate.includes(da)) {
      sliststate.push(da);
      console.log('sliststate', sliststate, sliststate.length);
      setEnabled(sliststate.length);
      // alert(da.service_name + ' added');
    } else {
      const index = sliststate.indexOf(da);

      if (index > -1) {
        sliststate.splice(index, 1); // 2nd parameter means remove one item only
        console.log('sliststate', sliststate, sliststate.length);
        setEnabled(sliststate.length);
        //  alert(da.service_name + ' removed');
      }
    }
  }

  const passData = datas => {
    handleSlistArr(datas);
  };
  return (
    <>
      {data ? (
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {data.map(s => {
              //  console.log('ssss', s);
              return (
                <View>
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
                      {s.service_image[0] && (
                        <Image
                          source={{uri: s.service_image[0].img}}
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
                        {s.service_name}
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <Image
                          style={{height: 30, width: 30}}
                          source={{uri: s.category_image}}
                        />
                        <Text
                          style={{
                            fontFamily: 'ReadexPro-Bold',
                            fontSize: 12,
                            padding: 5,

                            color: Colors.main,
                          }}>
                          {Sname}
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
                      ₹{s.price_per_hr}/hour
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
                          navigation.navigate('Servicedetails', s._id)
                        }
                        style={{
                          borderWidth: 1,
                          borderRadius: 5,
                          paddingLeft: 8,
                          paddingRight: 8,
                          paddingTop: 5,
                          paddingBottom: 5,
                          width: '48%',
                          justifyContent: 'center',
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

                      <Btn passData={passData} datas={s} />
                    </View>
                  </View>
                </View>
              );
            })}
          </ScrollView>

          <TouchableOpacity
            disabled={enabled ? false : true}
            style={{
              backgroundColor: enabled ? '#fac516' : '#E8DBB1',
              borderRadius: 10,
              margin: 10,
              height: 43,
              justifyContent: 'center',
            }}
            onPress={() => {
              navigation.navigate('Slotscreen');
              dispatch(setService(sliststate));
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'ReadexPro-Bold',
                letterSpacing: 1,
                color: Colors.white,
              }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#0003C1" />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({});
