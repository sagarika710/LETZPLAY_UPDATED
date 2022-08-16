import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import Stadiumlistcomp from '../components/StadiumlistComp/Stadiumlistcomp';
import {apicaller} from './api';
import {useSelector} from 'react-redux';

import {
  getToken,
  getlocationOf,
  getId,
  getLat,
  getLang,
} from '../../Redux/slices/userSlice';

export default function Stadiumlist({route}) {
  const id = useSelector(getId);
  const [data, setData] = useState('');
  const [load, setLoad] = useState(false);
  const [Sports, setSports] = useState();
  const [SportsCenterall, setSportsCenter] = useState();
  const lat = useSelector(getLat);
  const long = useSelector(getLang);
  const Token = useSelector(getToken);
  const sid = route.params;
  console.log('sid', sid);
  // const [WishList, setWishList] = useState([]);
  // const [push, setPush] = useState([]);

  // useEffect(() => {
  //   apicaller(
  //     'search/near',
  //     JSON.stringify({
  // currentLocation: [user.latitude, user.longitude],
  //       currentLocation: [85.8346, 20.35319],
  //       radius: 500000000000,
  //     }),
  //     'post',
  //   )
  //     .then(res => {
  //       console.log(res.data.data);
  //       let locresult = res.data.data.map(a => {
  //         return {...a.sportsCentre, currentDistance: a.currentDistance};
  //       });
  //       console.log(
  //         'loclength ',
  //         locresult.length,
  //         'locsearchlength ',
  //         res.data.data.length,
  //       );
  //       setData(locresult);
  //       setLoad(true);
  //     })
  //     .catch(e => {
  //       console.log('location search error ', e);
  //     });
  // }, []);

  //console.log('hubygbgybyg', data)

  //   useEffect(() => {

  //     apicaller(`user/getallwishlist/628dc9f34317ce764dee5afc`, null, 'get')
  //     .then((res) => {
  //         console.log('wish',JSON.stringify(res.data));
  //         setWishList(res.data.data.wishlist)

  //     });

  // console.log('aaaaaaa', WishList)
  // }, []);
  // WishList.map((e)=>{

  // push.push(e._id)
  // })
  // console.log(push)
  console.log('gggggg', id);
  // sports center list
  useEffect(() => {
    if (sid) {
      apicaller(
        //  'sports-center?longitude=72.4997&latitude=22.30',
        `get-sports-center-by-category?longitude=${long}&latitude=${lat}&sports_category_id=${sid}`,
        null,
        'get',
        `Bearer ${Token}`,
      ).then(res => {
        console.log('center', res.data.sportCenter);
        setSportsCenter(res.data.sportCenter);
      });
    } else {
      apicaller(
        //  'sports-center?longitude=72.4997&latitude=22.30',
        `sports-center?longitude=${long}&latitude=${lat}`,
        null,
        'get',
        `Bearer ${Token}`,
      ).then(res => {
        console.log('center', res.data.sportCenter);
        setSportsCenter(res.data.sportCenter);
      });
    }
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View></View>
      {/* {load == true && ( */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* {data.map((center, key) => {
            // console.log('STADIUM DATA ', center);
            return <Stadiumlistcomp key={key} xyz={center} />;
          })} */}

        {SportsCenterall &&
          SportsCenterall.map(data => {
            console.log('list', data);
            return <Stadiumlistcomp data={data} />;
          })}
      </ScrollView>
      {/* )} */}
    </View>
  );
}

const styles = StyleSheet.create({});
