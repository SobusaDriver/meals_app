import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MapView, {Marker} from 'react-native-maps';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import NestedNavigatorParams from '../NavigatorsParamsTypes/NestedNavigatorParams';

type screenMapsProps = NativeStackScreenProps<
  NestedNavigatorParams,
  'LocationNested'
>;
const ScreenMaps = ({route}: screenMapsProps) => {
  const insets = useSafeAreaInsets();
  const {locationDetails} = route.params;
  const location = {
    latitude: locationDetails.location.lat,
    longitude: locationDetails.location.lng,
    latitudeDelta:
      locationDetails.viewport.northeast.lat -
      locationDetails.viewport.southwest.lat,
    longitudeDelta:
      locationDetails.viewport.northeast.lng -
      locationDetails.viewport.southwest.lng,
  };
  return (
    <View
      style={{
        paddingHorizontal: insets.right,
        flex: 1,
      }}>
      <MapView style={styles.mapView} region={location}>
        <Marker coordinate={location} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapView: {
    flex: 1,
  },
});

export default ScreenMaps;
