import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
// import Wish_Card from '../components/Wish';
import {useState, useEffect} from 'react';
import {apicaller} from './api';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {getId, getToken} from '../../Redux/slices/userSlice';
export default function Wishlist() {
  const idRd = useSelector(getId);
  console.log('idRd', idRd);
  const [WishList, setWishList] = useState([]);
  const [selectd, setSlected] = useState();
  const Token = useSelector(getToken);
  var axios = require('axios');
  useEffect(() => {
    getWish();
  }, []);

  function getWish() {
    apicaller(`myfav/${idRd}`, null, 'get', `Bearer ${Token}`)
      .then(function (response) {
        console.log('getWish', JSON.stringify(response.data.result));
        setWishList(response.data.result);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function removewishlist(sid) {
    console.log('remove wishlist');
    var axios = require('axios');

    var config = {
      method: 'delete',
      url: `http://15.207.26.74:8000/api/myfav/${idRd}/${sid}`,
      headers: {
        authorization: `Bearer ${Token}`,
        'Content-Type': 'application/json',
      },
    };

    axios(config)
      .then(function (response) {
        console.log('wishlist', JSON.stringify(response.data));

        getWish();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      {!WishList && (
        <View
          style={[
            styles.container,
            {justifyContent: 'center', alignItems: 'center'},
          ]}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>
            NO DATA AVELABLE
          </Text>
        </View>
      )}
      {WishList ? (
        <View style={styles.container}>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            {WishList.map(s => {
              console.log(s.sports_center_id.sports_centre_image[0].img);
              return (
                <View style={styles.container1}>
                  <View style={styles.box}>
                    {s.sports_center_id.sports_centre_image[0].img !==
                      undefined && (
                      <Image
                        style={styles.satdium}
                        source={{
                          uri: s.sports_center_id.sports_centre_image[0].img,
                        }}
                      />
                    )}
                  </View>

                  <View style={styles.txt_box}>
                    <View style={[styles.row, styles.txt_viw]}>
                      <Text style={styles.title}>
                        {s.sports_center_id.ground_name}
                      </Text>
                    </View>

                    <View style={[styles.row, styles.hart]}>
                      <View style={styles.address}>
                        <Text style={[styles.subtitle, {color: '#717171'}]}>
                          {s.sports_center_id.address}
                        </Text>
                        <View style={[styles.row, styles.rat]}>
                          <View style={[styles.row]}>
                            <Icon name="star" size={8} color="#FAC516" />
                            <Icon name="star" size={8} color="#FAC516" />
                            <Icon name="star" size={8} color="#FAC516" />
                            <Icon name="star" size={8} color="#FAC516" />
                            <Icon name="star" size={8} color="#FAC516" />
                          </View>
                        </View>
                        <Text style={[styles.subtitle1, {color: '#0003C1'}]}>
                          Timming:{s.sports_center_id.time_end} -
                          {s.sports_center_id.time_start}
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => {
                          removewishlist(s.sports_center_id._id);
                        }}>
                        <Icon name="heart" size={16} color="red" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#0003C1" />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container1: {
    padding: 5,

    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: 'white',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: 160,
    height: 110,
    flexWrap: 'wrap',
    overflow: 'hidden',
    borderRadius: 10,
  },
  satdium: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#0003C1',
    fontFamily: 'ReadexPro-Bold',
    marginVertical: 1,
  },
  km: {
    backgroundColor: '#FAC516',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,

    marginLeft: 10,
  },
  kmtxt: {
    fontSize: 8,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 10,
    marginVertical: 1,
  },
  subtitle1: {
    fontSize: 8,
    fontWeight: 'bold',
  },
  rat: {
    alignItems: 'center',
    marginVertical: 1,
  },
  hart: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  txt_viw: {
    justifyContent: 'space-between',
  },
  rev: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#9C9C9C',
    marginVertical: 1,
  },
  txt_box: {
    justifyContent: 'space-between',
  },
  address: {
    justifyContent: 'space-evenly',
    width: 110,
    flexGrow: 1,
  },
});
