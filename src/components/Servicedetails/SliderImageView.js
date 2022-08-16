import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Topbar from '../Topbar';
import ImageView from 'react-native-image-viewing';

// const sData = [
//   {id: 1, img: require('../../assets/img/stadium.png')},
//   {id: 2, img: require('../../assets/img/bannerimg.png')},
//   {id: 3, img: require('../../assets/img/stadium.png')},
//   {id: 4, img: require('../../assets/img/commingsoon.png')},
// ];

const images = [
  {
    uri: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4',
  },
  {
    uri: 'https://images.unsplash.com/photo-1573273787173-0eb81a833b34',
  },
  {
    uri: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111',
  },
];
const mWidth = Dimensions.get('screen').width;

export default function SliderImageView({navigation}) {
  const [visible, setIsVisible] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
      }}>
      <Topbar backButtonPreesed={() => navigation.goBack()} />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        style={{flex: 1}}
        disableIntervalMomentum={true}
        snapToAlignment={'start'}
        snapToInterval={mWidth}>
        {/* {sData.map(item => (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={item.img}
              key={item.id}
              style={{
                borderRadius: 6,
                margin: 10,
              }}
              resizeMethod="resize"
              resizeMode="cover"
            />
          </View>
        ))} */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
