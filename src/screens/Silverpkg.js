import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getBookingid,
  getDob,
  getEmail,
  getId,
  getName,
  getSname,
  getToken,
  getUserPhone,
  logout,
} from '../../Redux/slices/userSlice';
import {apicaller} from './api';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default Goldmembership = ({route, navigation}) => {
  const [showSports, setSport] = useState(0);
  const [showTime, setTime] = useState(0);
  const [sports, selectedSports] = useState('');
  const [selectedTime, setselectedTime] = useState('');
  const [selectedPackage, setselectedPackage] = useState('');
  const [activateButton, setactivateButton] = useState(false);
  const [selectditem, setSelectditem] = useState();
  const price = route.params;

  console.log('bggggggggggg', price);
  const [data, setData] = useState();
  const Token = useSelector(getToken);
  const Id = useSelector(getId);
  const call = () => {
    if (selectedTime !== '' && selectedPackage != '' && sports !== '') {
      setactivateButton(true);
    }
  };

  const packages = [
    {name: '12 Months'},
    {name: '6 Months'},
    {name: '3 Months'},
  ];
  function payme() {
    var data = JSON.stringify({
      user_id: Id,
      price: selectditem.price,
      gst: selectditem.price * 0.18,
      total_amount: selectditem.price + selectditem.price * 0.18,
      booking_id: price._id,
      membership_type: price.plan_name == 'Gold Member' ? 'gold' : 'silver',
      plan_id: selectditem._id,
    });
    console.log('saggtgtgttghgyfyyftykyt', data);
    apicaller('get-bokingid', data, 'post', `Bearer ${Token}`)
      .then(res => {
        console.log('kjhgfgkilhgufyctu', res.data);
        setData(res.data);
        navigation.navigate('Bookingdetails', res.data);
      })
      .catch(e => {
        console.log(e.value);
      });
  }
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: '#222222',
          fontSize: 16,
          fontFamily: 'ReadexPro-SemiBold',
          marginLeft: 20,
          marginTop: 20,
          marginBottom: 10,
        }}>
        Please Choose Package
      </Text>
      <ScrollView>
        {price.plan_pricing.map((item, key) => {
          return (
            <TouchableOpacity
              key={key}
              onPress={() => {
                setselectedPackage(item.duration), call();
                setSelectditem(item);
              }}
              style={{
                paddingTop: 20,
                paddingLeft: 10,
                flexDirection: 'row',
                flexWrap: 'wrap',
                height: 125,
                width: windowWidth * 0.9,
                marginLeft: 'auto',
                marginRight: 'auto',
                justifyContent: 'space-between',
                borderRadius: 10,
                borderColor:
                  selectedPackage === item.duration ? '#FAC516' : '#EBEAEA',
                borderWidth: 2,
                marginVertical: 5,
                marginHorizontal: 40,
                alignItems: 'center',
                shadowColor: '#000000',
                shadowOffset: {width: -2, height: 4},
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}>
              <Text style={styles.box3txt}>{item.duration}</Text>
              <Text style={styles.box3txt}>{item.price}/-</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <View style={{padding: 10}}>
        <TouchableOpacity
          disabled={!selectditem}
          onPress={() => payme()}
          style={{
            backgroundColor: selectditem ? '#fac516' : '#aaa',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            height: 43,
          }}>
          <Text
            style={{color: '#fff', fontFamily: 'ReadexPro-Bold', fontSize: 14}}>
            Proceed To Pay
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  box3txt: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'ReadexPro-Bold',
    marginHorizontal: 15,
    marginTop: 30,
  },
});
