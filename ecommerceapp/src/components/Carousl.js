import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React, {useRef, useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {CarouselData} from '../data/CarouselData';

const sliderWidth = Dimensions.get('screen').width;

const Carousl = () => {
  const carouselRef = useRef();
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.sliderStyle} />
      </View>
    );
  };

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        ref={carouselRef}
        data={CarouselData}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={500}
        onSnapToItem={index => setActiveSlide(index)}
      />

      <Pagination
        dotsLength={CarouselData.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          position: 'absolute',
          bottom: 0,
          left: '15%',
        }}
        dotStyle={{
          width: 15,
          height: 15,
          borderRadius: 10,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
        }}
        inactiveDotStyle={{}}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sliderStyle: {
    height: 250,
    width: '100%',
  },
  carouselContainer: {
    position: 'relative',
  },
});

export default Carousl;
