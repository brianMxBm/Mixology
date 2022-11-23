import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { useFormikContext } from 'formik';
import React from 'react';
import colors from '../theme/colors';

const styles = StyleSheet.create({
  errorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 20,
    marginHorizontal: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    height: 55,
    paddingHorizontal: 24,
    marginTop: 8,
    borderRadius: 25,
    backgroundColor: colors.gray,
  },
});

export default function Input({
  containerStyle,
  label,
  placeholder,
  inputStyle,
  prependComponent,
  appendComponent,
  name,
  secure,
  included,
  keyboardType = 'default',
  autoCompleteType = 'off',
  autoCapitalize = 'none',
}) {
  const { values, errors, touched, handleChange, handleBlur } = useFormikContext();
  const value = values[name];
  const error = errors[name];
  const isInputTouched = touched[name];

  return (
    <View style={{ ...containerStyle }}>
      <View style={styles.errorContainer}>
        <Text style={{ color: colors.black, fontWeight: 'bold' }}>{label}</Text>
        <>
          {error && isInputTouched ? (
            <Text style={{ fontWeight: 'bold', color: colors.errors }}>{error}</Text>
          ) : null}
        </>
      </View>
      <View style={styles.inputContainer}>
        {prependComponent}
        <TextInput
          style={{ flex: 1, ...inputStyle }}
          placeholder={placeholder}
          value={value}
          secureTextEntry={secure}
          onBlur={handleBlur(name)}
          onChangeText={handleChange(name)}
          keyboardType={keyboardType}
          autoComplete={autoCompleteType}
          autoCapitalize={autoCapitalize}
        />
        {included ? (
          <>
            {error && isInputTouched ? (
              <View style={{ justifyContent: 'center' }}>
                <Image
                  style={{ height: 20, width: 20, tintColor: colors.errors }}
                  source={require('../images/icons/incorrect.png')}
                />
              </View>
            ) : (
              <View style={{ justifyContent: 'center' }}>
                <Image
                  style={{ height: 20, width: 20, tintColor: colors.green }}
                  source={require('../images/icons/correct.png')}
                />
              </View>
            )}
          </>
        ) : (
          appendComponent
        )}
      </View>
    </View>
  );
}
