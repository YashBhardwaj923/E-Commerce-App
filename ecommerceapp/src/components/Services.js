import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import React from 'react';
import AmazonPay from '../assets/amazon-pay.png';
import SendMoney from '../assets/send-money.jpg';
import PayBills from '../assets/pay-bills.jpeg';
import ScanQR from '../assets/scan-qr.jpeg';
import {RecentSearchData} from '../data/RecentSearchData';

const Services = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.cardContainer}
      contentContainerStyle={{paddingRight: 20}}>
      <View style={styles.serviceContainer}>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image style={styles.imgStyle} source={AmazonPay} />
            <Text style={styles.text}>Amazon Pay</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image style={styles.imgStyle} source={SendMoney} />
            <Text style={styles.text}>Send Money</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image style={styles.imgStyle} source={PayBills} />
            <Text style={styles.text}>User Pay Bills</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image style={styles.imgStyle} source={ScanQR} />
            <Text style={styles.text}>Scan QR</Text>
          </View>
        </View>
      </View>

      {RecentSearchData.map(item => (
        <View key={item.id} style={styles.outerContainer}>
          <Text style={styles.recentSearch}>{item.title}</Text>
          <Image source={item.image} style={styles.serImg} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: -20,
    paddingHorizontal: 10,
  },
  serviceContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    elevation: 5,
  },
  imgStyle: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  row: {
    flexDirection: 'row',
  },
  innerContainer: {
    padding: 10,
    alignItems: 'center',
    paddingTop: 15,
  },
  text: {
    fontSize: 12,
    color: 'black',
  },

  outerContainer: {
    backgroundColor: 'white',
    marginLeft: 8,
    borderRadius: 5,
    elevation: 5,
    padding: 5,
    width: 140,
  },
  serImg: {
    height: 130,
    width: '100%',
  },
  recentSearch: {
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 8,
  },
});

export default Services;
