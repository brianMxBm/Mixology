import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { onboardData } from '../screens/OnboardingScreen';
import { WINDOW } from '../../constants/dimensions';
import colors from '../theme/colors';

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function Dots({ scrollX }) {
  const dotPos = Animated.divide(scrollX, WINDOW.WIDTH);
  return (
    <View style={styles.dotsContainer}>
      {onboardData.map((item, index) => {
        const dotColor = dotPos.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [10, 30, 10],
          extrapolate: 'clamp',
        });
        const dotWidth = dotPos.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [colors.black, colors.white, colors.black],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={`dot-${index}`}
            style={{
              borderRadius: 5,
              marginHorizontal: 6,
              height: 10,
              width: dotWidth,
              backgroundColor: dotColor,
            }}
          />
        );
      })}
    </View>
  );
}
