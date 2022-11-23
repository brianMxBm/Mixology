import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    borderWidth: 5,
    backgroundColor: colors.pill,
  },
});

export default function Pill(styles, pillText) {
  return (
    <View style={[styles.container, styles]}>
      <Text>{pillText}</Text>
    </View>
  );
}
