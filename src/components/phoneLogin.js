import React, { useState } from 'react';
import { Button, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';



/**
 * First on handle submit signInWithPhoneNumber(phoneNumber) runs
 It saves the result in state and waits for OTP
 When the user enters OTP  async function confirmCode() runs in which 
 we pass the otp code which then returns a success if otp is correct
 *  */
function PhoneSignIn() {
    // If null, no SMS has been sent
    const [confirm, setConfirm] = useState(null);

    const [code, setCode] = useState('');

    // Handle the button press
    async function signInWithPhoneNumber(phoneNumber) {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
    }

    async function confirmCode() {
        try {
            // code is OTP password
            let result = await confirm.confirm(code);
            console.log("OTP verified ", result);
        } catch (error) {
            console.log('Invalid code.');
        }
    }

    if (!confirm) {
        return (
            <Button
                title="Phone Number Sign In"
                onPress={() => signInWithPhoneNumber('+1 650-555-3434')}
            />
        );
    }

    return (
        <>
            <TextInput value={code} onChangeText={text => setCode(text)} />
            <Button title="Confirm Code" onPress={() => confirmCode()} />
        </>
    );
}