import { useFonts } from 'expo-font';
import MontserratBold from '../assets/fonts/MontserratBold.ttf';
import MontserratRegular from '../assets/fonts/MontserratRegular.ttf';
import MontserratMedium from '../assets/fonts/MontserratMedium.ttf';
export const useFontLoader = () => {
  const [fontsLoaded] = useFonts({
    MontserratBold,
    MontserratRegular,
    MontserratMedium,
  });
  return fontsLoaded;
};
