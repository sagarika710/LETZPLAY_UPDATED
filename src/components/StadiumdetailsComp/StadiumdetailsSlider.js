import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useState, useRef} from 'react';

export default function StadiumdetailsSlider(props) {
  const [selectedItem, setSelectedItem] = useState(
    props.img.sports_centre_image[1]._id,
  );
  const mWidth = Dimensions.get('screen').width;
  const mHeight = Dimensions.get('screen').height;

  return (
    <View>
      {props.img.sports_centre_image.map(i =>
        selectedItem == i._id ? (
          <Image
            source={{uri: i.img}}
            style={{height: mHeight * 0.25, width: '100%'}}
          />
        ) : null,
      )}

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {props.img.sports_centre_image.map(item => (
          <View style={{padding: 5, paddingTop: 8}}>
            <TouchableOpacity
              onPress={() => setSelectedItem(item._id)}
              key={item.id}>
              <Image
                source={{uri: item.img}}
                style={{
                  height: selectedItem == item._id ? 80 : 65,

                  marginTop: selectedItem == item._id ? 0 : 10,
                  width:
                    selectedItem == item._id ? mWidth * 0.35 : mWidth * 0.3,
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
