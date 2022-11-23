import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native';
import { auth, db } from '../../client/firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { updateNotification } from '../../utils/updateNotification';
import { setDoc, doc } from 'firebase/firestore';
import AuthLayout from '../components/AuthLayout';
import Input from '../components/Input';
import TextButton from '../components/TextButton';
import SubmitButton from '../components/SubmitButton';
import CustomFormik from '../components/CustomFormik';
import colors from '../theme/colors';
import * as yup from 'yup';

const initialValues = {
  email: '',
  userName: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = yup.object().shape({
  userName: yup
    .string()
    .trim()
    .required('Username Required')
    .matches('^[a-zA-Z0-9_.-]*$', 'Only Letters & Numbers Allowed'),
  email: yup.string().email('Invalid Email!').required('Email Is Missing'),
  password: yup
    .string()
    .trim()
    .min(8, 'Password Is Too Short')
    .required('Password Is Required')
    .matches('.*[0-9].*', 'Number Required')
    .matches('.*[A-Z].*', 'Capital Letter Required')
    .matches('[!@#$%^&*(),.?":{}|<>]', 'Special Character Required'),
  confirmPassword: yup
    .string()
    .trim()
    .oneOf([yup.ref('password')], 'Passwords Must Match')
    .required('Please Confirm Password'),
});

const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    marginTop: 8,
  },
});

export default function RegisterScreen({ navigation }) {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setConfirmPass] = useState(false);
  const [message, setMessage] = useState({
    //TODO:Implement utilzing Redux.
    text: '',
    type: '',
  });
  const handleSignUp = async (values, formikActions) => {
    await createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        formikActions.setSubmitting(false);
        return setDoc(doc(db, 'users', userCredential.user.uid), {
          name: values.name,
          userName: values.userName,
          email: values.email,
          favorites: [],
        }).then(() => {
          formikActions.resetForm();
          navigation.replace('Tabs');
        });
      })
      .catch((error) => {
        updateNotification(setMessage, error.message);
        console.log(message);
      }); //TODO: Implement actual error handling.
  };

  return (
    <AuthLayout subTitle="Are you Ready?" title="Register">
      <View style={styles.registerContainer}>
        {message.text ? <Animated.Alert type={message.type} text={message.text} /> : null}
        <CustomFormik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSignUp}
        >
          <Input
            name="email"
            label="Email"
            keyboardType="email-address"
            placeholder="Email"
            included={true}
          />
          <Input
            name="userName"
            label="Username"
            keyboardType="email-address"
            placeholder="Username"
            containerStyle={{ marginTop: 100 }}
            included={true}
          />
          <Input
            name="password"
            label="Password"
            secure={!showPass}
            placeholder="Password"
            containerStyle={{ marginTop: 100 }}
            autoCompleteType="password"
            appendComponent={
              <TouchableOpacity
                onPress={() => setShowPass(!showPass)}
                style={{ alignItems: 'flex-end', justifyContent: 'center', width: 40 }}
              >
                <Image
                  style={{ tintColor: colors.black, height: 20, width: 20 }}
                  source={
                    showPass
                      ? require('../images/icons/eye.png')
                      : require('../images/icons/eye_close.png')
                  }
                />
              </TouchableOpacity>
            }
          />
          <Input
            name="confirmPassword"
            label="Confirm Password"
            secure={!showConfirmPass}
            placeholder="Password"
            containerStyle={{ marginTop: 100 }}
            autoCompleteType="password"
            appendComponent={
              <TouchableOpacity
                onPress={() => setConfirmPass(!showConfirmPass)}
                style={{ alignItems: 'flex-end', justifyContent: 'center', width: 40 }}
              >
                <Image
                  style={{ tintColor: colors.black, height: 20, width: 20 }}
                  source={
                    showConfirmPass
                      ? require('../images/icons/eye.png')
                      : require('../images/icons/eye_close.png')
                  }
                />
              </TouchableOpacity>
            }
          />
          <SubmitButton
            label="Sign Up"
            buttonContainerStyle={{
              height: 55,
              borderRadius: 12,
              backgroundColor: colors.orange,
              marginTop: 120,
            }}
            labelStyle={{ fontWeight: 'bold', color: colors.white }}
          />
        </CustomFormik>
        <View
          style={{
            marginTop: 25,
            height: 20,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: colors.black, fontWeight: 'bold', fontSize: '15' }}>
            Already Have An Account?
          </Text>
          <TextButton
            onPress={() => navigation.goBack()}
            buttonContainerStyle={{ backgroundColor: null, marginLeft: 5 }}
            labelStyle={{ fontSize: '15', color: colors.orange, fontWeight: 'bold' }}
            label="Login Here"
          />
        </View>
      </View>
    </AuthLayout>
  );
}
