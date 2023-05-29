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
import ScreenHome from './app/Screens/ScreenHome';
import ScreenRestaurants from './app/Screens/ScreenRestautants';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScreenHotels from './app/Screens/ScreenHotels';

enableLatestRenderer();
const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={ScreenHome}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Restaurants"
          component={ScreenRestaurants}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="restaurant" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Hotels"
          component={ScreenHotels}
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
