import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Antwerp from '../../meals_mock_api/antwerp.json';
import Chicago from '../../meals_mock_api/chicago.json';
import SanFrancisco from '../../meals_mock_api/san_francisco.json';
import Toronto from '../../meals_mock_api/toronto.json';
import BusinessType from '../Types/BusinessType';
import MaterialCard from '../Components/MaterialCard';
import ListOfCards from '../Components/ListOfCards';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { listOfBusiness } from '../Utils/BusinessUtils';

const ScreenHome = () => {
  const insets = useSafeAreaInsets();
  const listOfRestaurants: Array<BusinessType> = listOfBusiness;

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

export default ScreenHome;
