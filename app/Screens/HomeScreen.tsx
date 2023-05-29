import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Antwerp from '../../meals_mock_api/antwerp.json';
import BusinessType from '../Types/BusinessType';
import MaterialCard from '../Components/MaterialCard';
import ListOfCards from '../Components/ListOfCards';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const listOfRestaurants: Array<BusinessType> = Antwerp.results;

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <ListOfCards restaurants={listOfRestaurants} />
    </View>
  );
};

export default HomeScreen;
