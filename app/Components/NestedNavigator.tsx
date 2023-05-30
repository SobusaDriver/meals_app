import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenHome from '../Screens/ScreenHome';
import ScreenMaps from '../Screens/ScreenMaps';
import NestedNavigatorParams from '../Types/NestedNavigatorParams';

const Stack = createStackNavigator<NestedNavigatorParams>();

const NestedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ScreenHome} />
      <Stack.Screen name="Location" component={ScreenMaps} />
    </Stack.Navigator>
  );
};

export default NestedNavigator;
