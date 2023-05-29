import {Card, Text, Avatar, Button} from 'react-native-paper';
import {Image, StyleSheet, View} from 'react-native';
import CardContent from 'react-native-paper/lib/typescript/src/components/Card/CardContent';

type cardProps = {
  title: string;
  subTitle: String;
  iconSrc: string;
  userRating?: number;
  userRatingsTotal?: number;
  detailsRoute: string;
};

const MaterialCard = ({
  title,
  subTitle,
  iconSrc,
  userRating,
  userRatingsTotal,
  detailsRoute,
}: cardProps) => {
  return (
    <Card mode="contained" style={style.cardContainer}>
      <Card.Title titleVariant="headlineSmall" title={title} />
      <Card.Content style={style.CardContent}>
        {/* <Card.Cover source={ {uri: iconSrc}}/> */}
        <Avatar.Image
          style={style.cardImage}
          size={56}
          source={{uri: iconSrc}}
        />
        <Image style={style.cardImage} source={{uri: iconSrc}} />
        <View>
          <Text variant="bodyMedium">{subTitle}</Text>
          {userRating && (
            <Text variant="bodyMedium">User Rating: {userRating}★</Text>
          )}
          {userRatingsTotal && (
            <Text variant="bodyMedium">Total Rating: {userRatingsTotal}</Text>
          )}
        </View>
      </Card.Content>
    </Card>
  );
};

const style = StyleSheet.create({
  cardContainer: {
    flex: 1,
    paddingVertical: 8,
    margin: 8,
  },
  CardContent: {
    flexDirection: 'row',
  },
  cardImage: {
    backgroundColor: '#ffffff',
    borderRadius: 28,
    margin: 4,
  },
});

export default MaterialCard;
