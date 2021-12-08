import React from 'react';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import { 
  RestaurantCard, 
  RestaurantCardCover, 
  Info, 
  Section, 
  SectionEnd, 
  Rating, 
  Icon, 
  Address 
} from './restaurant-info-card.styles';

export const RestaurantInfoCard = ({restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://media.istockphoto.com/photos/delicious-meal-picture-id1295387240?b=1&k=20&m=1295387240&s=170667a&w=0&h=KtWYFjSBgpNgVkE3P-WKZ2F6V-VxyUBBtJIP_k8IANM="
    ],
    address = "100 Some Random Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;
  
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
      <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{ uri: photos[0]}}/>
        <Info>
          <Text variant="label">{name}</Text>
          <Section>
            <Rating>
              {ratingArray.map(() => (
                <SvgXml xml={star} width={20} height={20} />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant="error">
                  CLOSED TEMPORARILY
                </Text>
              )}
              <Spacer position="left" size="medium">
                {isOpenNow && <SvgXml xml={open} width={30} height={30} />}
              </Spacer>
              <Spacer position="left" size="medium">
                <Icon source={{uri:icon}}/>
              </Spacer>
            </SectionEnd>
          </Section>
          <Address>{address}</Address>
        </Info>
      </RestaurantCard>
  );

}
