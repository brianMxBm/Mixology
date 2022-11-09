import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import colors from '../theme/colors';
import React from 'react';
import { HEIGHT, WIDTH } from '../../constants/dimensions';
import DrinkScreen from '../screens/DrinkScreen';
import Icon, { Icons } from '../theme/icons';

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  dayTitle: {
    fontFamily: 'MontserratBold',
    fontSize: 16,
  },
  popularCardWrapper: {
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: colors.white,
    borderRadius: 20,
    borderWidth: 1.5,
    paddingTop: 10,
    paddingLeft: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    width: WIDTH * 0.89,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 2,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  rating: {
    fontFamily: 'MontserratBold',
    fontSize: 15,
    color: colors.textDark,
    marginLeft: 5,
  },
  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularCardImage: {
    width: 100,
    height: 135,
    resizeMode: 'contain',
  },
  popularTopText: {
    marginLeft: 5,
    fontFamily: 'MontserratBold',
    fontSize: 20,
  },
  popularTitlesWrapper: {
    marginTop: 10,
    width: WIDTH * 0.55,
  },
  popularCardRight: {
    marginLeft: -10,
    paddingBottom: 20,
  },
  popularCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: -20,
  },
  popularTitlesTitle: {
    fontFamily: 'MontserratBold',
    fontSize: 14,
    color: colors.black,
  },
  popularTitlesWeight: {
    fontFamily: 'MontserratMedium',
    fontSize: 12,
    color: colors.black,
    marginTop: 5,
  },
});

const drinkData = [
  {
    id: '1',
    image: require('C:/Users/Brian/Desktop/Mixology/assets/martiniData.png'),
    title: 'Martini Bomb',
  },
  {
    id: '2',
    image: require('C:/Users/Brian/Desktop/Mixology/assets/eggnogData.png'),
    title: 'Virgin Eggnog',
  },
];

const renderDrinkItem = ({ item }) => {
  return (
    <TouchableOpacity
      style={{ marginLeft: item.id == 1 ? 0 : 20 }}
      key={item.id}
      onPress={() => console.log(item.title)}
    >
      <View style={[styles.popularCardWrapper]}>
        <View>
          <View>
            <View style={styles.popularTopWrapper}>
              <Icon type={Icons.Ionicons} size={25} color={colors.errors} name="flame"></Icon>
              <Text style={styles.popularTopText}>{item.title}</Text>
            </View>
            <View style={styles.popularTitlesWrapper}>
              <Text style={styles.popularTitlesTitle}>Instructions</Text>
              <Text numberOfLines={1} style={styles.popularTitlesWeight}>
                The shot of sake is dropped into the beer, causing it to fizz violently. The drink
                should then be consumed immediately.{item.weight}
              </Text>
            </View>
          </View>
          <View style={styles.popularCardBottom}>
            <View style={styles.ratingWrapper}>
              <Icon type={Icons.FontAwesome} size={20} name={'heart'} color={colors.like} />
              <Text style={styles.rating}>24{item.rating}</Text>
              <Icon type={Icons.FontAwesome} size={20} name={'star'} color={colors.rating} />
              <Text style={styles.rating}>54{item.rating}</Text>
            </View>
          </View>
        </View>
        <View style={styles.popularCardRight}>
          <Image source={item.image} style={styles.popularCardImage} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function DrinkCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.dayTitle}>Drink Of The Day</Text>
      <FlatList
        contentContainerStyle={{ alignItems: 'center' }}
        data={drinkData}
        horizontal={true}
        renderItem={renderDrinkItem}
        keyExtractor={(item) => item.id}
        snapToAlignment={'center'}
        showsHorizontalScrollIndicator={false}
        scrollToInde={2}
      />
    </View>
  );
}
