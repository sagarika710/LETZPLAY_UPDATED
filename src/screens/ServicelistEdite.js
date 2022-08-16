import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  import ServicelistComp from '../components/ServicelistComp/ServicelistComp';
  import Topbar from '../components/Topbar';
  import Colors from '../components/Colors';
  
  export default function ServicelistEdite({navigation}) {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
       
        <ScrollView showsVerticalScrollIndicator={false}>
          <ServicelistComp />
          <ServicelistComp />
          <ServicelistComp />
          <ServicelistComp />
          <ServicelistComp />
          <ServicelistComp />
        </ScrollView>
        <TouchableOpacity
          style={{
            backgroundColor: '#fac516',
            borderRadius: 10,
            margin: 10,
            height:43,
            justifyContent:'center'
          }}
          onPress={() => navigation.navigate('EditSlot')}
          >
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'ReadexPro-Bold', 
              letterSpacing:1,
              color: Colors.white,
            }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({});
  