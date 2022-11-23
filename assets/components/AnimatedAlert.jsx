import { View, Text, StyleSheet, Animated, ViewStyle, Easing } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { WIN_WIDTH } from '../../constants/dimensions';
import colors from '../theme/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    color: colors.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default function AnimatedAlert({ style, type, text }) {
  const height = useRef(new Animated.Value(0)).current;
  const backgroundColor = type === 'error' ? colors.errors : colors.confirm;
  useEffect(() => {
    Animated.sequence([
      Animated.timing(height, {
        toValue: 20,
        duration: 1000,
        useNativeDriver: false,
        easing: Easing.ease,
      }),
      Animated.timing(height, {
        //TODO: Find a better way to pause mid animation?
        toValue: 20,
        duration: 3500,
        useNativeDriver: false,
        easing: Easing.ease,
      }),

      Animated.timing(height, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
        easing: Easing.ease,
      }),
    ]).start();
  }, []);
  return (
    <Animated.View style={[style, styles.container, { height, backgroundColor }]}>
      <Text style={styles.text}>{text}</Text>
    </Animated.View>
  );
}
