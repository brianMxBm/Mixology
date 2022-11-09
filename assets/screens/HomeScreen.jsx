import { View, StyleSheet, ScrollView } from 'react-native';
import { useFontLoader } from '../../hooks/useFonts';
import Title from '../components/Title';
import React from 'react';
import Header from '../components/Header';
import colors from '../theme/colors';
import SearchBar from '../components/SearchBar';
import CategoryCard from '../components/CategoryCard';
import DrinkCard from '../components/DrinkCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  subTitleStyle: {
    fontFamily: 'MontserratRegular',
    fontSize: 16,
    color: colors.black,
  },
  titleStyle: {
    fontFamily: 'MontserratBold',
    fontSize: 25,
    color: colors.black,
    marginTop: 5,
  },
});

export default function HomeScreen() {
  const fontsLoaded = useFontLoader();

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <Title
          title="Take a Spirit Search..."
          subTitle="Home"
          titleStyle={styles.titleStyle}
          subTitleStyle={styles.subTitleStyle}
          parentStyle={styles.titleContainer}
        />
        <SearchBar searchScreen={false} style={{ paddingTop: 10 }} />
        <DrinkCard />
        <CategoryCard />
      </ScrollView>
    </View>
  );
}
