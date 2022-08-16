import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

// import SportsCentreImage from '../assets/img/SportsCentreImage.png'
import Colors from './Colors';

// initialisations
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function StadiumItem() {
  return (
    <View style={styles.heroCarousel}>
      {/* <ScrollView style={{ flex: 0.7, margin: 5, width: windowWidth * 0.8, marginLeft: 'auto', marginRight: 'auto' }} horizontal={true}>
                <Image
                    style={styles.sportsimage}
                    source={SportsCentreImage}
                />
                <Image
                    style={styles.sportsimage}
                    source={SportsCentreImage}
                />
                <Image
                    style={styles.sportsimage}
                    source={SportsCentreImage}
                />
                <Image
                    style={styles.sportsimage}
                    source={SportsCentreImage}
                />
            </ScrollView> */}
      <View
        style={{
          flex: 0.3,
          flexDirection: 'column',
          marginLeft: 20,
          justifyContent: 'space-evenly',
        }}>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 14,
              color: '#0003C1',
              letterSpacing: 14 * 0.08,
            }}>
            Letzplay Sports Center
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              flexDirection: 'row',
              width: windowWidth * 0.4,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 10,
                color: '#717171',
              }}>
              Patia,Bhubaneswar
            </Text>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 10,
                color: '#717171',
              }}>
              10K.M
            </Text>
          </View>

          <TouchableOpacity
            style={{
              borderRadius: 5,
              padding: 3,
              marginRight: 20,
              borderColor: '#FAC516',
              borderWidth: 1,
              width: 85,
              height: 29,
              marginTop: -20,
              padding: 5,
              paddingLeft: 24,
            }}>
            <Text style={{fontSize: 12, fontWeight: 'bold', color: '#FAC516'}}>
              Select
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heroCarousel: {
    margin: 12,
    marginLeft: 0,
    width: 350,
    height: 220,
    borderWidth: 1,
    borderColor: '#E3E1E1',
    borderRadius: 10,
    flexDirection: 'column',
    paddingTop: 5,
  },
  sportsimage: {
    width: windowWidth * 0.8,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 141,
    borderRadius: 10,
  },
});
