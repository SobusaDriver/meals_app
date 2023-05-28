/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './app/Screens/HomeScreen';
import RestaurantsScreen from './app/Screens/RestaurantsScreen';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name='Home' component={HomeScreen} options={{headerShown: false }}/>
        <Tab.Screen name='Restaurants' component={RestaurantsScreen} options={{headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
