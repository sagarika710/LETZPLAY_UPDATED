import {
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import React, { useRef } from 'react';
import Icons from 'react-native-vector-icons/Feather';
// import RBSheet from 'react-native-raw-bottom-sheet';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { useNavigation } from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;

export default function BookingScreenBottomSheet(props) {
    const refRBSheet = useRef();
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, marginHorizontal: 20 }}>
            <View style={styles.box1}>

                <View style={styles.textAreaContainer} >
                    <Icons name="user" size={20} color='#9C9C9C' />
                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholder="Full Name"
                        placeholderTextColor="#9C9C9C"
                        multiline={true}
                    />
                </View>
                <View style={styles.textAreaContainer} >
                    <Icons name="mail" size={20} color='#9C9C9C' />
                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholder="Email Id"
                        placeholderTextColor="#9C9C9C"
                        multiline={true}
                    />
                </View>
                <View style={styles.textAreaContainer} >
                    <Icons name="smartphone" size={20} color='#9C9C9C' />
                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholder="Mobile Number"
                        placeholderTextColor="#9C9C9C"
                        multiline={true}
                    />
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Bookingscreen')}>
                    <Text style={styles.btntext}>Add Member</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    textAreaContainer: {
        flexDirection: 'row',
        borderColor: '#9C9C9C',
        borderBottomWidth: 1,
        alignItems: 'center',
        marginVertical: 15,


    },
    textArea: {
        marginHorizontal: 5,
        width: 200,
        fontSize: 14,
        fontFamily: 'ReadexPro-Regular'
    },
    btn: {
        height: 43,
        backgroundColor: '#FAC516',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        fontFamily: 'ReadexPro-Bold'
    },
    btntext: {
        color: '#fff',
        fontSize: 12,
        fontFamily: 'ReadexPro-Bold'

    },
   

});
