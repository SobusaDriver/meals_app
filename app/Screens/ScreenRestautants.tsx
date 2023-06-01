import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BusinessType from '../Types/BusinessType';
import {getBusinessByType, listOfBusiness} from '../Utils/BusinessUtils';
import ListOfCards from '../Components/ListOfCards';
import LocationDetails from '../Types/LocationDetails';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import NestedNavigatorParams from '../Types/NestedNavigatorParams';

type screenRestaurantsProps = NativeStackScreenProps<
  NestedNavigatorParams,
  'RestaurantNested'
>;

const ScreenRestaurants = ({route, navigation}: screenRestaurantsProps) => {
  const insets = useSafeAreaInsets();
  let listOfBusiness: Array<BusinessType> = getBusinessByType('restaurant');

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

export default ScreenRestaurants;

const styles = StyleSheet.create({});
