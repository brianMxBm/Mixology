import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { HEIGHT, WIDTH } from '../../constants/dimensions';
import colors from '../theme/colors';
import Icon, { Icons } from '../theme/icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  bgImage: {
    height: HEIGHT * 0.4,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backIcon: {
    marginTop: 60,
  },
  drinkDetails: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
  drinkText: {
    fontFamily: 'Avenir-Roman',
    fontSize: 32,
    color: colors.black,
  },
  categoryText: {
    fontFamily: 'Avenir-Roman',
    fontSize: 20,
    color: colors.black,
  },
  textWrapper: { marginTop: 30, marginHorizontal: 20 },
  descriptionContainer: {
    flex: 1,
    backgroundColor: colors.orange,
    marginTop: -20,
    borderRadius: 25,
  },
  infoWrapper: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  infoTitle: {
    fontFamily: 'Avenir-Roman',
    fontSize: 20,
    color: colors.black,
  },
  infoTextWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 5,
  },
  drinkCategory: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default function DrinkDetailScreen({ route }) {
  const { drink } = route.params;
  const navigation = useNavigation(); //TODO: We already have acess to the nav prop, don't redfine, only did for quick deployment.
  console.log(drink);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 20,
        }}
      >
        <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
          <Icon type={Icons.Entypo} name="chevron-left" size={32} color={colors.black} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.backIcon}>
          <Icon type={Icons.FontAwesome} size={32} name={'heart'} color={colors.orange} />
        </TouchableOpacity>
      </View>

      <View style={styles.bgImage}>
        <Image
          style={{ marginTop: 50, height: HEIGHT * 0.3, width: WIDTH * 0.6 }}
          source={{ uri: drink.image }}
        />
      </View>
      <View style={styles.drinkDetails}>
        <Text style={styles.drinkText}>{drink.name}</Text>
        <View style={styles.drinkCategory}>
          <Text style={styles.categoryText}>{drink.category.toUpperCase()}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          <Icon type={Icons.FontAwesome} size={32} name={'heart'} color={colors.orange} />
          <Text style={styles.rating}>24</Text>
          <Icon
            style={{ marginLeft: 5 }}
            type={Icons.FontAwesome}
            size={32}
            name={'star'}
            color={colors.black}
          />
          <Text style={styles.rating}>54</Text>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.textWrapper}>
          <Text
            style={{
              fontFamily: 'Avenir-Roman',
              fontSize: 25,
              color: colors.black,
              fontWeight: 'bold',
            }}
          >
            Ingredients:
          </Text>
          <Text style={{ fontFamily: 'Avenir-Roman', color: colors.black, fontWeight: 'bold' }}>
            {drink.ingredients}
          </Text>
        </View>
        <View style={styles.textWrapper}>
          <Text
            style={{
              fontFamily: 'Avenir-Roman',
              fontSize: 25,
              color: colors.black,
              fontWeight: 'bold',
            }}
          >
            Instructions:
          </Text>
          <Text style={{ fontFamily: 'Avenir-Roman', color: colors.black, fontWeight: 'bold' }}>
            {drink.instructions.split('/,')}
          </Text>
        </View>
      </View>
    </View>
  );
}
