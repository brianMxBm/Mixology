import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { useFontLoader } from '../../hooks/useFonts';
import { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../utils/UserContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../client/firebase-config';
import React from 'react';
import Header from '../components/Header';
import colors from '../theme/colors';
import SearchBar from '../components/SearchBar';
import CategoryCard from '../components/CategoryCard';
import DailyDrink from '../components/DailyDrink';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  titleContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  subTitleStyle: {
    fontFamily: 'Avenir-Roman',
    fontSize: 16,
    color: colors.black,
  },
});

export default function HomeScreen() {
  const fontsLoaded = useFontLoader();
  const user = useContext(UserContext);
  const [currUser, setCurrUser] = useState();

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
  }, []);

  if (!currUser) {
    //TODO: This is a buffer, there's a slight amount of time where the DOM doesn't get the user info so it says it's undefined. DOM renders first that's why.
    return <Text>Loading..</Text>;
  }

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header user={currUser} />
        <SearchBar searchScreen={false} style={{ paddingTop: 25 }} />
        <DailyDrink></DailyDrink>
        <CategoryCard />
      </ScrollView>
    </View>
  );
}
