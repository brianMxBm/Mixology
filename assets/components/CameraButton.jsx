import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../theme/colors';
import Icon from '../theme/icons';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default function CameraButton({ type, title, onPress, name, color }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Icon type={type} name={name} size={28} color={color} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
