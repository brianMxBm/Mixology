import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useFormikContext } from 'formik';
import { WIDTH } from '../../constants/dimensions';
import colors from '../theme/colors';

const styles = StyleSheet.create({
  submit: {
    height: 50,
    width: WIDTH - 40,
    backgroundColor: colors.white,
    borderRadius: 8,
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
    color: colors.black,
  },
});

const FormButton = ({ title, color }) => {
  const { handleSubmit, isSubmitting } = useFormikContext();
  return (
    <TouchableOpacity
      onPress={() => handleSubmit()}
      style={[styles.submit, { backgroundColor: isSubmitting ? colors.gray : color }]}
    >
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;
