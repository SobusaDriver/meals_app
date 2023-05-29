import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BusinessType from '../Types/BusinessType';
import {getBusinessByType, listOfBusiness} from '../Utils/BusinessUtils';
import ListOfCards from '../Components/ListOfCards';

const HotelsScreen = () => {
  const insets = useSafeAreaInsets();
  let listOfBusiness: Array<BusinessType> = getBusinessByType('lodging');
  useEffect(() => {}, []);

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <ListOfCards restaurants={listOfBusiness} />
    </View>
  );
};

export default HotelsScreen;
