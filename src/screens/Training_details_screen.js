import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Training_details from '../components/Training_details';

const Training_details_screen = () => {
    return (
        <View style={styles.contrainer}>
            <Training_details/>
        </View>
    );
};
export default Training_details_screen


const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
        backgroundColor: 'white',
    },
   

})