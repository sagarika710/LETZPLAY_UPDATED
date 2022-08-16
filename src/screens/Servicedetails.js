import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Topbar from '../components/Topbar';
import Slider from '../components/Servicedetails/Slider';
import Colors from '../components/Colors';

import SubHeadings from '../components/StadiumdetailsComp/SubHeadings';
import Ourfacilities from '../components/StadiumdetailsComp/Ourfacilities';
import HealthandHygine from '../components/StadiumdetailsComp/HealthandHygine';
import {apicaller} from './api';
import {getSportid, getToken} from '../../Redux/slices/userSlice';
import {useSelector, useDispatch} from 'react-redux';

export default function Servicedetails({navigation, route}) {
  const Token = useSelector(getToken);
  const sid = useSelector(getSportid);
  const [selected, setSelected] = useState(false);
  const id = route.params;
  const [hygin, setHygin] = useState([]);
  const [data, setData] = useState([]);
  const [facility, setfacility] = useState([]);

  var axios = require('axios');
  useEffect(() => {
    apicaller(`services/${id}`, null, 'get', `Bearer ${Token}`)
      .then(res => {
        console.log('qwertyuiop', res.data.service_image);
        setData(res.data);
      })
      .catch(e => {
        console.log(e.value);
      });

    // apicaller(`getfacilitiesbysportscentre/${id}`, null, 'get', null)
    apicaller(`getfacilitiesbysportscentre/${sid}`, null, 'get', null)
      .then(res => {
        console.log('facility', res.data.facilities);
        setfacility(res.data.facilities);
      })
      .catch(e => {
        console.log(e.value);
      });

    apicaller(`hygine?sports_center_id=${sid}`, null, 'get', `Bearer ${Token}`)
      .then(res => {
        console.log('hygin', JSON.stringify(res.data.result));
        setHygin(res.data.result);
      })
      .catch(e => {
        console.log(e.value);
      });
  }, []);

  const itemSelected = () => {
    setSelected(!selected);
  };
  return (
    <>
      <View style={{paddingHorizontal: 10, flex: 1, backgroundColor: 'white'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginTop: 20}}>
            {data.service_image && (
              <Image
                source={{uri: data.service_image[0].img}}
                style={{
                  height: 300,
                  borderRadius: 20,
                  width: Dimensions.get('window').width - 20,
                }}
              />
            )}
            {/* {data.service_image && (
              <Slider
                openFullView={() => navigation.navigate('Sliderimageview')}
                img={data.service_image}
              />
            )} */}
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 30,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: Colors.main,
                fontFamily: 'ReadexPro-Bold',
                letterSpacing: 1,
                fontSize: 18,
                letterSpacing: 2,
              }}>
              {data.service_name}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Image style={{height: 30, width: 30}} />
              <Text
                style={{
                  fontFamily: 'ReadexPro-Bold',
                  letterSpacing: 1,
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
              fontSize: 12,
              color: '#fbcc32',
              marginTop: 10,
            }}>
            ₹{data.price_per_hr} /hour
          </Text>
          <Text
            style={{
              color: 'gray',
              fontWeight: '400',
              fontSize: 12,
              lineHeight: 20,
              marginTop: 10,
              textAlign: 'justify',
              fontFamily: 'ReadexPro-Regular',
              letterSpacing: 0.5,
            }}>
            {data.description}
          </Text>
          <View>
            <SubHeadings title="Our Facilities" />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}>
              {facility ? (
                facility.map(e => {
                  return (
                    <Ourfacilities
                      facilityName={e.facility_name}
                      iconName={e.facility_image}
                    />
                  );
                })
              ) : (
                <Text style={{textAlign: 'center', margin: 20}}>
                  No data Available
                </Text>
              )}
            </View>
          </View>

          <View>
            <SubHeadings title="Health and Hygine" />

            {hygin ? (
              <View style={{marginTop: 10}}>
                {hygin.map(h => {
                  return <HealthandHygine title={h.description} />;
                })}
              </View>
            ) : (
              <Text style={{textAlign: 'center', margin: 20}}>
                No data Available
              </Text>
            )}
          </View>
        </ScrollView>
        {/* <TouchableOpacity
          onPress={itemSelected}
          style={{
            backgroundColor: !selected ? '#FDDA67' : '#FAC516',
            padding: 10,
            borderRadius: 10,
            height: 43,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'ReadexPro-Bold',
              letterSpacing: 1,
              color: Colors.white,
            }}>
            {!selected ? 'Select' : 'Selected'}
          </Text>
        </TouchableOpacity> */}
      </View>
      {/* ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#0003C1" />
        </View>
      )} */}
    </>
  );
}

const styles = StyleSheet.create({});
