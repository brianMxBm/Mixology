import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import colors from '../theme/colors';

const styles = StyleSheet.create({
  switchContainerOn: {
    width: 40,
    height: 20,
    paddingRight: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 10,
    backgroundColor: colors.orange,
  },
  switchContainerOff: {
    width: 40,
    height: 20,
    paddingRight: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 10,
    backgroundColor: colors.gray,
  },
  symbol: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});

export default function LoginSwitch({ value, onChange }) {
  return (
    <TouchableWithoutFeedback onPress={() => onChange(!value)}>
      <View style={{ flexDirection: 'row' }}>
        <View style={value ? styles.switchContainerOn : styles.switchContainerOff}>
          <View
            style={{ ...styles.symbol, backgroundColor: value ? colors.white : colors.black }}
          />
        </View>
        <Text
          style={{
            marginTop: 2,
            fontSize: 15,
            height: 25,
            color: colors.black,
            marginLeft: 10,
            fontWeight: 'bold',
          }}
        >
          Remember Me
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
