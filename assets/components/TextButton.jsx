import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import colors from '../theme/colors';

const styles = StyleSheet.create({
  touchableStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.orange,
  },
  textColor: {
    color: colors.white,
  },
});

export default function TextButton({ buttonContainerStyle, label, labelStyle, onPress }) {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={[styles.touchableStyle, buttonContainerStyle]}
    >
      <Text style={[styles.textColor, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
}
