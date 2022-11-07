import { useFonts } from 'expo-font';
import MontserratBold from '../assets/fonts/MontserratBold.ttf';
import MontserratRegular from '../assets/fonts/MontserratRegular.ttf';

export const useFontLoader = () => {
  const [fontsLoaded] = useFonts({
    MontserratBold,
    MontserratRegular,
  });
  return fontsLoaded;
};
