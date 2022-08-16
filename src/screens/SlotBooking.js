import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native';

// packages import
import Icon from 'react-native-vector-icons/dist/FontAwesome';

// initialisations
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// import Badminton from '../assets/img/gameicon.png';
// import Cricket from '../assets/img/cricket.png';
// import Tennis from '../assets/img/gameicon.png';
// import Gym from '../assets/img/gym.png';
// import Football from '../assets/img/football.png';

// import GameIcon from '../components/GameIcon';
import CalendarPicker from 'react-native-calendar-picker';

import TimeSlot from '../components/TimeSlot';

export default function SlotBooking() {
  const [datetype, setDateType] = useState('daily');

  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const startDate = selectedStartDate
    ? selectedStartDate.format('YYYY-MM-DD').toString()
    : '';
  const endDate = selectedEndDate
    ? selectedEndDate.format('YYYY-MM-DD').toString()
    : '';

  const [startOpen, setStartOpen] = useState(false);
  const [endOpen, setEndOpen] = useState(false);

  const gamenums = [
    {name: 'Cricket', icon: Cricket},
    {name: 'Tennis', icon: Tennis},
    {name: 'Football', icon: Football},
    {name: 'Gym', icon: Gym},
    {name: 'Badminton', icon: Badminton},
    {name: 'Kabaddi', icon: Badminton},
  ];

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

  return (
    <View style={styles.container}>
      <View
        style={{
          width: windowWidth * 0.9,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: '#000000',
            marginBottom: 20,
          }}>
          Select Your Slots
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            width: windowWidth * 0.9,
          }}>
          {gamenums.map(item => (
            <GameIcon key={item.name} name={item.name} icon={item.icon} />
          ))}
        </View>
      </View>

      <View
        style={{
          width: windowWidth * 0.9,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: '#000000',
            marginBottom: 20,
          }}>
          Date Type
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            width: windowWidth * 0.9,
          }}>
          <TouchableOpacity
            onPress={() => {
              setDateType('daily');
            }}
            style={{
              width: windowWidth * 0.25,
              height: 45,
              borderWidth: 1,
              borderColor: datetype === 'daily' ? '#FAC516' : '#EBEAEA',
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '500',
                color: datetype === 'daily' ? '#FAC516' : '#717171',
                textAlign: 'center',
                textAlignVertical: 'center',
                marginTop: 9,
              }}>
              Daily
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setDateType('weekly');
            }}
            style={{
              width: windowWidth * 0.25,
              height: 45,
              borderWidth: 1,
              borderColor: datetype === 'weekly' ? '#FAC516' : '#EBEAEA',
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '500',
                color: datetype === 'weekly' ? '#FAC516' : '#717171',
                textAlign: 'center',
                textAlignVertical: 'center',
                marginTop: 9,
              }}>
              Weekly
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setDateType('customize');
            }}
            style={{
              width: windowWidth * 0.25,
              height: 45,
              borderWidth: 1,
              borderColor: datetype === 'customize' ? '#FAC516' : '#EBEAEA',
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '500',
                color: datetype === 'customize' ? '#FAC516' : '#717171',
                textAlign: 'center',
                textAlignVertical: 'center',
                marginTop: 9,
              }}>
              Customize
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          display: datetype === 'customize' ? 'flex' : 'none',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          width: windowWidth * 0.9,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: '#000000',
              marginRight: 75,
              marginLeft: 2,
            }}>
            Start Date
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: '#000000',
              marginRight: 75,
              marginLeft: 0,
            }}>
            End Date
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              setStartOpen(!startOpen), setEndOpen(false);
            }}
            style={{
              width: windowWidth * 0.3,
              borderWidth: 1,
              borderColor: '#9C9C9C',
              height: 30,
              borderRadius: 10,
              marginRight: 20,
              padding: 5,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                color: '#000000',
                letterSpacing: 2,
              }}>
              {startDate}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setEndOpen(!endOpen), setStartOpen(false);
            }}
            style={{
              width: windowWidth * 0.3,
              borderWidth: 1,
              borderColor: '#9C9C9C',
              height: 30,
              borderRadius: 10,
              padding: 5,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                color: '#000000',
                letterSpacing: 2,
              }}>
              {endDate}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{display: startOpen === true ? 'flex' : 'none'}}>
          <CalendarPicker onDateChange={setSelectedStartDate} />
        </View>
        <View style={{display: endOpen === true ? 'flex' : 'none'}}>
          <CalendarPicker onDateChange={setSelectedEndDate} />
        </View>
      </View>

      <View
        style={{
          width: windowWidth * 0.9,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: '#000000',
            marginBottom: 20,
          }}>
          Select Time
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          {timeslots.map(item => (
            <TimeSlot key={item.time} time={item.time} />
          ))}
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {}}
        style={{
          width: windowWidth * 0.9,
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor: '#FAC516',
          height: 43,
          borderRadius: 10,
          marginBottom: windowHeight * 0.1,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 14,
            fontWeight: '600',
            color: '#ffffff',
            marginTop: 10,
          }}>
          Book Now
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: windowHeight,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
});
