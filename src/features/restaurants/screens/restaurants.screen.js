import React from 'react';
import styled from 'styled-components';
import { FlatList } from 'react-native';
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { SafeArea } from '../../../components/utils/safe-area.component';

const SearchContainer = styled.View`
  padding-top: ${(props) => props.theme.space[3]};
  padding-left: ${(props) => props.theme.space[3]};
  padding-right: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[0]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle:{
    padding:16,
  }
})``;

export const RestaurantsScreen = () => {
  return (
      <SafeArea>
        
        <SearchContainer>
          <Searchbar 
            placeholder="Search"
          />
        </SearchContainer>
        
        <RestaurantList 
          data={[
            {name:1}, 
            {name:2}, 
            {name:3}, 
            {name:4}, 
            {name:5}, 
            {name:6}, 
            {name:7}, 
            {name:8}, 
            {name:9}, 
            {name:10}
          ]}
          renderItem={() => <RestaurantInfoCard />}
          keyExtractor={(item) => item.name}
        />

      </SafeArea>
      
  );
}