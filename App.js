import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import Bottomtab from './src/components/Tab/Bottomtab';
import Home from './src/screens/Home_screen';
import Colors from './src/components/Colors';
import Notification from './src/screens/Notification_screen';
import Question from './src/screens/Ask_question_screen';
import Wishlist from './src/screens/Wishlist_screen';
import All_sports from './src/screens/All_sports_screen';
import Training_details from './src/screens/Training_details_screen';
import Goldmembership_bookingdetails from './src/screens/Goldmembership_bookingdetails_screen';
import Bookinghistory from './src/screens/Bookinghistory_screen';
import Ragistration from './src/screens/Registtration';
import Auth from './src/screens/Auth_screen';
import Location from './src/screens/Location';
import VerificationScreen from './src/screens/Otp_screen';
import Stadiumlist from './src/screens/Stadiumlist';
import Stadiumdetails from './src/screens/Stadiumdetails';
import Stadiumlistmember from './src/screens/Stadiumlistmember';
import Stadiumdetailsmember from './src/screens/Stadiumdetailsmember';
import Servicelist from './src/screens/Servicelist';
import Servicedetails from './src/screens/Servicedetails';
import Shop from './src/screens/Shop';
import SlotBooked from './src/screens/Silver/SlotBooked';
import BookingScreen from './src/screens/BookingScreen';
import SlotScreen from './src/screens/SlotScreen';
import SilverSlotScreen from './src/screens/Silver/SilverSlotScreen';
import StadiumScreen from './src/screens/StadiumScreen';

