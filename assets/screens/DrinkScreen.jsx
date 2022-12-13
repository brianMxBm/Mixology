import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native';
import { db } from '../../client/firebase-config';
import { doc, getDoc, limit, collection, getDocs, query } from 'firebase/firestore';
import { UserContext } from '../../utils/UserContext';
import React, { useContext, useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import SimpleDrinkCard from '../components/SimpleDrinkCard';
import DrinkHeader from '../components/DrinkHeader';

export default function DrinkScreen() {
  const user = useContext(UserContext); //TODO: Repeated again. Either utilze another provider or use redux to only query once.
  const [currUser, setCurrUser] = useState();
  const [drinks, setDrinks] = useState([]);
  const getDrinks = async () => {
    //TODO: Implement with redux
    const drinkData = new Array();
    const queryDrink = query(collection(db, 'drinks'), limit(102));
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
  const getUserDetails = async () => {
    try {
      const userRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(userRef);
      setCurrUser(docSnap.data());
    } catch (error) {
      console.log(error); //TODO: Implement actual error handling
    }
  };

  useEffect(() => {
    getUserDetails();
    getDrinks();
  }, []);

  if (!currUser || !drinks) {
    return <Text>..loading</Text>;
  }
  return (
    <View style={StyleSheet.container}>
      <ScrollView>
        <DrinkHeader user={currUser} />
        <SearchBar searchScreen={true} style={{ paddingTop: 25 }} />
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 20 }}
          numColumns={2}
          data={drinks}
          renderItem={({ item }) => <SimpleDrinkCard drink={item} />}
        />
      </ScrollView>
    </View>
  );
}
