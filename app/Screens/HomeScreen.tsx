import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Antwerp from '../../meals_mock_api/antwerp.json';
import BusinessType from '../Types/BusinessType';
import MaterialCard from '../Components/MaterialCard';
import ListOfCards from '../Components/ListOfCards';

const HomeScreen = () => {
  const listOfRestaurants: Array<BusinessType> = Antwerp.results;
  console.log(listOfRestaurants[0]);

  return (
    <View>
      <ListOfCards restaurants={listOfRestaurants} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
