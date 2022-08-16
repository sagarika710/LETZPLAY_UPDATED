import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Topbar from '../components/Topbar';
import DateSlot from '../components/DateSlot';
import TimeSlot from '../components/TimeSlot';
import Datepicker from '../components/Datepicker';
import Colors from '../components/Colors';
import {TextInput} from 'react-native-gesture-handler';
import 'moment';
import {useDispatch, useSelector} from 'react-redux';
import {
  getId,
  getService,
  getSlotid,
  getSportid,
  getStadid,
  setSlotdate,
  setSlottime,
  setSlotid,
  getUser,
  setSlotsBySportsCentre,
  getSlottime,
} from '../../Redux/slices/userSlice';
import {apicaller} from './api';

export default function Membership_slot({navigation}) {
  const Slotid = useSelector(getSlotid);
  const Userid = useSelector(getId);
  const service = useSelector(getService);
  const category = useSelector(getSportid);
  const stad = useSelector(getStadid);
  const dispatch = useDispatch();
  const date = [
    {id: 1, date: '27', day: 'MON'},
    {id: 2, date: '28', day: 'TUE'},
    {id: 3, date: '29', day: 'WED'},
    {id: 4, date: '29', day: 'THU'},
    {id: 3, date: '29', day: 'WED'},
    {id: 4, date: '29', day: 'THU'},
    {id: 3, date: '29', day: 'WED'},
    {id: 4, date: '29', day: 'THU'},
  ];
  var [slot, setSlot] = useState([]);
  const timeslots = [
    {time: '07.30AM-09.30AM'},
    {time: '08.30AM-09.30AM'},
    {time: '09.30AM-09.30AM'},
    {time: '10.30AM-09.30AM'},
    {time: '11.30AM-09.30AM'},
    {time: '12.30AM-09.30AM'},
    {time: '01.30AM-09.30AM'},
    {time: '02.30AM-09.30AM'},
    {time: '03.30AM-09.30AM'},
  ];
  const [selected, setSelected] = useState('');
  const [slots, setSlots] = useState([]);
  const [timeslot, setTimeslot] = useState([]);
  const [pressed, setIsPressed] = useState('');
  const services = useSelector(getService);
  const slotcheck = useSelector(getSlottime);
  console.log('okm', slotcheck);
  //get slot
  useEffect(() => {
    dispatch(setSlottime(false));
    apicaller(`getslots?service_id=${services}`, null, 'get', null)
      //apicaller(`getslots?service_id=62b9ce6a43bae334572757f7`, null, 'get', null)
      .then(res => {
        console.log('slot', res.data);
        setSlots(res.data);
        console.log('hhhhhhhhh', slots);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function time(dates) {
    slots.map(item => {
      if (item.slot_date == dates) {
        setTimeslot(item.slots);
      }
    });
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 10}}>
      <View>
        <Text
          style={{
            color: '#222',
            fontSize: 14,
            fontFamily: 'ReadexPro-Bold',
            letterSpacing: 0.5,
          }}>
          Select Your Slot
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {slots.map(item => (
            // <DateSlot date={item.slot_date.slice(5, 7)} day={item.day} />
            <TouchableOpacity
              onPress={() => {
                setSelected(item._id);
                time(item.slot_date);
                dispatch(setSlotdate(item.slot_date));
              }}
              style={{
                marginTop: 15,
                borderWidth: 1,
                padding: 5,
                borderColor: selected == item._id ? '#FAC516' : '#9C9C9C',
                borderRadius: 10,
                marginRight: 10,
                width: 100,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#222',
                  fontFamily: 'ReadexPro-Bold',
                  letterSpacing: 1,
                  fontSize: 12,
                }}>
                {item.slot_date}
              </Text>
              {/* <Text
                  style={{
                    color: selected ? '#FAC516' : '#9C9C9C',
                    fontFamily: 'ReadexPro-Bold',
                    letterSpacing: 1,
                    fontSize: 10,
                  }}>
                  {item.day}
                </Text> */}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView style={{}}>
        <Text
          style={{
            color: '#222',
            fontFamily: 'ReadexPro-Bold',
            letterSpacing: 0.5,
            fontSize: 14,
            marginTop: 30,
          }}>
          Select Time
        </Text>
        {timeslot && (
          <View
            style={{
              marginTop: 5,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
            }}>
            {timeslot.map(item => {
              console.log(item);
              return (
                // <TimeSlot
                //   // slot={item}
                //   //setSelectedSlot={e => setSelectedSlot(e)}
                //   //key={item.time}
                //   id={item._id}
                //   stime={item.slot_start_time}
                //   etime={item.slot_end_time}
                //   seat={item.slot_capacity}
                // />
                <TouchableOpacity
                  onPress={() => {
                    setIsPressed(item._id);
                    dispatch(
                      setSlottime(
                        item.slot_start_time + '-' + item.slot_end_time,
                      ),
                    );

                    dispatch(setSlotid(item._id));
                  }}
                  style={{
                    padding: 5,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: pressed == item._id ? '#FAC516' : '#9C9C9C',
                    borderWidth: 1,
                    borderRadius: 10,
                    marginVertical: 10,
                    height: 50,
                  }}>
                  <View>
                    <Text
                      numberOfLines={1}
                      adjustsFontSizeToFit
                      style={{
                        color: 'black',
                        fontFamily: 'ReadexPro-Bold',

                        fontSize: 10,
                      }}>
                      {item.slot_start_time} - {item.slot_end_time}
                    </Text>
                    <Text
                      numberOfLines={1}
                      adjustsFontSizeToFit
                      style={{
                        color: 'black',
                        fontFamily: 'ReadexPro-Bold',
                        alignSelf: 'center',
                        fontSize: 10,
                      }}>
                      Avaliable : {item.slot_capacity}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </ScrollView>

      <TouchableOpacity
        disabled={!slotcheck}
        onPress={() => {
          navigation.navigate('BookingScreen2');
        }}
        style={{
          backgroundColor: slotcheck ? '#fac516' : '#E8DBB1',
          height: 43,
          fontFamily: 'ReadexPro-Bold',
          letterSpacing: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 12,
            color: Colors.white,
            fontFamily: 'ReadexPro-Bold',
            letterSpacing: 1,
          }}>
          Book Now
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
