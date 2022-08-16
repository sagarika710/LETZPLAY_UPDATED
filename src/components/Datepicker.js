import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import CalendarPicker from 'react-native-calendar-picker';

export default function Datepicker(props) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const startDate = selectedStartDate
    ? selectedStartDate.format('DD-MM-YYYY').toString()
    : 'Start Date';
  const endDate = selectedEndDate
    ? selectedEndDate.format('DD-MM-YYYY').toString()
    : 'End Date';

  const [startOpen, setStartOpen] = useState(false);
  const [endOpen, setEndOpen] = useState(false);
  function send() {
    setStartOpen(false);
    console.log(startDate);
  }
  useEffect(() => {
    // alert(startDate);
    props.Passstart(startDate);
    setStartOpen(false);
  }, [selectedStartDate]);
  useEffect(() => {
    // alert(endOpen);
    setEndOpen(false);
    props.Passend(endDate);
  }, [selectedEndDate]);
  return (
    <View
      style={{
        marginTop: 10,
      }}>
      {/* <View style={{flexDirection: 'row', marginBottom: 10}}>
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
      </View> */}
      <Text style={{color: 'black', fontSize: 16, fontWeight: '600'}}>
        Select Date
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <TouchableOpacity
          onPress={() => {
            setStartOpen(!startOpen), setEndOpen(false);
          }}
          style={{
            width: windowWidth * 0.4,
            borderWidth: 1,
            borderColor: '#9C9C9C',
            borderRadius: 10,
            padding: 5,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: '#000000',
              letterSpacing: 2,
              textAlign: 'center',
              padding: 5,
            }}>
            {startDate}
          </Text>
        </TouchableOpacity>
        <Text style={{padding: 10}}>-</Text>
        <TouchableOpacity
          onPress={() => {
            setEndOpen(!endOpen), setStartOpen(false);
          }}
          style={{
            width: windowWidth * 0.4,
            borderWidth: 1,
            borderColor: '#9C9C9C',

            borderRadius: 10,
            padding: 5,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: '#000000',
              letterSpacing: 2,
              textAlign: 'center',
              padding: 5,
            }}>
            {endDate}
          </Text>
        </TouchableOpacity>
      </View>

      {startOpen === true ? (
        <CalendarPicker onDateChange={setSelectedStartDate} />
      ) : null}

      {endOpen === true ? (
        <CalendarPicker onDateChange={setSelectedEndDate} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({});
