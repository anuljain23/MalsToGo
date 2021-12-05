import React from 'react';
import styled from 'styled-components';
import { StatusBar, SafeAreaView } from 'react-native';
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const SafeArea = styled(SafeAreaView)`
  flex:1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding-top: ${(props) => props.theme.space[3]};
  padding-left: ${(props) => props.theme.space[3]};
  padding-right: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[0]};
`;

const RestaurantListContainer = styled.View`
  flex:1;
  padding:${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  return (
      <SafeArea>
        
        <SearchContainer>
          <Searchbar 
            placeholder="Search"
          />
        </SearchContainer>
        
        <RestaurantListContainer>
          <RestaurantInfoCard />
        </RestaurantListContainer>

      </SafeArea>
      
  );
}