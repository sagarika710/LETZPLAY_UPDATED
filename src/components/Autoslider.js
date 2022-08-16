import React, {useEffect} from 'react';
import {SliderBox} from 'react-native-image-slider-box';
const Autoslider = props => {
  // console.log('kkkkkk', props);
  const Imagearray = [];
  useEffect(() => {
    if (props.img) {
      props.img.map(img => {
        console.log(img.img);
        Imagearray.push(img.img);
        //  console.log('ggghggggg', Imagearray);
      });
    }
  }, [props]);
  return (
    <SliderBox
      images={Imagearray}
      sliderBoxHeight={160}
      onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
      dotColor="#0003C1"
      inactiveDotColor="#C4C4C4"
      paginationBoxVerticalPadding={20}
      autoplay
      circleLoop
      resizeMethod={'resize'}
      resizeMode={'cover'}
      paginationBoxStyle={{
        position: 'absolute',
        zIndex: 3,
        bottom: -10,
        padding: 0,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
      }}
      dotStyle={{
        width: 10,
        height: 5,

        marginHorizontal: 0,
        padding: 0,
        margin: 0,
      }}
      ImageComponentStyle={{borderRadius: 15, width: '95%', marginTop: 5}}
      imageLoadingColor="#2196F3"
    />
  );
};
export default Autoslider;
