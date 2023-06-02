import {View} from 'react-native';
import React from 'react';
import BusinessType from '../Types/BusinessType';
import ListOfCards from '../Components/ListOfCards';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {listOfBusiness} from '../Utils/BusinessUtils';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import NestedNavigatorParams from '../NavigatorsParamsTypes/NestedNavigatorParams';
import LocationDetails from '../Types/LocationDetails';

type screenHomeProps = NativeStackScreenProps<
  NestedNavigatorParams,
  'HomeNested'
>;

const ScreenHome = ({route, navigation}: screenHomeProps) => {
  const insets = useSafeAreaInsets();
  const navigateToRoute = (locationDetails: LocationDetails) => {
    navigation.navigate('LocationNested', {locationDetails: locationDetails});
  };
  const listOfRestaurants: Array<BusinessType> = listOfBusiness;
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <ListOfCards
        restaurants={listOfRestaurants}
        navigateToRoute={navigateToRoute}
      />
    </View>
  );
};

export default ScreenHome;
