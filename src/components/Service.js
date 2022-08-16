import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native'

// packages import
import Icon from 'react-native-vector-icons/dist/FontAwesome';

// initialisations
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default function Service(props) {
    return (
        <TouchableOpacity style={styles.heroCarousel}>
            <Text style={styles.btnText}>
                <Icon name='location-arrow' size={20} />
            </Text>
            <Text style={styles.sportsname}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    heroCarousel: {
        width: 107,
        height: 49,
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    sportsimage: {
        height: 33,
        width: 33,
        borderRadius: 118,
        backgroundColor: '#fff4f0',
    },
    imgcontainer: {
        width: 33,
        height: 33,
    },
    sportsname: {
        fontSize: 12,
        fontWeight: '600',
        letterSpacing: 0.07,
        color: '#717171',
        marginTop: 5
    }

})