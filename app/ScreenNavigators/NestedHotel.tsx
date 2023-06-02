import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenHome from '../Screens/ScreenHome';
import ScreenHotels from '../Screens/ScreenHotels';
import ScreenMaps from '../Screens/ScreenMaps';
import NestedNavigatorParams from '../NavigatorsParamsTypes/NestedNavigatorParams';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const Stack = createStackNavigator<NestedNavigatorParams>();

const NestedHotel = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HotelNested"
        component={ScreenHotels}
        options={{headerShown: false, title: 'Hotel'}}
      />
      <Stack.Screen
        name="LocationNested"
        component={ScreenMaps}
        options={{headerShown: true, title: 'Location'}}
      />
    </Stack.Navigator>
  );
};

export default NestedHotel;
