import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import DrinkCard from '../components/DrinkCard';
import SimpleDrinkCard from '../components/SimpleDrinkCard';
import { db } from '../../client/firebase-config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import colors from '../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  drinkGreeting: {
    fontFamily: 'Avenir-Roman',
    fontSize: 40,
    color: colors.black,
    marginTop: 5,
    fontWeight: 'light',
  },
  categoryGreeting: {
    fontFamily: 'Avenir-Roman',
    fontSize: 20,
    color: colors.black,
    fontWeight: 'bold',
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 40,
    borderWidth: 2,
  },
});

export default function DrinkCategoryScreen({ route }) {
  const [loading, setLoading] = useState(true);
  const [drinks, setDrinks] = useState([]);
  const { category } = route.params;
  const getDrinks = async () => {
    //TODO: Implement with redux
    const drinkData = new Array();
    const queryDrink = query(collection(db, 'drinks'), where('category ', '==', category));
    const querySnapShot = await getDocs(queryDrink);
    querySnapShot.forEach((doc) => {
      //TODO: Add paginiation
      drinkData.push({
        image: doc.data().image,
        name: doc.data().name,
        category: doc.data()['category '],
        ingredients: doc.data().ingredients,
        instructions: doc.data().instructions,
      });
    });
    setDrinks(drinkData);
  };

  useEffect(() => {
    getDrinks();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={styles.headerWrapper}>
        <View>
          <Text style={styles.drinkGreeting}>How's that...</Text>
          <Text style={styles.categoryGreeting}>{category.toUpperCase()} lookin?</Text>
        </View>
        <View>
          <>
            {category == 'brandy' ? ( //TODO: Refactor, this is horrid. String Interpolation doesn't work since images are statically indexed by the ES6?  Refer to issue:  https://github.com/facebook/react-native/issues/2481
              <Image style={styles.icon} source={require('../images/drinkIcons/brandy.png')} />
            ) : category == 'wine' ? (
              <Image style={styles.icon} source={require('../images/drinkIcons/wine.png')} />
            ) : category == 'gin' ? (
              <Image style={styles.icon} source={require('../images/drinkIcons/gin.png')} />
            ) : category == 'beer' ? (
              <Image style={styles.icon} source={require('../images/drinkIcons/beer.png')} />
            ) : category == 'vodka' ? (
              <Image style={styles.icon} source={require('../images/drinkIcons/vodka.png')} />
            ) : category == 'tequila' ? (
              <Image style={styles.icon} source={require('../images/drinkIcons/tequilla.png')} />
            ) : category == 'sake' ? (
              <Image style={styles.icon} source={require('../images/drinkIcons/sake.png')} />
            ) : category == 'scotch' ? (
              <Image style={styles.icon} source={require('../images/drinkIcons/scotch.png')} />
            ) : null}
          </>
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 20 }}
        numColumns={2}
        data={drinks}
        renderItem={({ item }) => <SimpleDrinkCard drink={item} />}
      />
    </SafeAreaView>
  );
}
