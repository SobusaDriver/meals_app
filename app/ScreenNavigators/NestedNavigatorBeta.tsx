import React, {FC} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenHome from '../Screens/ScreenHome';
import ScreenMaps from '../Screens/ScreenMaps';
import NestedNavigatorParams from '../NavigatorsParamsTypes/NestedNavigatorParams';
import {RouteProp, useRoute} from '@react-navigation/native';
import {pageProps} from '../NavigatorsParamsTypes/NestedPagesProps';

const Stack = createStackNavigator<NestedNavigatorParams>();
type NestedNavigatorProps = NativeStackScreenProps<
  NestedNavigatorParams,
  'NavigatorNested'
>;

const NestedNavigatorBeta = ({navigation, route}: NestedNavigatorProps) => {
  const {pageProps} = route.params;
  return (
    <Stack.Navigator initialRouteName={pageProps.title}>
      <Stack.Screen
        name={pageProps.title}
        component={pageProps.page}
        options={{headerShown: false, title: pageProps.headerText}}
      />
      <Stack.Screen
        name="LocationNested"
        component={ScreenMaps}
        options={{headerShown: true, title: 'Location'}}
      />
    </Stack.Navigator>
  );
};

export default NestedNavigatorBeta;
