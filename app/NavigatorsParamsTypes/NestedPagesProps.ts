import {NativeStackNavigatorProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import NestedNavigatorParams from './NestedNavigatorParams';

export enum listOfNestedPages {
  'HomeNested' = 'HomeNested',
  'HotelNested' = 'HotelNested',
  'RestaurantNested' = 'RestaurantNested',
  'LocationNested' = 'LocationNested',
}

export type pageProps = {
  title: listOfNestedPages;
  headerText: string;
  page: any | undefined;
};
