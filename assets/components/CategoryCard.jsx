import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useFontLoader } from '../../hooks/useFonts';
import colors from '../theme/colors';
import { HEIGHT, WIDTH } from '../../constants/dimensions';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  categoriesWrapper: {
    marginTop: 20,
  },
  categoriesTitle: {
    fontFamily: 'Avenir-Roman',
    fontSize: 16,
    paddingHorizontal: 20,
  },
  seeAllStyle: {
    fontFamily: 'Avenir-Roman',
    fontSize: 16,
    paddingHorizontal: 20,
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  categoryItemWrapper: {
    marginRight: 20,
    borderRadius: 20,
    shadowColor: colors.orange,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 9,
    height: HEIGHT * 0.16,
    borderColor: colors.black,
    borderWidth: 1.9,
  },
  categoryItemTitle: {
    textAlign: 'center',
    fontFamily: 'Avenir-Roman',
    fontSize: 15,
    marginTop: 10,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: 'center',
    marginHorizontal: 20,
  },

  categorySelectIcon: {
    alignSelf: 'center',
  },
});

const categoriesData = [
  {
    id: '1',
    image: require('../images/drinkIcons/wine.png'),
    title: 'Wine',
    selected: true,
  },
  {
    id: '2',
    image: require('../images/drinkIcons/brandy.png'),
    title: 'Brandy',
    selected: false,
  },
  {
    id: '3',
    image: require('../images/drinkIcons/gin.png'),
    title: 'Gin',
    selected: false,
  },
  {
    id: '4',
    image: require('../images/drinkIcons/beer.png'),
    title: 'Beer',
    selected: false,
  },
  {
    id: '5',
    image: require('../images/drinkIcons/vodka.png'),
    title: 'Vodka',
    selected: false,
  },
  {
    id: '6',
    image: require('../images/drinkIcons/tequilla.png'),
    title: 'Tequila',
    selected: false,
  },
  {
    id: '7',
    image: require('../images/drinkIcons/sake.png'),
    title: 'Sake',
    selected: false,
  },
  {
    id: '8',
    image: require('../images/drinkIcons/scotch.png'),
    title: 'Scotch',
    selected: false,
  },
];

export default function CategoryCard() {
  const fontsLoaded = useFontLoader();
  const navigation = useNavigation();

  if (!fontsLoaded) {
    return <></>;
  }

  function renderCategoryItem({ item }) {
    const lowerCaseTitle = item.title.toLowerCase();
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Category', { category: lowerCaseTitle })}
      >
        <View style={{ height: HEIGHT * 0.19 }}>
          <View
            style={[
              styles.categoryItemWrapper,
              {
                marginLeft: item.id == 1 ? 20 : 0,
              },
            ]}
          >
            <Image source={item.image} style={styles.categoryItemImage} />
            <Text style={styles.categoryItemTitle}>{item.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.categoriesWrapper}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.categoriesTitle}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllStyle}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoriesListWrapper}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={categoriesData}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
        />
      </View>
    </View>
  );
}
