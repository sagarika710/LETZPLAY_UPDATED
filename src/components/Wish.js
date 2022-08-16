import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import axios from 'axios';

export default function Wish_Card(props) {
  const [selectd, setSlected] = useState();
  const idRd = useSelector(getId);
  function wishdata(id) {
    setSlected(!selectd);

    //   alert('removemjbh bg');

    var axios = require('axios');
    var qs = require('qs');
    var data = qs.stringify({
      userid: idRd,
      stadiumid: id,
    });

    var config = {
      method: 'delete',
      url: 'https://us-central1-aarka-348813.cloudfunctions.net/apiGateway/api-v1/user/removefromwishlist',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  console.log('first', props.data.list.sportCentreName);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          style={styles.satdium}
          source={require('../assets/img/stadium.png')}
        />
      </View>

      <View style={styles.txt_box}>
        <View style={[styles.row, styles.txt_viw]}>
          <Text style={styles.title}>{props.data.list.sportCentreName}</Text>
        </View>

        <View style={[styles.row, styles.hart]}>
          <View style={styles.address}>
            <Text style={[styles.subtitle, {color: '#717171'}]}>x</Text>
            <View style={[styles.row, styles.rat]}>
              <View style={[styles.row]}>
                <Icon name="star" size={8} color="#FAC516" />
                <Icon name="star" size={8} color="#FAC516" />
                <Icon name="star" size={8} color="#FAC516" />
                <Icon name="star" size={8} color="#FAC516" />
                <Icon name="star" size={8} color="#FAC516" />
              </View>
              <Text style={[styles.rev]}>x Reviews</Text>
            </View>
            <Text style={[styles.subtitle1, {color: '#0003C1'}]}>
              Timming:x am - x pm
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              wishdata(props.data.list._id);
            }}>
            <Icon name="heart" size={16} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
