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
import {setSlotid, setSlottime} from '../../Redux/slices/userSlice';
import {useSelector, useDispatch} from 'react-redux';
// initialisations
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function TimeSlot(props) {
  const [pressed, setIsPressed] = useState('');
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        setIsPressed(props.id);
        dispatch(setSlottime(props.stime + '-' + props.etime));

        dispatch(setSlotid(props.id));
      }}
      style={{
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: pressed == props.id ? '#FAC516' : '#9C9C9C',
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 10,
        height: 50,
      }}>
      <View>
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          style={{
            color: 'black',
            fontFamily: 'ReadexPro-Bold',

            fontSize: 10,
          }}>
          {props.stime} - {props.etime}
        </Text>
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          style={{
            color: 'black',
            fontFamily: 'ReadexPro-Bold',
            alignSelf: 'center',
            fontSize: 10,
          }}>
          Avaliable : {props.seat}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textList: {
    color: 'black',
  },
});
