import LocationDetails from './LocationDetails';

type pageProps = {
  title: string;
  page: React.FC;
};

type NestedNavigatorParams = {
  HomeNested: undefined;
  HotelNested: undefined;
  RestaurantNested: undefined;
  LocationNested: {locationDetails: LocationDetails};
  NestedNavigator: pageProps;
};
export default NestedNavigatorParams;
