import React from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';
import { Card } from 'react-native-paper';

const RestaurantCard = styled(Card)` 
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body}
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption}
`;

export const RestaurantInfoCard = ({restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://media.istockphoto.com/photos/delicious-meal-picture-id1295387240?b=1&k=20&m=1295387240&s=170667a&w=0&h=KtWYFjSBgpNgVkE3P-WKZ2F6V-VxyUBBtJIP_k8IANM="
    ],
    address = "100 Some Random Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  
  return (
      <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{ uri: photos[0]}}/>
        <Info>
          <Title>{name}</Title>
          <Address>{address}</Address>
        </Info>
      </RestaurantCard>
  );

}
