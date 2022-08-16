import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, Alert, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native'

// packages import
import Icon from 'react-native-vector-icons/dist/FontAwesome';

// components import
import Successful from '../assets/img/successful.png'

// initialisations
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default function CancellationSuccessful({navigation}) {

    return (
        <View style={styles.container}>
            <View style={{ height: 100, width: 100, borderRadius: 200, backgroundColor: '#FAC516', padding: 10, marginLeft: 'auto', marginRight: 'auto' }}>
                <Icon style={{ color: 'white' }} name='check' size={80} />
            </View>
            <Text style={{  fontFamily: 'ReadexPro-Bold', fontSize: 18, color: '#000000', marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }}>Cancellation Successful!</Text>
            <Text style={{ fontFamily: 'ReadexPro-Regular', fontSize: 10, color: '#717171', marginLeft: 'auto', marginRight: 'auto', marginTop: 10, width: windowWidth * 0.8, textAlign: 'center' }}>

                Your booking has been successfully cancelled. Refund (If any) will be processed within 24hours.  </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Tab')} style={{ height: 43, width: 121, backgroundColor: '#FAC516', borderRadius: 5, marginLeft: 'auto', marginRight: 'auto', marginTop: 100 }}>
                <Text style={{ textAlign: 'center', marginTop: 12, fontFamily: 'ReadexPro-Bold', color: '#ffffff', fontSize: 12 }}>Ok, got it</Text>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: windowHeight,
        flexDirection: 'column',
        justifyContent: 'center',
      
        backgroundColor:'white'
    },

    textList: {
        color: 'black'
    }
})