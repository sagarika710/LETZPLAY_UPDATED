// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   Platform,
// } from 'react-native';

// export default Preview = ({
//   style,
//   item,
//   imageKey,
//   onPress,
//   index,
//   active,
//   local,
// }) => {
//   return (
//     <TouchableOpacity
//       style={[styles.videoContainer]}
//       onPress={() => onPress(item)}>
//       <View style={[styles.imageContainer, styles.shadow]}>
//         <Image
//           style={[styles.videoPreview, active ? {} : {height: 120}]}
//           source={{uri: item[imageKey]}}
//         />
//       </View>
//       <Text style={styles.desc}>{item.desc}</Text>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({

// });

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';

export default function Preview(
  style,
  item,
  imageKey,
  onPress,
  index,
  active,
  local,
) {
  const mWidth = Dimensions.get('screen').width;
  return (
    <TouchableOpacity
      style={{
        width: mWidth,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={() => onPress(item)}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{
            width: mWidth,
            padding: 20,
            height: 200,
            borderRadius: 8,
            resizeMode: 'cover',
          }}
          source={{
            uri: 'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
          }}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  videoContainer: {
    width: 275,
    paddingVertical: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  videoPreview: {
    width: 275,
    height: 155,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  desc: {
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 24,
    marginTop: 18,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
