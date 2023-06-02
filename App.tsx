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
import {useColorScheme} from 'react-native';
import ScreenRestaurants from './app/Screens/ScreenRestautants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScreenHotels from './app/Screens/ScreenHotels';
import NestedNavigator from './app/ScreenNavigators/NestedNavigator';
import NestedNavigatorBeta from './app/ScreenNavigators/NestedNavigatorBeta';
import {listOfNestedPages} from './app/NavigatorsParamsTypes/NestedPagesProps';

enableLatestRenderer();
const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={NestedNavigator}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="NavigatorNested"
          component={NestedNavigatorBeta}
          initialParams={{
            pageProps: {
              title: listOfNestedPages.RestaurantNested,
              headerText: 'Restaurant',
              page: ScreenRestaurants,
            },
          }}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="restaurant" color={color} size={size} />
            ),
          }}
        />
        {/* <Tab.Screen
          name="Restaurants"
          component={
            <NestedNavigatorU
              headerText="Restaurant"
              title={listOfNestedPages.RestaurantNested}
              page={ScreenRestaurants}
            />
            // NestedNavigatorU({
            //   headerText: 'Restaurant',
            //   title: listOfNestedPages.RestaurantNested,
            //   page: ScreenRestaurants,
            // })
          }
          options={{
            title: 'Restaurants',
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="restaurant" color={color} size={size} />
            ),
          }}
          // initialParams={
          //   headerText: 'Restaurant',
          //   title: listOfNestedPages.RestaurantNested,
          //   page: ScreenRestaurants,
          // }
        >
          <NestedNavigator
            headerText="Restaurant"
            title={listOfNestedPages.RestaurantNested}
            page={ScreenRestaurants}
          />
        </Tab.Screen> */}
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
