import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';
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
    fontFamily: 'Avenir-Roman',
  },
});

export default function Button({ buttonContainerStyle, label, labelStyle, onPress }) {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={[styles.touchableStyle, buttonContainerStyle, { backgroundColor: colors.orange }]}
    >
      <Text style={[styles.textColor, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
}
