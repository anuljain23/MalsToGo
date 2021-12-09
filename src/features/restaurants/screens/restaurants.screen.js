import React, { useContext } from 'react';
import styled from 'styled-components';
import { FlatList } from 'react-native';
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { SafeArea } from '../../../components/utils/safe-area.component';
import { RestaurantContext } from '../../../services/restaurants/restaurant.context';
import { ActivityIndicator, Colors } from 'react-native-paper';

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

const LoadingContainer = styled.View`
  position:absolute;
  top:50%;
  left:50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left:-25px;
`;

export const RestaurantsScreen = () => {
  const {error, isLoading, restaurants} = useContext(RestaurantContext);
  return (
      <SafeArea>
        {isLoading && (
          <LoadingContainer>
            <Loading 
              size={50}
              animating={true}
              color={Colors.blue300}
            />
          </LoadingContainer>
        )}
        <SearchContainer>
          <Searchbar 
            placeholder="Search"
          />
        </SearchContainer>
        
        <RestaurantList 
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <RestaurantInfoCard restaurant={item}/>
            )
          }}
          keyExtractor={(item) => item.name}
        />

      </SafeArea>
      
  );
}