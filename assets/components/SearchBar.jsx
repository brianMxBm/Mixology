import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon, { Icons } from '../theme/icons';
import colors from '../theme/colors';
import { WIDTH, HEIGHT } from '../../constants/dimensions';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  mainSearchContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 6, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    width: WIDTH * 0.9,
    height: HEIGHT * 0.06,
    borderRadius: 15,
    borderWidth: 0.5,
  },
  vwSearch: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    fontFamily: 'Avenir-Roman',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.4,
    marginHorizontal: 20,
  },
});

export default function SearchBar({ searchScreen, style, barStyle }) {
  const navigation = useNavigation();
  return (
    <View style={[style, styles.mainSearchContainer]}>
      {searchScreen ? (
        <View style={styles.searchContainer}>
          <View style={styles.vwSearch}>
            <Icon type={Icons.FontAwesome} size={24} color={colors.black} name="search" />
          </View>
          <TextInput
            placeholderTextColor={colors.black}
            placeholder="Search Cocktails"
            style={styles.textInput}
          />
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => navigation.navigate('Drink')}
          style={[barStyle, styles.searchContainer]}
        >
          <Text style={[styles.textInput, { paddingTop: 15 }]}>Search For Cocktails...</Text>
          <View style={styles.vwSearch}>
            <Icon type={Icons.FontAwesome} size={20} color={colors.black} name="search" />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}
