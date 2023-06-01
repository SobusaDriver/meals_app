import {FlatList} from 'react-native';
import BusinessType from '../Types/BusinessType';
import MaterialCard from './MaterialCard';
import LocationDetails from '../Types/LocationDetails';

type lofProps = {
  restaurants: Array<BusinessType>;
  navigateToRoute: (locationDetails: LocationDetails) => void;
};

const ListOfCards = ({restaurants, navigateToRoute}: lofProps) => {
  console.log(restaurants.length);

  return (
    <FlatList
      data={restaurants}
      renderItem={({item}) => (
        <MaterialCard
          title={item.name}
          subTitle={item.vicinity}
          iconSrc={item.icon}
          userRating={item.rating}
          userRatingsTotal={item.user_ratings_total}
          locationDetails={item.geometry}
          navigateToRoute={() => navigateToRoute(item.geometry)}
        />
      )}
    />
  );
};

export default ListOfCards;
