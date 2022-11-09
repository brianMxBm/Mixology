import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { useFormikContext } from 'formik';
import { WIN_HEIGHT, WIN_WIDTH } from '../../constants/dimensions';
import colors from '../theme/colors';

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: WIN_HEIGHT / 15,
    borderColor: colors.gray,
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: colors.gray,
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    color: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: WIN_WIDTH / 1.5,
    height: WIN_HEIGHT / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
function FormInput({ placeholderText, name, style, secure }) {
  const { values, errors, touched, handleChange, handleBlur } = useFormikContext();
  const value = values[name];
  const error = errors[name];
  const isInputTouched = touched[name];
  return (
    <View>
      <>
        {error && isInputTouched ? (
          <Text style={{ color: colors.errors, paddingHorizontal: 5 }}>{error}</Text>
        ) : null}
      </>
      <View style={[styles.inputContainer, style]}>
        <TextInput
          value={value}
          secureTextEntry={secure ? true : false}
          style={styles.input}
          onChangeText={handleChange(name)}
          numberOfLines={1}
          onBlur={handleBlur(name)}
          placeholder={placeholderText}
          placeholderTextColor={colors.placeholderText}
        />
      </View>
    </View>
  );
}

export default FormInput;
