import LocationDetails from '../Types/LocationDetails';
import {pageProps} from './NestedPagesProps';

type ParentNavigationParams = {
  Home: undefined;
  Restaurants: undefined;
  Hotels: undefined;
  NavigatorNested: {pageProps: pageProps};
};
export default ParentNavigationParams;
