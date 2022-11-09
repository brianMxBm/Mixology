import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FormInput from '../components/FormInput';
import CustomFormik from '../components/CustomFormik';
import FormButton from '../components/FormButton';
import colors from '../theme/colors';
import LinkNavigator from '../components/LinkNavigator';
import * as yup from 'yup';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  error: {
    color: colors.errors,
  },
});

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = yup.object().shape({
  name: yup.string().trim().required('Name Is Missing'),
  email: yup.string().email('Invalid Email!').required('Email Is Missing'),
  password: yup
    .string()
    .trim()
    .min(8, 'Password Is Too Short')
    .required('Password Is Required')
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
      'Password requires an uppercase letter, number and special character ¯\\_(ツ)_/¯ ',
    ),
  confirmPassword: yup
    .string()
    .trim()
    .oneOf([yup.ref('password')], 'Passwords Must Match')
    .required('Please Confirm Password'),
});

export default function RegisterScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ bottom: 50 }}>
        <Text style={{ alignItems: 'center', color: colors.black }}>Register</Text>
        <CustomFormik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={() => console.log('Registered')}
        >
          <FormInput name="name" placeholderText="Name" />
          <FormInput name="email" placeholderText="Email" />
          <FormInput secure={true} name="password" placeholderText="Password" />
          <FormInput secure={true} name="confirmPassword" placeholderText="Password Confirmation" />
          <FormButton color={colors.buttons} title="Register" />
        </CustomFormik>
        <LinkNavigator
          leftLinkText="Login"
          rightLinkText="Forgot Password"
          onLeftLinkPress={() => navigation.navigate('Login')}
          onRightLinkPress={() => navigation.navigate('Forgot')}
        />
      </View>
    </ScrollView>
  );
}
