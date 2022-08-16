import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  Animated,
} from 'react-native';
import React, {useState} from 'react';
// import {onChange} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Entypo';

const mWidth = Dimensions.get('screen').width;
const mHeight = Dimensions.get('screen').height;
// const images = [
//   {
//     img: require('../../assets/img/stadium.png'),
//   },
//   {
//     img: require('../../assets/img/stadium.png'),
//   },
//   {
//     img: require('../../assets/img/stadium.png'),
//   },
//   {
//     img: require('../../assets/img/stadium.png'),
//   },
//   //   'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
//   //   'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
//   //   'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
//   //   'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
// ];
export default function SecondSlider() {
  const [ImgActive, setImageActive] = useState(0);
  onChange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != ImgActive) {
        setImageActive(slide);
      }
    }
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.size}>
        <ScrollView
          onScroll={({nativeEvent}) => onChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.size}>
          {images.map((e, index) => (
            <Image
              key={e}
              resizeMode="stretch"
              style={{width: mWidth, borderRadius: 5}}
              source={e.img}
            />
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          {images.map((e, index) => (
            // <Text
            //   key={e}
            //   style={
            //     ImgActive == index ? styles.dotActive : styles.dotInActive
            //   }>
            <Icon
              name="dot-single"
              size={30}
              key={e}
              style={ImgActive == index ? styles.dotActive : styles.dotInActive}
            />
            // </Text>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  size: {width: mWidth, height: mHeight * 0.25},
  wrapDot: {
    position: 'absolute',
    bottom: -30,
    flexDirection: 'row',

    alignSelf: 'center',
  },
  dotActive: {margin: 3, color: 'red'},
  dotInActive: {margin: 3, color: 'blue'},
});
