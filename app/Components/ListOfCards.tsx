import {FlatList} from 'react-native';
import BusinessType from '../Types/BusinessType';
import MaterialCard from './MaterialCard';

type lofProps = {
  restaurants: Array<BusinessType>;
};

const ListOfCards = ({restaurants}: lofProps) => {
  console.log(restaurants.length);

  return (
    <FlatList
      data={restaurants}
      renderItem={({item}) => (
        <MaterialCard
          title={item.name}
          subTitle={item.vicinity}
          iconSrc={item.icon}
          userRatingsTotal={item.user_ratings_total}
          detailsRoute=""
        />
      )}
    />
  );
};

export default ListOfCards;
