import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../Colors';
import {List} from 'react-native-paper';
import SubHeadings from './SubHeadings';
import OurCoaches from './OurCoaches';
import {apicaller} from '../../screens/api';

import {
  getSportid,
  getStadid,
  getToken,
  setSname,
  setSportid,
  setStadid,
  setSurl,
} from '../../../Redux/slices/userSlice';
import {useSelector, useDispatch} from 'react-redux';

export default function SportsAvailabeHere(props) {
  const [selected, setSelected] = useState(1);
  const [sports, setSports] = useState();
  const [sportslist, setSportslist] = useState();
  const mWidth = Dimensions.get('screen').width;
  const [ids, setIds] = useState('');
  const [name, setName] = useState('');
  const [couch, setCouch] = useState([]);
  const dispatch = useDispatch();
  const [data, setData] = useState('');
  const Token = useSelector(getToken);
  const Sports = useSelector(getStadid);
  const cat = useSelector(getSportid);
  useEffect(() => {
    dispatch(setSportid(false));
    apicaller(
      // `get-category-by-sports-center/62bbcb290f31d4e3cce6c553`,
      `get-category-by-sports-center/${props.id}`,
      null,
      'get',
      null,
    )
      .then(res => {
        ``;
        console.log('get-category-by-sports-center', res.data.category);
        setSports(res.data.category);
      })
      .catch(e => {
        console.log(e.value);
      });
  }, []);

  function coach(id, sid) {
    apicaller(
      //  `services-by-sport-center-id?sports_center_id=62bbcb290f31d4e3cce6c553&sports_category_id=62b564a927d097a67fcb9936`,
      `services-by-sport-center-id?sports_center_id=${sports}&sports_category_id=${cat}`,

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
  }

  return (
    <>
      {sports ? (
        <>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {sports.map(item => (
              <>
                <TouchableOpacity
                  onPress={() => {
                    coach(item.sports_category_id._id);
                    setName(item.sports_category_id.category_name);
                    setIds(item._id);
                    dispatch(setSportid(item.sports_category_id._id));
                    dispatch(setStadid(item.sports_center_id));
                    dispatch(setSname(item.sports_category_id.category_image));
                    dispatch(setSurl(item.sports_category_id.category_name));
                  }}
                  style={{
                    borderWidth: 1,
                    borderColor: ids == item._id ? '#FAC516' : '#9C9C9C',
                    flexDirection: 'row',
                    height: 40,
                    alignItems: 'center',
                    borderRadius: 10,
                    marginTop: 10,
                    marginRight: 6,
                  }}>
                  <Image
                    style={{height: 30, width: 30}}
                    source={{uri: item.sports_category_id.category_image}}
                  />
                  <Text
                    style={{
                      color: ids == item.id ? '#FAC516' : '#9C9C9C',
                      fontFamily: 'ReadexPro-Medium',
                      textAlign: 'center',
                      marginRight: 12,
                      fontSize: 10,
                    }}>
                    {item.sports_category_id.category_name}
                  </Text>
                </TouchableOpacity>
              </>
            ))}
            <View
              style={
                name
                  ? {
                      borderWidth: 1,
                      borderRadius: 10,
                      borderColor: '#9C9C9C',
                      padding: 10,
                      width: '100%',
                      marginTop: 10,
                    }
                  : {display: 'none'}
              }>
              <Text
                style={{
                  color: '#FAC516',
                  fontFamily: 'ReadexPro-Regular',
                  letterSpacing: 1,
                  fontSize: 14,
                }}>
                {name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',

                  flexWrap: 'wrap',
                  marginTop: 5,
                }}>
                {data
                  ? data.map(des => (
                      <>
                        <View
                          style={{
                            flexDirection: 'row',
                            width: '50%',

                            marginTop: 10,
                          }}>
                          <Icon
                            name="rhombus"
                            size={10}
                            color={Colors.main}
                            style={{padding: 3}}
                          />
                          <Text
                            style={{
                              color: Colors.grayTwo,
                              paddingLeft: 5,
                              fontSize: 12,
                              fontFamily: 'ReadexPro-Regular',
                            }}>
                            {des.service_name}
                          </Text>
                        </View>
                      </>
                    ))
                  : null}
              </View>
            </View>
          </View>
        </>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#0003C1" />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({});
