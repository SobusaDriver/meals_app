import { View} from 'react-native';
import React from 'react';
import BusinessType from '../Types/BusinessType';
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
