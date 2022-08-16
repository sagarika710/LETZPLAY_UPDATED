import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import React from 'react';
import dir from '../assets/img/direction.png';

const windowWidth = Dimensions.get('window').width;

// packages import
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function SlotBookingDetails() {
    return (
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <View style={styles.container2}>
                <View style={styles.cv1}>
                    <Text style={styles.cl1}>Your Slot Booked</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text
                        style={{
                            flex: 1,
                            color: '#292A2E',
                            fontWeight: '400',
                            fontSize: 10,
                            letterSpacing: 10 * 0.2
                        }}>
                        SIDDHESHWAR PANDA
                    </Text>
                    <Text style={{ fontSize: 10, fontWeight: '400', letterSpacing: 10 * 0.2 }}>Cricket</Text>
                </View>
                <View
                    style={{
                        marginTop: 13,
                        paddingBottom: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#DFDDDD',
                    }}>
                    <Text style={{
                        color: '#717171',
                        fontWeight: '400',
                        fontSize: 10,
                        letterSpacing: 10 * 0.2
                    }}>siddheshwar.2307@gmail.com</Text>
                    <Text style={{
                        color: '#717171',
                        fontWeight: '400',
                        fontSize: 10,
                        letterSpacing: 10 * 0.2
                    }}>+91 8917358425</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                    }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginTop: 20, fontSize: 10, width: windowWidth * 0.65, letterSpacing: 10 * 0.2, color: '#717171' }}>
                            Aarka Sports Center, Near Bigbazar,Patia, INFO City
                            Road,Bhubaneswar, Pin - 745321
                        </Text>
                    </View>
                    <TouchableOpacity>
                        <Image style={styles.dir} source={dir} />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: 13,
                        paddingBottom: 10,
                        width: windowWidth * 0.8
                    }}>
                    <Text style={{ width: windowWidth * 0.57, fontSize: 10, letterSpacing: 10 * 0.2, color: '#717171' }}>Couch Name : Shubham Mohapatra</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: 13,
                        paddingBottom: 10,
                        justifyContent: 'space-between',
                        width: windowWidth * 0.8
                    }}>
                    <Text style={{ width: windowWidth * 0.57, fontSize: 10, letterSpacing: 10 * 0.2, color: '#717171' }}>09.30 AM - 11.30 AM</Text>
                    <Text style={{ width: windowWidth * 0.57, fontSize: 10, letterSpacing: 10 * 0.2, color: '#717171' }}>Date: 27th Jan 2021</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container1: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E7E7E7',
        flexDirection: 'row',
    },
    bookingid: { color: '#0003C1', fontWeight: '500', fontSize: 15 },
    container2: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E7E7E7',
    },
    cv1: {
        borderBottomWidth: 1,
        borderBottomColor: '#DFDDDD',
        paddingBottom: 12,
    },
    cl1: { color: '#222222', fontWeight: '600', fontSize: 12, letterSpacing: 12 * 0.2 },
    dir: { height: 30, width: 30, marginTop: 20 },
});
