import React from 'react';
import { View, Text, TouchableHighlight, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../theme/colors';
import { CARD_WIDTH } from '../../constants/dimensions';

const styles = StyleSheet.create({
  card: {
    height: 220, //TODO: Don't have a height like this.
    width: CARD_WIDTH,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: colors.white,
    shadowOffset: { width: 0, height: 10 },
    shadowColor: colors.black,
    shadowRadius: 9,
    shadowOpacity: 0.2,
    borderColor: colors.black,
    borderWidth: 0.5,
  },
});

export default function SimpleDrinkCard({ drink }) {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      underlayColor={colors.white}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('DetailsScreen', drink)}
      style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
    >
      <View style={styles.card}>
        <View style={{ alignItems: 'center' }}>
          <Image source={{ uri: drink.image }} style={{ height: 120, width: 120 }} />
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <Text ellipsizeMode="tail" numberOfLines={1} style={{ fontSize: 15, fontWeight: 'bold' }}>
            {drink.name}
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            marginHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{drink.category}</Text>
          <View></View>
        </View>
      </View>
    </TouchableHighlight>
  );
}
