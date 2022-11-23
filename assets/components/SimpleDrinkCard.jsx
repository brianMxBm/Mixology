import { View, Text, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../theme/colors';
import React from 'react';

export default function SimpleDrinkCard({ food }) {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      underlayColor={colors.white}
      activeOpacity={0.9}
      onPress={() => navigation.navigate('DetailsScreen', food)}
    >
      <View style={style.card}>
        <View style={{ alignItems: 'center', top: -40 }}>
          <Image source={food.image} style={{ height: 120, width: 120 }} />
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{food.name}</Text>
          <Text style={{ fontSize: 14, color: colors.grey, marginTop: 2 }}>{food.ingredients}</Text>
        </View>
        <View
          style={{
            marginTop: 10,
            marginHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>${food.price}</Text>
          <View style={style.addToCartBtn}>
            <Icon name="add" size={20} color={colors.white} />
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}
