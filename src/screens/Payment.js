import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, Alert, Dimensions, ScrollView, Image, TouchableOpacity, Button } from 'react-native'

export default function Payment({navigation}) {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}} >
            <TouchableOpacity   onPress={() => navigation.navigate('BookingSuccess')}>
          <Text style={{fontSize:25,fontFamily: 'ReadexPro-Bold'}}>Payment</Text>
          </TouchableOpacity>
        </View >
    );
};




