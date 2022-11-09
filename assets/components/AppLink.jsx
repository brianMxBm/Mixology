import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../theme/colors';

const styles = StyleSheet.create({
  link: {
    color: colors.links,
    fontSize: 15,
  },
});

const AppLink = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.link}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppLink;
