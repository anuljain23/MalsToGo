import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import React from 'react';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { ThemeProvider } from 'styled-components';
import { theme } from "./src/infrasctucture/theme";
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';


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
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto"/>
    </>
  );
}