import BookingSuccessful from './src/screens/BookingSuccessful';
import CancellationSuccessful from './src/screens/CancellationSuccessful';
import SliderImageView from './src/components/Servicedetails/SliderImageView';
import BookingScreen2 from './src/screens/BookingScreen2';
import Modal from './src/components/Modal';
import SlotBooking from './src/screens/SlotBooking';
import SlotBookingDetails from './src/screens/SlotBookingDetails';
import Bookingdetails from './src/screens/BookingScreen';
import EditSlotScreen from './src/screens/EditSlotScreen';
import Support from './src/screens/Support';
import LocationSearch from './src/screens/LocationSearch';
import Profile from './src/screens/Profile';
import Payment from './src/screens/Payment';
import BookingManage from './src/screens/BookingManage';
import EditSlot from './src/screens/EditSlot';
import ServicelistEdite from './src/screens/ServicelistEdite';
import Cancel from './src/screens/Cancel.js';
import Membership from './src/screens/Membership';
import Silverpkg from './src/screens/Silverpkg';
import Profile_Edit from './src/screens/Profile_Edit';
import Refernearn from './src/screens/Refernearn';
import Faqs from './src/screens/Faqs';
import Termcondition from './src/screens/Term&condition';
import Privacypolicy from './src/screens/Privacypolicy';
import Referhistory from './src/screens/Referhistory';
import Membership_slot from './src/screens/Membership_slot';
import Icon from 'react-native-vector-icons/AntDesign';
import {Provider} from 'react-redux';
import Store from './Redux/store';
import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();
const App = () => {
  const isDarkMode = useColorScheme();

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
  };
  const Stack = createStackNavigator();
  return (
    <Provider store={Store}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={!isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={Colors.white}
        />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown: true}}
            initialRouteName="Auth">
            <Stack.Screen
              name="Referhistory"
              component={Referhistory}
              options={{
                headerTitle: props => (
                  <Headert {...props} title={'Earning History'} />
                ),
              }}
            />

            <Stack.Screen
              name="Membership_slot"
              component={Membership_slot}
              options={{
                headerTitle: props => (
                  <Headert {...props} title={'Membership_slot'} />
                ),
              }}
            />
            <Stack.Screen
              name="Privacypolicy"
              component={Privacypolicy}
              options={{
                headerTitle: props => (
                  <Headert {...props} title={'Privacy Policy'} />
                ),
              }}
            />
            <Stack.Screen
              name="Termcondition"
              component={Termcondition}
              options={{
                headerTitle: props => (
                  <Headert {...props} title={'Terms of Use'} />
                ),
              }}
            />
            <Stack.Screen
              name="Faqs"
              component={Faqs}
              options={{
                headerTitle: props => <Headert {...props} title={'FAQS'} />,
              }}
            />
            <Stack.Screen
              name="Refernearn"
              component={Refernearn}
              options={{title: 'Cricket', headerShown: false}}
            />
            <Stack.Screen
              name="Membership"
              component={Membership}
              options={{title: 'Cricket', headerShown: false}}
            />
            <Stack.Screen
              name="Profile_Edit"
              component={Profile_Edit}
              options={{title: 'Cricket', headerShown: false}}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{title: 'Cricket', headerShown: false}}
            />
            <Stack.Screen
              name="Cancel"
              component={Cancel}
              options={{title: 'Cricket', headerShown: false}}
            />
            <Stack.Screen
              name="ServicelistEdite"
              component={ServicelistEdite}
              options={{headerTitle: props => <Header {...props} />}}
            />
            <Stack.Screen
              name="BookingManage"
              component={BookingManage}
              options={{title: 'Cricket', headerShown: false}}
            />
            <Stack.Screen
              name="EditSlot"
              component={EditSlot}
              options={{title: 'Cricket', headerShown: false}}
            />
            <Stack.Screen
              name="Payment"
              component={Payment}
              options={{title: 'Cricket', headerShown: false}}
            />

            <Stack.Screen
              name="LocationSearch"
              component={LocationSearch}
              options={{
                headerTitle: props => (
                  <Headert {...props} title={'SEARCH LOCATION'} />
                ),
              }}
            />
            <Stack.Screen
              name="StadiumScreen"
              component={StadiumScreen}
              options={{title: 'Cricket', headerShown: false}}
            />

            <Stack.Screen
              name="Silverpkg"
              component={Silverpkg}
              options={{headerTitle: props => <Header {...props} />}}
            />

            <Stack.Screen
              name="BookingSuccess"
              component={BookingSuccessful}
              options={{title: '', headerShown: false}}
            />
            <Stack.Screen
              name="CancellationSuccessful"
              component={CancellationSuccessful}
              options={{title: '', headerShown: false}}
            />
            <Stack.Screen
              name="Stadiumlist"
              component={Stadiumlist}
              options={{
                headerTitle: props => <Headert {...props} title={'STADIUMS'} />,
              }}
            />
            <Stack.Screen
              name="Stadiumdetails"
              component={Stadiumdetails}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Servicelist"
              component={Servicelist}
              options={{headerTitle: props => <Header {...props} />}}
            />
            <Stack.Screen
              name="Servicedetails"
              component={Servicedetails}
              options={{headerTitle: props => <Header {...props} />}}
            />
            <Stack.Screen
              name="Shop"
              component={Shop}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Slotbooked"
              component={SlotBooked}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Silverslotscreen"
              component={SilverSlotScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Bookingdetails"
              component={Bookingdetails}
              options={{headerTitle: props => <Headert {...props} />}}
            />
            <Stack.Screen
              name="Bookingscreen"
              component={BookingScreen}
              options={{headerTitle: props => <Headert {...props} />}}
            />

            <Stack.Screen
              name="Slotscreen"
              component={SlotScreen}
              options={{headerTitle: props => <Header {...props} />}}
            />

            <Stack.Screen
              name="Bookinghistory"
              component={Bookinghistory}
              options={{
                headerTitle: props => (
                  <Headert {...props} title={'BOOKING HISTORRY'} />
                ),
              }}
            />
            <Stack.Screen
              name="VerificationScreen"
              component={VerificationScreen}
              options={{headerTitle: props => <Header {...props} />}}
            />
            <Stack.Screen
              name="Location"
              component={Location}
              options={{headerTitle: props => <Header {...props} />}}
            />
            <Stack.Screen
              name="Ragistration"
              component={Ragistration}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Auth"
              component={Auth}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Goldmembership_bookingdetails"
              component={Goldmembership_bookingdetails}
              options={{
                title: 'Goldmembership_bookingdetails Screen',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Training_details"
              component={Training_details}
              options={{title: 'Training_details Screen', headerShown: false}}
            />
            <Stack.Screen
              name="All_sports"
              component={All_sports}
              options={{
                headerTitle: props => (
                  <Headert {...props} title={'EXPLORE SPORTS'} />
                ),
              }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{title: 'Home Screen', headerShown: false}}
            />
            <Stack.Screen
              name="Wishlist"
              component={Wishlist}
              options={{headerTitle: props => <Header {...props} />}}
            />
            <Stack.Screen
              name="Question"
              component={Question}
              options={{title: 'Question', headerShown: false}}
            />
            <Stack.Screen
              name="Notification"
              component={Notification}
              options={{
                headerTitle: props => (
                  <Headert {...props} title={'NOTIFICATION'} />
                ),
              }}
            />

            <Stack.Screen
              name="Sliderimageview"
              component={SliderImageView}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="Tab"
              component={Bottomtab}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SlotBooking"
              component={SlotBooking}
              options={{title: '', headerShown: false}}
            />
            <Stack.Screen
              name="SlotBookingDetails"
              component={SlotBookingDetails}
              options={{title: '', headerShown: false}}
            />
            <Stack.Screen
              name="EditSlotScreen"
              component={EditSlotScreen}
              options={{title: 'Edit your slot', headerShown: false}}
            />
            <Stack.Screen
              name="Support"
              component={Support}
              options={{
                headerTitle: props => (
                  <Header {...props} title={'EXPLORE SPORTS'} />
                ),
              }}
            />

            <Stack.Screen
              name="BookingScreen2"
              component={BookingScreen2}
              options={{headerTitle: props => <Headert {...props} />}}
            />
            <Stack.Screen
              name="Modal"
              component={Modal}
              options={{title: '', headerShown: false}}
            />

            <Stack.Screen
              name="Stadiumlistmember"
              component={Stadiumlistmember}
              options={{
                headerTitle: props => <Headert {...props} title={'STADIUMS'} />,
              }}
            />
            <Stack.Screen
              name="Stadiumdetailsmember"
              component={Stadiumdetailsmember}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;

function Header() {
  return (
    <>
      <View
        style={{
          backgroundColor: 'white',
          height: 50,
          width: 50,
          position: 'absolute',
          left: -70,
        }}>
        <View
          style={{
            backgroundColor: '#EFF3FA',
            height: 30,
            width: 30,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 20,
            marginTop: 20,
          }}>
          <Icon name="left" style={{color: '#0003C1'}} size={16} />
        </View>
      </View>
    </>
  );
}
function Headert(props) {
  return (
    <>
      <View
        style={{
          backgroundColor: 'white',
          height: 50,
          width: 300,
          position: 'absolute',
          left: -50,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#EFF3FA',
            height: 30,
            width: 30,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 0,
          }}>
          <Icon name="left" style={{color: '#0003C1'}} size={16} />
        </View>
        <Text
          style={{
            color: '#0003C1',
            marginLeft: 16,
            fontFamily: 'ReadexPro-Bold',
            fontSize: 16,
            letterSpacing: 1,
          }}>
          {props.title}
        </Text>
      </View>
    </>
  );
}
