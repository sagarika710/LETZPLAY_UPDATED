import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Topbar from '../../components/Topbar';
import TimeSlot from '../../components/TimeSlot';
import Datepicker from '../../components/Datepicker';
import {apicaller} from '../api';
import {
  setLoc,
  getToken,
  getId,
  setLocationOf,
  setStadmemid,
  getstadmemid,
} from '../../../Redux/slices/userSlice';
import {useSelector, useDispatch} from 'react-redux';
const mWidth = Dimensions.get('screen').width;

export default function SilverSlotScreen() {
  const [selectedtype, setSelectedtype] = useState('Playing');
  const [selectedgame, setSelectedgame] = useState('');
  const [selected, setSelected] = useState('');
  const [btype, setBtype] = useState('');
  const [dtype, setDtype] = useState('');
  const dispatch = useDispatch();
  const [pressed, setIsPressed] = useState();
  const [type, setType] = useState('');
  const [playdata, setPlaydata] = useState('');
  const [traindata, setTraindata] = useState('');
  const [display, setDisplay] = useState('');
  const [timeslots, setTimeslots] = useState('');
  // const timeslots = [
  //   {id: 1, time: '07.30AM-09.30AM'},
  //   {id: 2, time: '08.30AM-09.30AM'},
  //   {id: 3, time: '09.30AM-09.30AM'},
  //   {id: 4, time: '10.30AM-09.30AM'},
  //   {id: 5, time: '11.30AM-09.30AM'},
  //   {id: 6, time: '12.30AM-09.30AM'},
  //   {id: 7, time: '01.30AM-09.30AM'},
  //   {id: 8, time: '02.30AM-09.30AM'},
  //   {id: 9, time: '03.30AM-09.30AM'},
  // ];
  const Id = useSelector(getId);
  const Token = useSelector(getToken);
  const stdmemid = useSelector(getstadmemid);
  useEffect(() => {
    play();
  }, []);

  function play() {
    setBtype('playing');
    var axios = require('axios');

    var config = {
      method: 'get',
      url: `http://15.207.26.74:8000/api/get-slot-catId?sports_center_id=${stdmemid}&booking_type=playing`,
      headers: {},
    };
    axios(config)
      .then(function (response) {
        console.log('play', JSON.stringify(response.data));
        setPlaydata(response.data);
        setSelectedtype('Playing');
        slot();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function train() {
    setBtype('traning');
    var axios = require('axios');

    var config = {
      method: 'get',
      url: `http://15.207.26.74:8000/api/get-slot-catId?sports_center_id=${stdmemid}&booking_type=traning`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log('train', JSON.stringify(response.data));
        setTraindata(response.data);
        setSelectedtype('train');
        slot();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function slot() {
    console.log(
      `http://15.207.26.74:8000/api/getSlotsByCategoryId?booking_type=${btype}&sports_category_id=${selectedgame}&slot_date=${selected}&sports_center_id=${stdmemid}`,
    );
    var axios = require('axios');

    var config = {
      method: 'get',
      url: `http://15.207.26.74:8000/api/getSlotsByCategoryId?booking_type=${btype}&sports_category_id=${selectedgame}&slot_date=${selected}&sports_center_id=${stdmemid}`,
      headers: {},
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setTimeslots(response.data[0].slots);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  console.log('slotes', timeslots);
  function booking() {
    var axios = require('axios');
    var data = JSON.stringify({
      user: Id,
      sports_category_id: selectedgame,
      sports_center_id: stdmemid,
      booking_time: '01:10 PM',
      slot_id: pressed,
    });

    var config = {
      method: 'post',
      url: 'localhost:8000/api/addMembershipbookings',
      headers: {
        Authorization: `Bearar ${Token}`,
        'Content-Type': 'application/json',
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
  const Passstart = Passstart => {
    alert('selver', Passstart);
  };
  const Passend = Passend => {
    alert('gold', Passend);
  };
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white', padding: 10}}>
      <Topbar backButtonPreesed={() => alert('Backpressed')} />
      <Text
        style={{
          color: 'black',
          fontWeight: '600',
          fontSize: 17,
          marginTop: 40,
        }}>
        Booking Type
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <TouchableOpacity
          onPress={() => {
            setSelectedtype('Playing'), play();
          }}
          style={{
            width: '48%',
            backgroundColor: selectedtype === 'Playing' ? '#FAC516' : '#fff',
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: selectedtype === 'Playing' ? '#Fff' : '#717171',
              fontSize: 18,
              fontWeight: '700',
            }}>
            Playing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedtype('Traning'), train();
          }}
          style={{
            backgroundColor: selectedtype === 'Traning' ? '#FAC516' : '#fff',
            borderWidth: 1,
            width: '48%',
            padding: 10,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: selectedtype === 'Traning' ? '#fff' : '#717171',
              textAlign: 'center',
              fontSize: 18,
              fontWeight: '700',
            }}>
            Traning
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 20}}>
        <Text
          style={{
            color: 'black',
            fontWeight: '600',
            fontSize: 17,
            marginTop: 20,
          }}>
          Select sport
        </Text>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          {selectedtype == 'Playing'
            ? playdata
              ? playdata?.map(item => (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedgame(item._id);
                      setType('show');
                    }}
                    style={{
                      width: mWidth * 0.3,
                      alignSelf: 'center',
                      alignItems: 'center',
                      padding: 10,
                      justifyContent: 'center',
                      flexDirection: 'row',
                      borderColor:
                        selectedgame == item._id ? '#FAC516' : '#9C9C9C',
                      borderWidth: 1,
                      borderRadius: 10,
                      marginBottom: 10,
                    }}>
                    <Text
                      key={item._id}
                      style={{
                        color: selectedgame == item._id ? '#FAC516' : '#222222',
                        fontSize: 15,

                        textAlign: 'center',
                        fontWeight: '700',
                      }}>
                      {item.category_name}
                    </Text>
                  </TouchableOpacity>
                  // <TimeSlot key={item.id} time={item.time} />
                ))
              : null
            : traindata
            ? traindata?.map(item => (
                <TouchableOpacity
                  onPress={() => {
                    setIsPressed(item._id);
                    setType('show');
                  }}
                  style={{
                    width: mWidth * 0.3,
                    alignSelf: 'center',
                    alignItems: 'center',
                    padding: 10,
                    justifyContent: 'center',
                    flexDirection: 'row',
                    borderColor: pressed == item._id ? '#FAC516' : '#9C9C9C',
                    borderWidth: 1,
                    borderRadius: 10,
                    marginBottom: 10,
                  }}>
                  <Text
                    key={item.id}
                    style={{
                      color: pressed == item._id ? '#FAC516' : '#222222',
                      fontSize: 15,

                      textAlign: 'center',
                      fontWeight: '700',
                    }}>
                    {item.category_name}
                  </Text>
                </TouchableOpacity>
              ))
            : null}
        </View>
      </View>
      {type == 'show' && (
        <>
          <Text
            style={{
              color: 'black',
              fontWeight: '600',
              fontSize: 17,
              marginTop: 20,
            }}>
            Date Type
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <TouchableOpacity
              onPress={() => {
                setSelected('today'), setDisplay('time');
                slot();
              }}
              style={{
                width: '30%',
                ba: selected === 'today' ? '#FAC516' : '#EBEAEA',
                borderWidth: 1,
                padding: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: selected === 'today' ? '#FAC516' : '#717171',
                  fontSize: 18,
                  fontWeight: '700',
                }}>
                Daily
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSelected('weekly'), setDisplay('time');
              }}
              style={{
                borderColor: selected === 'weekly' ? '#FAC516' : '#EBEAEA',
                borderWidth: 1,
                width: '30%',
                padding: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: selected === 'weekly' ? '#FAC516' : '#717171',
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: '700',
                }}>
                Weekly
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSelected('custom');
                setDisplay('time');
              }}
              style={{
                borderColor: selected === 'custom' ? '#FAC516' : '#EBEAEA',
                borderWidth: 1,
                width: '30%',
                padding: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: selected === 'custom' ? '#FAC516' : '#717171',
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: '700',
                }}>
                Custom
              </Text>
            </TouchableOpacity>
          </View>
          {selected === 'custom' ? (
            <Datepicker Passstart={Passstart} Passend={Passend} />
          ) : null}
        </>
      )}
      {display == 'time' && (
        <>
          <View style={{marginTop: 20}}>
            <Text
              style={{
                color: 'black',
                fontWeight: '600',
                fontSize: 17,
                marginTop: 20,
              }}>
              Select Time
            </Text>

            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              {/* {timeslots?.map(item => (
                <TouchableOpacity
                  onPress={() => {
                    setIsPressed(item._id);
                  }}
                  style={{
                    width: mWidth * 0.3,
                    alignSelf: 'center',
                    alignItems: 'center',
                    padding: 10,

                    flexDirection: 'row',
                    borderColor: pressed == item._id ? '#FAC516' : '#9C9C9C',
                    borderWidth: 1,
                    borderRadius: 10,
                    marginBottom: 10,
                  }}>
                  <Text
                    key={item._id}
                    style={{
                      color: pressed == item._id ? '#FAC516' : '#222222',
                      fontSize: 10,

                      textAlign: 'center',
                      fontWeight: '700',
                    }}>
                    {item.slot_start_time} - {item.slot_start_time}
                  </Text>
                </TouchableOpacity>
              ))} */}
            </View>
          </View>
        </>
      )}

      <TouchableOpacity
        style={{
          marginTop: 30,
          backgroundColor: pressed && selected ? '#FAC516' : '#FDDA67',

          borderRadius: 10,
        }}>
        <Text
          style={{
            textAlign: 'center',
            padding: 10,

            fontSize: 20,
            color: '#ffffff',
            fontWeight: '700',
          }}>
          Book Now
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
