import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icono from 'react-native-vector-icons/Octicons';
import Topbar from '../components/Topbar';
import {apicaller} from './api';
import {getToken} from '../../Redux/slices/userSlice';
import {useSelector, useDispatch} from 'react-redux';
export default function Membership({navigation}) {
  const Token = useSelector(getToken);

  const [membership, setMembership] = useState([]);
  useEffect(() => {
    apicaller(`plan`, null, 'get', `Bearer ${Token}`).then(function (response) {
      console.log(JSON.stringify(response.data));
      setMembership(response.data.plan);
    });
  }, []);
  console.log('membership', membership);
  return (
    <View style={styles.container}>
      <View style={{position: 'absolute', zIndex: 5, top: 10, left: 10}}>
        <Topbar backButtonPreesed={() => navigation.goBack()} />
      </View>
      <View style={{position: 'relative', height: 250}}>
        <Image
          style={styles.logo}
          source={require('../assets/img/Sports/Profile_bg.png')}
        />

        <View style={styles.heading}>
          <Text
            style={{
              fontFamily: 'ReadexPro-SemiBold',
              color: '#fff',
              letterSpacing: 1,
              fontSize: 30,
            }}>
            Aarka Sports
          </Text>
          <Text
            style={{
              fontFamily: 'ReadexPro-Medium',
              color: '#fff',
              letterSpacing: 1,
              fontSize: 15,
            }}>
            Membership Program
          </Text>
        </View>
      </View>

      <Text
        style={{
          fontFamily: 'ReadexPro-Medium',
          color: '#222',
          letterSpacing: 0.5,
          fontSize: 16,
          marginLeft: 20,
          marginTop: 25,
        }}>
        Select The Plan
      </Text>

      <View style={{padding: 20}}>
        {membership.map(item => {
          console.log('sag', item);
          return (
            <TouchableOpacity
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 10,
                marginVertical: 10,
              }}
              onPress={() => navigation.navigate('Silverpkg', item)}>
              <Image
                style={styles.card}
                source={
                  item.plan_name == 'Gold Member'
                    ? require('../assets/img/Sports/goldcard.png')
                    : require('../assets/img/Sports/silvercard.png')
                }
              />
              <View style={{width: '100%', padding: 10}}>
                <Text style={styles.memberheading}>{item.plan_name}</Text>
                {item.plan_details.map(item => {
                  return (
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Icons
                        name="rhombus-medium"
                        size={14}
                        color={'#0003c1'}
                      />
                      <Text style={styles.subheading}>{item.plan}</Text>
                    </View>
                  );
                })}
              </View>
            </TouchableOpacity>
          );
        })}

        {/* <TouchableOpacity
          style={{
            position: 'relative',
            hight: 170,
            overflow: 'hidden',
            marginTop: 20,
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate('Silverpkg')}>
          <Image
            style={styles.card}
            source={require('../assets/img/Sports/silvercard.png')}
          />
          <View style={{width: '100%', padding: 10}}>
            <Text style={styles.memberheading}>Silver Member</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icons name="rhombus-medium" size={14} color={'#0003c1'} />
              <Text style={styles.subheading}>Unlimited access</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icons name="rhombus-medium" size={14} color={'#0003c1'} />
              <Text style={styles.subheading}>Play any time & any center</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icons name="rhombus-medium" size={14} color={'#0003c1'} />
              <Text style={styles.subheading}>Get slot priority</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icons name="rhombus-medium" size={14} color={'#0003c1'} />
              <Text style={styles.subheading}>Multi sports access</Text>
            </View>
          </View>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  logo: {
    position: 'absolute',

    width: '100%',
  },
  heading: {
    position: 'absolute',
    top: 100,
    left: 20,
  },
  closebtn: {
    position: 'absolute',
    top: 10,
    right: 10,
  },

  card: {
    width: Dimensions.get('window').width * 0.9,
    height: 180,
    position: 'absolute',
  },

  memberheading: {
    fontFamily: 'ReadexPro-Bold',
    letterSpacing: 1,
    color: 'white',
    fontSize: 16,
    marginRight: 10,
  },
  subheading: {
    fontFamily: 'ReadexPro-Medium',
    letterSpacing: 0.8,
    color: '#0003c1',
    fontSize: 12,
    marginLeft: 10,
  },
});
