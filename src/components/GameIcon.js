import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

// packages import
import Icon from 'react-native-vector-icons/dist/FontAwesome';

// initialisations
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function GameIcon(props) {
  const [pressed, setIsPressed] = useState(true);

  return (
    <TouchableOpacity
      onPress={() => {
        setIsPressed(!pressed);
      }}
      style={{
        height: 38,
        width: windowWidth * 0.2,
        flexDirection: 'row',
        borderColor: !pressed ? '#FAC516' : '#9C9C9C',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
      }}>
      <Image
        style={{height: 29, width: 29, marginTop: 1}}
        source={props.icon}
      />
      <Text
        style={{
          color: !pressed ? '#FAC516' : '#9C9C9C',
          fontSize: 10,
          marginTop: 10,
        }}>
        {props.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 38,
    width: windowWidth * 0.2,
    flexDirection: 'row',
  },

  textList: {
    color: 'black',
  },
});
