import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BusinessType from '../Types/BusinessType';
import {getBusinessByType, listOfBusiness} from '../Utils/BusinessUtils';
import ListOfCards from '../Components/ListOfCards';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import NestedNavigatorParams from '../NavigatorsParamsTypes/NestedNavigatorParams';
import LocationDetails from '../Types/LocationDetails';

type screenHotelsProps = NativeStackScreenProps<
  NestedNavigatorParams,
  'HotelNested'
>;

const ScreenHotels = ({navigation}: screenHotelsProps) => {
  const insets = useSafeAreaInsets();
  let listOfBusiness: Array<BusinessType> = getBusinessByType('lodging');
  useEffect(() => {}, []);

  const navigateToRoute = (locationDetails: LocationDetails) => {
    navigation.navigate('LocationNested', {locationDetails: locationDetails});
  };

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <ListOfCards
        restaurants={listOfBusiness}
        navigateToRoute={navigateToRoute}
      />
    </View>
  );
};

export default ScreenHotels;
