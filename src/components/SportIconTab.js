import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native'

import SportsImage from '../assets/img/cricket.png'
import Colors from './Colors'

// initialisations
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default function SportIconTab(props) {
    return (
        <TouchableOpacity style={styles.heroCarousel}>
            <View style={styles.imgcontainer}>
                <Image
                    style={styles.sportsimage}
                    source={SportsImage}
                >
                </Image>
            </View>
            <Text style={styles.sportsname}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    heroCarousel: {
        width: 107,
        height: 45,
        // backgroundColor: Colors.white,
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    sportsimage: {
        height: 33,
        width: 33,
        borderRadius: 118,
        // backgroundColor: Colors.white,
        // padding: 5
    },
    imgcontainer: {
        // marginLeft: 33,
        width: 33,
        height: 33,
    },
    sportsname: {
        fontSize: 12,
        fontWeight: '600',
        letterSpacing: 0.07,
        color: '#717171',
        // width: 81,
        marginTop: 5
    }

})