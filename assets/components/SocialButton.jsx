import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageLogo: {
    marginLeft: 5,
    width: 20,
    height: 20,
  },
});

export default function SocialButton({
  containerStyle,
  label,
  labelStyle,
  icon,
  iconPos,
  iconStyle,
  onPress,
}) {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={{ ...styles.socialContainer, ...containerStyle }}
    >
      {iconPos == 'LEFT' && <Image source={icon} style={{ ...styles.imageLogo, ...iconStyle }} />}
      <Text style={{ ...labelStyle, fontWeight: 'bold' }}>{label}</Text>
      {iconPos == 'RIGHT' && <Image source={icon} style={{ ...styles.imageLogo, ...iconStyle }} />}
    </TouchableOpacity>
  );
}
