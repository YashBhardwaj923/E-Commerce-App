import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

// <----------: Icons :--------->
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';

const Header = () => {
  return (
    <View>
      <LinearGradient
        colors={['#88dae0', '#98e1d6', '#9ee4d4']}
        style={styles.linerGradient}>
        <View style={styles.inputBox}>
          <View style={styles.row}>
            <Ionicons name="search" size={22} colors="#1f1f1f" />
            <TextInput
              placeholder="Search Amazon.in"
              placeholderTextColor={'#848484'}
              style={styles.textInput}
            />
          </View>
          <AntDesign name="scan1" size={22} colors="#909594" />
        </View>
        <Feather name="mic" size={20} colors="#000000" />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  linerGradient: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputBox: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    paddingHorizontal: 10,
    elevation: 5,
  },
  textInput: {
    padding: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Header;
