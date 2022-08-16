import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  alert,
} from 'react-native';
import React, {useState} from 'react';
//import stadium from '../../assets/img/stadium.png';

export default function Slider(props) {
  const [selected, setSelected] = useState(1);
  console.log('props.img', props.img);
  const mWidth = Dimensions.get('screen').width;
  return (
    <View style={{}}>
      {props.img.map(i => {
        console.log('i.img', i.img);
        return (
          <View>
            {selected == i.id ? (
              <View>
                <Image
                  source={{uri: i.img}}
                  style={{height: 180, width: '100%', borderRadius: 10}}
                  resizeMode="cover"
                />
                <Text
                  style={{
                    position: 'absolute',
                    color: 'white',
                    fontWeight: '800',
                    alignSelf: 'flex-end',
                    marginTop: 140,
                    padding: 10,
                  }}>
                  {i.id}/{props.img.length}
                </Text>
              </View>
            ) : null}
          </View>
        );
      })}
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          justifyContent: 'flex-start',
        }}>
        {props.img.slice(0, 3).map(item => (
          <View style={{padding: 5}}>
            <TouchableOpacity
              onPress={() => setSelected(item.id)}
              key={item.id}>
              <Image
                source={item.img}
                style={{
                  width: mWidth * 0.207,
                  height: 55,
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <TouchableOpacity
        onPress={props.openFullView}
        style={{position: 'absolute', right: 0, marginTop: 190, padding: 5}}>
        {/* <Image
          source={stadium}
          style={{width: 75, height: 55, borderRadius: 10}}
          blurRadius={50}
        /> */}

        <Text
          style={{
            fontFamily: 'ReadexPro-Bold',
            position: 'absolute',
            color: 'white',
            paddingTop: 25,
            paddingLeft: 20,
            fontSize: 12,
          }}>
          View All
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});

/* <TouchableOpacity>
            <Image
              source={stadium}
              style={{width: 75, height: 55, borderRadius: 10}}
              blurRadius={50}
            />
            <Text
              style={{
                position: 'absolute',
                color: 'white',
                fontWeight: '600',
                alignContent: 'center',
                alignSelf: 'center',
                paddingTop: 17,
                fontSize: 18,
              }}>
              View All
            </Text>
          </TouchableOpacity> */
