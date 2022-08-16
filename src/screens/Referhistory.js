import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import {apicaller} from './api';
import {
  getSportid,
  getToken,
  getkm,
  getplanname,
} from '../../Redux/slices/userSlice';
import {useSelector, useDispatch} from 'react-redux';

function Referhistory() {
  const Token = useSelector(getToken);
  const [referral, setReferral] = useState();
  useEffect(() => {
    apicaller('earn-history', null, 'get', `Bearer ${Token}`).then(res => {
      //  console.log('referral hist', res.data.earn_history);
      setReferral(res.data.earn_history);
    });
  }, []);
  console.log('referral hist', referral);
  return (
    <View style={styles.Container}>
      <View
        style={{
          borderColor: '#E7E7E7',
          borderWidth: 1,
          borderRadius: 10,
          marginHorizontal: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 16,
          }}>
          <Text style={styles.heading}>Your Referals</Text>
          <Text style={styles.heading}>Earnings</Text>
        </View>
        <ScrollView>
          {referral &&
            referral.map(item => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    margin: 16,
                    borderBottomWidth: 1,
                    borderColor: '#DFDDDD',
                  }}>
                  <Text style={styles.text}>{item.name}</Text>
                  <Text style={styles.text}>₹ {item.point}</Text>
                </View>
              );
            })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  heading: {
    color: '#222222',
    fontSize: 14,
    fontWeight: 'bold',
  },
  text: {
    color: '#717171',
    fontSize: 14,
    paddingBottom: 10,
  },
});
export default Referhistory;
