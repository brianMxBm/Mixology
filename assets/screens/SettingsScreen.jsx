import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../theme/colors';
import { signOut } from 'firebase/auth';
import { auth } from '../../client/firebase-config';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function SettingsScreen({ navigation }) {
  const logout = () => {
    signOut(auth)
      .then(() => {
        navigation.replace('Login');
      })
      .catch((error) => {
        console.log(error); //TODO: Implement Better Error Handlng
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => logout()}
        style={{ backgroundColor: colors.orange, padding: 30 }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
