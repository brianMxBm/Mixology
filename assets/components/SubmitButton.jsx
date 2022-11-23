import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
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
  },
});

export default function SubmitButton({ buttonContainerStyle, label, labelStyle }) {
  const { handleSubmit, isSubmitting } = useFormikContext();
  return (
    <TouchableOpacity
      onPress={() => handleSubmit()}
      style={[
        styles.touchableStyle,
        buttonContainerStyle,
        { backgroundColor: isSubmitting ? colors.gray : colors.orange },
      ]}
    >
      <Text style={[styles.textColor, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
}
