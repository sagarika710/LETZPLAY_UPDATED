import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
import { useNavigation } from '@react-navigation/native';

export default function Modal() {
    const navigation = useNavigation();  
    return (
        <View>
            <AwesomeAlert
                show={true}
                showProgress={false}
                title="Are You Sure Want to Cancel"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="No"
                confirmText="Yes"
                confirmButtonColor="#FAC516"
                cancelButtonColor="#292A2E"
                onCancelPressed={() => {
                    navigation.navigate('BookingManage');
                }}
                onConfirmPressed={() => {
                    navigation.navigate('CancellationSuccessful');
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    button: {
        margin: 10,
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 5,
        backgroundColor: '#AEDEF4',
    },
    text: {
        color: '#fff',
        fontSize: 15,
    },
});
