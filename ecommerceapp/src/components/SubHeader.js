import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

// <-------: Icons :------->
import Feather from 'react-native-vector-icons/dist/Feather';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';

const SubHeader = () => {
  return (
    <View>
      <LinearGradient
        colors={['#bbe8ef', '#bdeee9', '#c3f1e3']}
        style={styles.subheading}>
        <Feather name="map-pin" size={20} />
        <Text style={styles.deliver}>Deliver to Yash - Delhi 095648</Text>
        <SimpleLineIcons name="arrow-down" size={12} />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  subheading: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliver: {
    fontSize: 14,
    paddingHorizontal: 6,
  },
});

export default SubHeader;
