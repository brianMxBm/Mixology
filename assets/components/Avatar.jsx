import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useCallback, useRef, useState } from 'react';
import Icon, { Icons } from '../theme/icons';
import colors from '../theme/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: colors.gray,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Avatar({ route }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.avatarPlaceholder} onPress={() => onPress()}>
        <Icon type={Icons.Ionicons} size={40} color={colors.black} name="ios-add" />
      </TouchableOpacity>
    </View>
  );
}
