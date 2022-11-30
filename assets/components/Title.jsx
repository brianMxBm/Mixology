import { View, Text } from 'react-native';
import React from 'react';

export default function Title({ title, subTitle, titleStyle, subTitleStyle, parentStyle }) {
  return (
    <View style={parentStyle}>
      <Text style={subTitleStyle}>{subTitle}</Text>
      <Text style={titleStyle}>{title}</Text>
    </View>
  );
}
