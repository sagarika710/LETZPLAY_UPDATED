import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState} from 'react';
  import Topbar from '../components/Topbar';
  import DateSlot from '../components/DateSlot';
  import TimeSlot from '../components/TimeSlot';
  import Datepicker from '../components/Datepicker';
  import Colors from '../components/Colors';
  import { TextInput } from 'react-native-gesture-handler';
  
  export default function EditSlot({navigation}) {
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
      <View style={{flex: 1, backgroundColor: 'white', padding: 10}}>
        <Topbar />
        <View style={{marginTop: 10}}>
          <Text style={{color: '#222', fontSize: 14,fontFamily: 'ReadexPro-Bold', 
          letterSpacing:.5,}}>
            Select Your Slot
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {date.map(item => (
              <DateSlot date={item.date} day={item.day} />
            ))}
          </ScrollView>
        </View>
  
        <ScrollView style={{marginTop: 50}}>
          <Text style={{color: '#222', fontFamily: 'ReadexPro-Bold', 
          letterSpacing:.5,fontSize:14}}>
            Select Time
          </Text>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
              <TextInput placeholder='Start Time' style={{borderColor:'#9c9c9c',paddingLeft:10,borderWidth:1,height:45,width:150,borderRadius:10,fontFamily: 'ReadexPro-Bold',fontSize:12}}/>
              <Text>___</Text>
              <TextInput placeholder='End Time' style={{borderColor:'#9c9c9c',paddingLeft:10,borderWidth:1,height:45,width:150,borderRadius:10,fontFamily: 'ReadexPro-Bold',fontSize:12}}/>
              </View>
              <Text style={{fontFamily: 'ReadexPro-Bold', 
          letterSpacing:1,
          alignSelf:'center',
          marginTop:20,
          fontSize:12,
          
          
          
          }}>OR</Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
            {timeslots.map(item => (
              <TimeSlot key={item.time} time={item.time} />
            ))}
          </View>
        </ScrollView>
        <TouchableOpacity  onPress={() => navigation.navigate('Tab')}
          style={{backgroundColor: '#fac516',height:43,fontFamily: 'ReadexPro-Bold', 
          letterSpacing:1, justifyContent:'center',alignItems:'center',borderRadius: 10}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              color: Colors.white,
              fontFamily: 'ReadexPro-Bold', 
          letterSpacing:1
            }}>
            Save
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cancel')}
          style={{height:43,fontFamily: 'ReadexPro-Bold', 
          letterSpacing:1, justifyContent:'center',alignItems:'center',borderRadius: 10}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              color: Colors.blue,
              fontFamily: 'ReadexPro-Bold', 
          letterSpacing:1
            }}>
            Cancel Your Booking
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({});
  