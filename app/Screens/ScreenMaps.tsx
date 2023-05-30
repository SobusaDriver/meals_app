import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MapView from 'react-native-maps';
import LocationDetails from '../Types/LocationDetails';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import NestedNavigatorParams from '../Types/NestedNavigatorParams';

type screenMapsProps = NativeStackScreenProps<
  NestedNavigatorParams,
  'Location'
>;
const ScreenMaps = ({route}: screenMapsProps) => {
  const insets = useSafeAreaInsets();
  const {locationDetails} = route.params;
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingHorizontal: insets.right,
      }}>
      <Text>Place Location</Text>
      <MapView
        style={styles.mapView}
        region={{
          latitude: locationDetails.location.lat,
          longitude: locationDetails.location.lat,
          latitudeDelta: locationDetails.viewport.northeast.lat,
          longitudeDelta: locationDetails.viewport.northeast.lng,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mapView: {
    flex: 1,
  },
});

export default ScreenMaps;
