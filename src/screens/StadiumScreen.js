import React from 'react'
import { Text, View, Dimensions, StyleSheet, ScrollView } from 'react-native';
import StadiumItem from '../components/StadiumItem';

// window sizes
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default function StadiumScreen() {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <StadiumItem />
            <StadiumItem />
            <StadiumItem />
            <StadiumItem />
            <StadiumItem />
            <StadiumItem />
            <StadiumItem />
            <StadiumItem />
            <StadiumItem />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: windowWidth * 0.9,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
    },

})