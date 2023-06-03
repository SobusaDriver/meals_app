/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {enableLatestRenderer} from 'react-native-maps';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Nestedhome from './app/ScreenNavigators/NestedHome';
import NestedRestaurant from './app/ScreenNavigators/NestedRestaurant';
import NestedHotel from './app/ScreenNavigators/NestedHotel';

enableLatestRenderer();
const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={Nestedhome}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Restaurant"
          component={NestedRestaurant}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="restaurant" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Hotel"
          component={NestedHotel}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="hotel" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
