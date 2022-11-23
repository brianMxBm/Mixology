import { View, StyleSheet, Image } from 'react-native';
import React from 'react';
import { WINDOW } from '../../constants/dimensions';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: WINDOW.HEIGHT > 800 ? 50 : 25,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  imageStyle: {
    width: WINDOW.WIDTH * 0.9,
    height: 200,
  },
});

export default function HeaderLogo() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        resizeMode="contain"
        source={require('../images/logo.png')}
      />
    </View>
  );
}
