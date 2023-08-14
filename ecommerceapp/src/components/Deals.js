import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import RecommendedProduct from '../assets/recommend.jpg';

const Deals = () => {
  return (
    <View style={styles.dealContainer}>
      <Text style={styles.dealTitle}>Recommended deal for you</Text>
      <Image source={RecommendedProduct} style={styles.remImg} />
      <View style={styles.buttonSection}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.offBtn}>
            <Text style={styles.offDeal}>10% off</Text>
          </TouchableOpacity>
          <Text style={styles.deal}>Deal</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.discountPrice}>₹ 1,549.00</Text>
          <Text style={styles.mrp}>M.R.P</Text>
          <Text style={styles.actualPrice}>₹ 1,895.00</Text>
        </View>
        <Text style={styles.proName}>
          Nykaa Face Wash Gentle Skin Cleaner for all skin type
        </Text>
        <Text style={styles.alldeals}>See all Deals</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dealContainer: {
    marginTop: 20,
  },
  dealTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 10,
  },
  remImg: {
    height: 250,
    width: '100%',
    marginVertical: 10,
  },
  buttonSection: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  offBtn: {
    backgroundColor: '#be0201',
    width: 60,
    alignItems: 'center',
    padding: 5,
    borderRadius: 4,
  },
  offDeal: {
    color: 'white',
    fontSize: 12,
  },
  deal: {
    color: '#be0201',
    fontWeight: '600',
    fontSize: 12,
    marginLeft: 6,
  },
  discountPrice: {
    color: 'black',
    fontSize: 16,
    marginVertical: 5,
  },
  mrp: {
    color: 'black',
    fontSize: 10,
    marginHorizontal: 5,
  },
  actualPrice: {
    fontSize: 10,
    textDecorationLine: 'line-through',
  },
  proName: {
    color: 'black',
    fontSize: 15,
  },
  alldeals: {
    color: '#017185',
    fontSize: 14,
    marginVertical: 10,
  },
});

export default Deals;
