import { View, Text } from 'react-native';
import React from 'react';

export default function Heading({ containerStyle, title, leftSection, rightSection }) {
  return (
    <View style={{ flexDirection: 'row', ...containerStyle }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontWeight: 'bold ' }}></Text>
      </View>
    </View>
  );
}
