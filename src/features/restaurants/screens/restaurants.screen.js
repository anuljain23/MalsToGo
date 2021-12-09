import React, { useContext } from 'react';
import styled from 'styled-components';
import { FlatList } from 'react-native';
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { SafeArea } from '../../../components/utils/safe-area.component';
import { RestaurantContext } from '../../../services/restaurants/restaurant.context';
import { Spacer } from '../../../components/spacer/spacer.component';
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
  const {error, isLoading, restaurants} = useContext(RestaurantContext);
  return (
      <SafeArea>
        
        <SearchContainer>
          <Searchbar 
            placeholder="Search"
          />
        </SearchContainer>
        
        <RestaurantList 
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <Spacer position="bottom" size="medium">
                <RestaurantInfoCard restaurant={item}/>
              </Spacer>
            )
          }}
          keyExtractor={(item) => item.name}
        />

      </SafeArea>
      
  );
}