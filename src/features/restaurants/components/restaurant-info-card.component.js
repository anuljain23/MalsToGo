import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Title } from 'react-native-paper';

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
      <Card elevation={5} style={styles.card}>
        <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0]}}/>
        <Card.Content>
          <Title>{name}</Title>
        </Card.Content>
      </Card>
  );

}

const styles = StyleSheet.create({
  card:{
    backgroundColor:"#fff"
  },
  cover:{
    backgroundColor:"#fff",
  }
});