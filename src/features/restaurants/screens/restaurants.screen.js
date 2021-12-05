import React from 'react';
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Searchbar, SerachBar } from "react-native-paper";
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

export const RestaurantsScreen = () => {
  return (
      <SafeAreaView style={styles.container}>
        
        <View style={styles.search}>
          <Searchbar 
            placeholder="Search"
          />
        </View>
        
        <View style={styles.list}>
          <RestaurantInfoCard />
        </View>

      </SafeAreaView>
      
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    marginTop: StatusBar.currentHeight
  },
  search:{
    padding:16
  },
  list:{
    flex:1, 
    padding:16
  }
});