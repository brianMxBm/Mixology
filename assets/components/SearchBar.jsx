import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon, { Icons } from '../theme/icons';
import colors from '../theme/colors';
import { WIDTH, HEIGHT } from '../../constants/dimensions';

const styles = StyleSheet.create({
  mainSearchContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    width: WIDTH * 0.88,
    height: HEIGHT * 0.06,
    borderRadius: 25,
    borderWidth: 1.3,
  },
  vwSearch: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    fontFamily: 'MontserratBold',
    fontSize: 15,
    letterSpacing: 2,
  },
});

export default function SearchBar({ searchScreen, style }) {
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
        <TouchableOpacity style={styles.searchContainer}>
          <View style={styles.vwSearch}>
            <Icon type={Icons.FontAwesome} size={24} color={colors.black} name="search" />
          </View>
          <Text style={[styles.textInput, { paddingTop: 15 }]}>Search Cocktails</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
