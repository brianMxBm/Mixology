import { View, Text, SafeAreaView, FlatList } from 'react-native';
import React from 'react';
import DrinkCategoryHeader from '../components/DrinkHeader';
import SearchBar from '../components/SearchBar';
import { WIDTH } from '../../constants/dimensions';

export default function DrinkScreen() {
  const [drinks, setDrinks] = useState([]);
  //const [loading, setLoading] = useState(true);
  const getDrinks = async () => {
    //TODO: Implement with redux
    const drinkData = new Array();
    const queryDrink = query(collection(db, 'drinks'), where('category ', '==', category));
    const querySnapShot = await getDocs(queryDrink);
    querySnapShot.forEach((doc) => {
      drinkData.push(doc.data());
    });
    console.log(drinkData);
    setDrinks(drinkData);
  };
  return (
    <SafeAreaView>
      <DrinkCategoryHeader />
      <View style={{ marginTop: 20 }}>
        <SearchBar barStyle={{ width: WIDTH * 0.5 }} />
      </View>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={drinks}
          renderItem={({ item }) => <SimpleDrinkCard drink={item} />}
        />
      </View>
    </SafeAreaView>
  );
}
