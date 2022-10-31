import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppLink from './AppLink';

const style = StyleSheet.create({
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
});

export default function LinkNavigator({
  leftLinkText,
  rightLinkText,
  onLeftLinkPress,
  onRightLinkPress,
}) {
  return (
    <View style={style.linkContainer}>
      <AppLink onPress={onLeftLinkPress} title={leftLinkText} />
      <AppLink onPress={onRightLinkPress} title={rightLinkText} />
    </View>
  );
}
