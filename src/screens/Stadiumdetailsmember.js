import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator,
  BackHandler,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import StadiumdetailsSlider from '../components/StadiumdetailsComp/StadiumdetailsSlider';
import Topbar from '../components/Topbar';
import {Button} from 'react-native-paper';
import StadiumNameAndAddress from '../components/StadiumdetailsComp/StadiumNameAndAddress';
import Ourfacilities from '../components/StadiumdetailsComp/Ourfacilities';
import Colors from '../components/Colors';
import OurCoaches from '../components/StadiumdetailsComp/OurCoaches';
import SubHeadings from '../components/StadiumdetailsComp/SubHeadings';
import HealthandHygine from '../components/StadiumdetailsComp/HealthandHygine';
import Reviews from '../components/StadiumdetailsComp/Reviews';
import SportsAvailabeHere from '../components/StadiumdetailsComp/SportsAvailabeHere';
import axios from 'axios';
import {apicaller} from './api';
import {getSportid, getToken, setStadmemid} from '../../Redux/slices/userSlice';
import {useSelector, useDispatch} from 'react-redux';
import MapView, {Marker} from 'react-native-maps';
export default function Stadiumdetails({navigation, route}) {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [facility, setfacility] = useState([]);
  const [couch, setCouch] = useState([]);
  const [load, setLoad] = useState(false);
  const [hygin, setHygin] = useState([]);
  const [dis, setDis] = useState('');
  const [rating, setRating] = useState();
  const id = route.params;
  const Token = useSelector(getToken);
  const click = useSelector(getSportid);
  // alert(id);
  useEffect(() => {
    apicaller(`sports-center/${id}`, null, 'get', `Bearer ${Token}`)
      .then(res => {
        console.log('sports-center', res.data.sports_centre_image);
        setData(res.data);
      })
      .catch(e => {
        console.log(e.value);
      });

    apicaller(`hygine?sports_center_id=${id}`, null, 'get', `Bearer ${Token}`)
      .then(res => {
        console.log('hygin', JSON.stringify(res.data.result));
        setHygin(res.data.result);
      })
      .catch(e => {
        console.log(e.value);
      });

    apicaller(`rating?sports_center_id=${id}`, null, 'get', `Bearer ${Token}`)
      .then(res => {
        console.log('rat', JSON.stringify(res.data));
        setRating(res.data);
      })
      .catch(e => {
        console.log(e.value);
      });

    apicaller(`getfacilitiesbysportscentre/${id}`, null, 'get', null)
      .then(res => {
        console.log('facility', res.data.facilities);
        setfacility(res.data.facilities);
      })
      .catch(e => {
        console.log(e.value);
      });
    apicaller(`getcoachsbysportscentre/${id}`, null, 'get', null)
      .then(res => {
        console.log('setCouch', res.data.coaches);
        setCouch(res.data.coaches);
      })
      .catch(e => {
        console.log(e.value);
      });
  }, []);
  console.log('click', click ? 'true' : 'false');

  const subscription = BackHandler.addEventListener('hardwareBackPress', () => {
    navigation.navigate('Tab');
    return true;
  });
  return (
    <>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              position: 'absolute',
              zIndex: 999,
              backgroundColor: 'transparent',
              padding: 10,
            }}>
            <Topbar backButtonPreesed={() => navigation.goBack()} />
          </View>
          {/* Slider Component */}
          {data && data.sports_centre_image ? (
            <StadiumdetailsSlider img={data} />
          ) : null}
          {data ? (
            <StadiumNameAndAddress center={data} />
          ) : (
            <Text style={{textAlign: 'center', margin: 20}}>
              No data Available
            </Text>
          )}

          <View style={{padding: 10}}>
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
          <View
            style={{
              width: Dimensions.get('window').width - 20,
              alignSelf: 'center',
              height: 250,
              marginVertical: 20,
              borderRadius: 10,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            {/* <Image
              style={{
                width: Dimensions.get('window').width - 20,
                alignSelf: 'center',
                height: 200,
                marginVertical: 20,
                borderRadius: 10,
              }}
              source={require('../assets/img/Sports/Map.png')}
            /> */}
            {data ? (
              <MapView
                style={{
                  width: Dimensions.get('window').width - 20,
                  height: 200,
                  borderRadius: 300,
                }}
                initialRegion={{
                  latitude: data.location.coordinates[1],
                  longitude: data.location.coordinates[0],
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                scrollEnabled={true}
                rotateEnabled={true}>
                <Marker
                  coordinate={{
                    latitude: data.location.coordinates[1],
                    longitude: data.location.coordinates[0],
                  }}></Marker>
              </MapView>
            ) : (
              <Text style={{textAlign: 'center', margin: 20}}>
                Location not Available
              </Text>
            )}
          </View>

          <View style={{padding: 10}}>
            <SubHeadings title="Sports Available Here" />
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
                marginTop: 10,
              }}>
              <SportsAvailabeHere id={id} />
            </View>
          </View>

          <View style={{padding: 10}}>
            <SubHeadings title="Description" />
            {data ? (
              <Text
                style={{
                  color: 'gray',

                  letterSpacing: 1,
                  fontFamily: 'ReadexPro-Ragular',
                  fontSize: 12,
                  textAlign: 'justify',
                }}>
                {data.description}
              </Text>
            ) : (
              <Text style={{textAlign: 'center', margin: 20}}>
                No data Available
              </Text>
            )}
          </View>
          <View style={{padding: 10}}>
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
          <View style={{width: '100%', margin: 10}}>
            <SubHeadings title="Our Coaches" />

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{paddingTop: 10}}>
              {couch ? (
                couch.map(c => {
                  return <OurCoaches data={c} />;
                })
              ) : (
                <Text style={{textAlign: 'center', margin: 20}}>
                  No data Available
                </Text>
              )}
            </ScrollView>
          </View>
          <View style={{padding: 10}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Question')}
              style={{
                borderColor: Colors.blue,
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                height: 43,
              }}>
              <Text
                style={{
                  color: '#0003c1',
                  fontFamily: 'ReadexPro-Bold',
                  fontSize: 14,
                }}>
                Ask A Question
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{padding: 10}}>
            <SubHeadings title="Reviews" />
            {rating != undefined &&
              rating.map(data => {
                return <Reviews data={data} />;
              })}
          </View>
        </ScrollView>

        <View style={{padding: 10}}>
          <TouchableOpacity
            //  disabled={click ? false : true}
            onPress={() => {
              navigation.navigate('Silverslotscreen', id),
                dispatch(setStadmemid(data._id));
            }}
            style={{
              backgroundColor: '#FAC516',
              padding: 10,
              borderRadius: 10,
              height: 43,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 12,
                fontFamily: 'ReadexPro-Bold',
                letterSpacing: 0.5,
                color: Colors.white,
              }}>
              Book Now
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() => navigation.navigate('Membership')}
            style={{
              backgroundColor: Colors.blue,
              padding: 10,
              borderRadius: 10,
              marginTop: 5,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 12,
                fontFamily: 'ReadexPro-Bold',
                letterSpacing: 1,
                color: Colors.white,
              }}>
              Take Subscription
            </Text>
          </TouchableOpacity> */}
        </View>
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
