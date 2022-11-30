import { View, Text } from 'react-native';
import React from 'react';
import Dots from './Dots';

export default function FooterLogo() {
  return (
    <View style={{ height: 160 }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Dots />
      </View>
    </View>
  );
}
