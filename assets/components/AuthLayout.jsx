import { View, Text, StyleSheet, Image } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import React from 'react';
import colors from '../theme/colors';

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: colors.white,
  },
  titleContainer: {
    marginTop: 24,
  },
});

export default function AuthLayout({ title, subTitle, titleContainerStyle, children }) {
  return (
    <View style={styles.authContainer}>
      <KeyboardAvoidingView
        keyBoardDismissMode="on-drag"
        contentContainerStyle={{ flex: 1, paddingHorizontal: 24 }}
      >
        <View style={{ alignItems: 'center' }}></View>
        <View style={[styles.titleContainer]}>
          <Text style={{ fontSize: 50, textAlign: 'center', fontWeight: 'bold' }}>{title}</Text>
          <Text style={{ textAlign: 'center', color: colors.gray, marginTop: 8 }}>{subTitle}</Text>
        </View>
        {children}
      </KeyboardAvoidingView>
    </View>
  );
}
