import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { ThemeProvider } from 'styled-components';
import { theme } from "./src/infrasctucture/theme";
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeArea } from './src/components/utils/safe-area.component';
import { Ionicons } from '@expo/vector-icons';
import { restaurantRequest } from './src/services/restaurants/restaurants.service';
import { RestaurantContextProvider } from './src/services/restaurants/restaurant.context';

const TAB_ICON = {
  Restaurants:"md-restaurant",
  Map:"md-map",
  Settings:"md-settings"
}

const Settings = () => {
  return (
    <SafeArea>
      <Text>Settings</Text>
    </SafeArea>
  )
}

const Map = () => {
  return (
    <SafeArea>
      <Text>Maps</Text>
    </SafeArea>
  )
}

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),    
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    headerShown: false
  }
}

const Tab = createBottomTabNavigator();

export default function App() {

  const [OswladLoded] = useOswald({
    Oswald_400Regular,
  })
  
  const [LatoLoded] = useLato({
    Lato_400Regular,
  })

  if(!OswladLoded || !LatoLoded){
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={createScreenOptions}
            >
              <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="Map" component={Map} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto"/>
    </>
  );
}
