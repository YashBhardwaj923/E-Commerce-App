import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  FlatList,
} from 'react-native';
import React from 'react';
import {Categories} from '../data/Categories';

const Category = () => {
  return (
    // <ScrollView
    //   horizontal
    //   showsHorizontalScrollIndicator={false}
    //   style={styles.conatiner}>
    //   {Categories.map(item => (
    //     <View style={styles.categori}>
    //       <Image source={item.image} style={styles.imgStyle} />
    //       <Text>{item.title}</Text>
    //     </View>
    //   ))}
    // </ScrollView>

    <FlatList
      style={styles.conatiner}
      data={Categories}
      renderItem={({item}) => (
        <View style={styles.categori}>
          <Image source={item.image} style={styles.imgStyle} />
          <Text>{item.title}</Text>
        </View>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: '#ffffff',
    padding: 10,
  },
  imgStyle: {
    height: 50,
    width: 50,
  },
  categori: {
    paddingHorizontal: 8,
    alignItems: 'center',
  },
});

export default Category;
