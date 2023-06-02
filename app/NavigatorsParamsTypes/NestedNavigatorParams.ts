import LocationDetails from '../Types/LocationDetails';
import {pageProps} from './NestedPagesProps';

type NestedNavigatorParams = {
  NavigatorNested: {pageProps: pageProps};
  HomeNested: undefined;
  HotelNested: undefined;
  RestaurantNested: undefined;
  LocationNested: {locationDetails: LocationDetails};
};
export default NestedNavigatorParams;
