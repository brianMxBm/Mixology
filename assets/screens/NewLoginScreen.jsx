import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';
import SvgComponent from '../theme/headerSVG';
import * as yup from 'yup';
import { WIDTH } from '../../constants/dimensions';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    color: colors.black,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    color: colors.gray,
  },
  error: {
    color: colors.errors,
  },
  containerSVG: {
    width: WIDTH,
    justifyContent: 'flex-start',
  },
});

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid Email!').required('Email Is Missing'),
  password: yup.string().trim().required('Password Is Required'),
});

export default function NewLoginScreen() {
  return (
    <View styles={styles.mainContainer}>
      <View style={styles.containerSVG}>
        <SvgComponent />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Mixology</Text>
      </View>
    </View>
  );
}
