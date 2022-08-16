/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 
 import {
   Button,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 import RazorpayCheckout from 'react-native-razorpay';

 const Rezorpaybtn = () => {
  
 
  
   return (
     <SafeAreaView >
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         >
         <Header />
         <View
           style={{
             backgroundColor: isDarkMode ? Colors.black : Colors.white,
           }}>
           <Button
             title={'Pay with Razorpay'}
             onPress={() => {
               var options = {
                 description: 'Credits towards consultation',
                 image: 'https://i.imgur.com/3g7nmJC.png',
                 currency: 'INR',
                 key: 'rzp_test_1DP5mmOlF5G5ag', // Your api key
                 amount: '5000',
                 name: 'foo',
                 prefill: {
                   email: 'void@razorpay.com',
                   contact: '9191919191',
                   name: 'Razorpay Software',
                 },
                 theme: {color: '#F37254'},
               };
               RazorpayCheckout.open(options)
                 .then(data => {
                   // handle success
                   alert(`Success: ${data.razorpay_payment_id}`);
                 })
                 .catch(error => {
                   // handle failure
                   alert(`Error: ${error.code} | ${error.description}`);
                 });
             }}
           />
         </View>
       </ScrollView>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default Rezorpaybtn;