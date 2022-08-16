import React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Colors from '../components/Colors';
const Btn = props => {
  const [select, setSelect] = useState();
  return (
    <TouchableOpacity
      onPress={() => {
        setSelect(!select), props.passData(props.datas);
      }}
      style={{
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 5,
        width: '48%',

        paddingBottom: 5,
        backgroundColor: '#FAC516',
        borderColor: '#fde494',
      }}>
      {select ? (
        <Text
          style={{
            fontFamily: 'ReadexPro-Bold',
            letterSpacing: 1,
            color: Colors.main,
            textAlign: 'center',
            fontSize: 12,
            padding: 5,
          }}>
          Selected
        </Text>
      ) : (
        <Text
          style={{
            fontFamily: 'ReadexPro-Bold',
            letterSpacing: 1,
            color: Colors.main,
            textAlign: 'center',
            fontSize: 12,
            padding: 5,
          }}>
          Select
        </Text>
      )}
    </TouchableOpacity>
  );
};
export default Btn;

const styles = StyleSheet.create({
  mainview: {
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderColor: '#DFDDDD',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
  },
});
