import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenHome from '../Screens/ScreenHome';
import ScreenMaps from '../Screens/ScreenMaps';
import NestedNavigatorParams from '../Types/NestedNavigatorParams';

const Stack = createStackNavigator<NestedNavigatorParams>();
type nestedNavigatorParams = NativeStackScreenProps<
  NestedNavigatorParams,
  'NestedNavigator'
>;
const NestedNavigator = () => {
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

export default NestedNavigator;
