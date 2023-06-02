import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenHome from '../Screens/ScreenHome';
import ScreenRestaurants from '../Screens/ScreenRestautants';
import ScreenMaps from '../Screens/ScreenMaps';
import NestedNavigatorParams from '../NavigatorsParamsTypes/NestedNavigatorParams';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const Stack = createStackNavigator<NestedNavigatorParams>();

const NestedRestaurant = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RestaurantNested"
        component={ScreenRestaurants}
        options={{headerShown: false, title: 'Restaurant'}}
      />
      <Stack.Screen
        name="LocationNested"
        component={ScreenMaps}
        options={{headerShown: true, title: 'Location'}}
      />
    </Stack.Navigator>
  );
};

export default NestedRestaurant;
