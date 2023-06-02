import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenHome from '../Screens/ScreenHome';
import ScreenMaps from '../Screens/ScreenMaps';
import NestedNavigatorParams from '../NavigatorsParamsTypes/NestedNavigatorParams';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const Stack = createStackNavigator<NestedNavigatorParams>();

const Nestedhome = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeNested"
        component={ScreenHome}
        options={{headerShown: false, title: 'Home'}}
      />
      <Stack.Screen
        name="LocationNested"
        component={ScreenMaps}
        options={{headerShown: true, title: 'Location'}}
      />
    </Stack.Navigator>
  );
};

export default Nestedhome;
