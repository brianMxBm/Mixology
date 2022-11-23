import { View, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon, { Icons } from '../theme/icons';
import React from 'react';
import colors from '../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
    borderWidth: 1.5,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
});

export default function Header() {
  return (
    <SafeAreaView>
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => console.log('Menu Clicked')}>
          <Icon type={Icons.Feather} size={25} color={colors.black} name="menu"></Icon>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Profile Clicked')}>
          <Image source={require('../images/profilePicture.png')} style={styles.profileImage} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
