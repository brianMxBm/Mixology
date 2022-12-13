import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 40,
    borderWidth: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  greetingStyle: {
    fontFamily: 'Avenir-Roman',
    fontSize: 32,
    color: colors.lightBlack,
    marginTop: 5,
    fontWeight: 'light',
  },
  nameStyle: {
    fontFamily: 'Avenir-Roman',
    fontSize: 20,
    color: colors.black,
    fontWeight: 'bold',
  },
});

export default function DrinkHeader({ user }) {
  if (!user) {
    //TODO: Implemment loading animations.
    return <Text>hey</Text>;
  }
  return (
    <SafeAreaView>
      <View style={styles.headerWrapper}>
        <View>
          <Text style={styles.greetingStyle}>Take A Spirit Search,</Text>
          <Text style={styles.nameStyle}>
            {user.userName.charAt(0).toUpperCase() + user.userName.slice(1)}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
