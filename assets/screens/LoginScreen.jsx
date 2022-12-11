import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CustomFormik from '../components/CustomFormik';
import colors from '../theme/colors';
import * as yup from 'yup';
import AuthLayout from '../components/AuthLayout';
import Input from '../components/Input';
import LoginSwitch from '../components/LoginSwitch';
import TextButton from '../components/TextButton';
import SubmitButton from '../components/SubmitButton';
import SocialButton from '../components/SocialButton';
import { Icons } from '../theme/icons';
import Line from '../components/Line';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../client/firebase-config';
import { updateNotification } from '../../utils/updateNotification';
import AnimatedAlert from '../components/AnimatedAlert';
import { useFormik } from 'formik';

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
  email: '',
  password: '',
};

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid Email!').required('Email Is Missing'),
  password: yup.string().trim().required('Password Is Required'),
});

export default function LoginScreen({ navigation }) {
  const [showPass, setShowPass] = useState(false);
  const [saveMe, setSaveMe] = useState(false);
  const [message, setMessage] = useState({
    //TODO:Implement utilzing Redux.
    text: '',
    type: '',
  });

  const handleSignIn = async (values, formikActions) => {
    await signInWithEmailAndPassword(auth, values.email, values.password)
      .then(() => {
        formikActions.resetForm();
        navigation.replace('Tabs');
      })
      .catch((error) => {
        if (error.code == 'auth/user-not-found') {
          updateNotification(setMessage, 'User Not Found');
        }
        if (error.code == 'auth/wrong-password') {
          updateNotification(setMessage, 'Incorrect Password');
        }
        if (error.code == 'auth/too-many-requests') {
          updateNotification(setMessage, 'Too many Requests');
        }
      }); //TODO: Implement actual error handling
  };

  return (
    <AuthLayout title="Login" subTitle="Welcome Back">
      <View style={{ flex: 1, marginTop: 100 }}>
        {message.text ? <AnimatedAlert type={message.type} text={message.text} /> : null}
        <CustomFormik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSignIn}
        >
          <Input
            name="email"
            label="Email"
            keyboardType="email-address"
            placeholder="Email"
            containerStyle={{ marginTop: 15 }}
            included={true}
          />
          <Input
            name="password"
            label="Password"
            secure={!showPass}
            placeholder="Password"
            containerStyle={{ marginTop: 20 }}
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
          <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>
            <LoginSwitch value={saveMe} onChange={(value) => setSaveMe(value)} />
            <TextButton
              label="Forgot Password"
              buttonContainerStyle={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: null,
                height: 23,
              }}
              labelStyle={{ fontSize: 15, color: colors.black, fontWeight: 'bold' }}
              onPress={() => navigation.navigate('Forgot')}
            />
          </View>
          <SubmitButton
            label="Sign In"
            buttonContainerStyle={{
              height: 55,
              marginTop: 24,
              borderRadius: 12,
              backgroundColor: colors.orange,
              marginTop: 50,
            }}
            labelStyle={{ fontSize: 17, fontWeight: 'bold', color: colors.white }}
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
            Need An Account?
          </Text>
          <TextButton
            onPress={() => navigation.navigate('Register')}
            buttonContainerStyle={{ backgroundColor: null, marginLeft: 5 }}
            labelStyle={{ fontSize: '15', color: colors.orange, fontWeight: 'bold' }}
            label="Register Here"
          />
        </View>
        <View style={{ marginTop: 15, height: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, height: 3, backgroundColor: 'black' }} />
            <View>
              <Text style={{ width: 30, textAlign: 'center' }}>OR</Text>
            </View>
            <View style={{ flex: 1, height: 3, backgroundColor: 'black' }} />
          </View>
        </View>
        <View>
          <SocialButton
            containerStyle={{
              borderRadius: 18,
              height: 50,
              alignItems: 'center',
              marginTop: 15,
              backgroundColor: colors.lightGray,
              borderWidth: 1,
            }}
            icon={require('../images/icons/google.png')}
            iconPos="LEFT"
            label="Sign In With Google"
            labelStyle={{
              marginLeft: 25,
              color: colors.black,
              fontWeight: 'bold',
            }}
            onPress={() => console.log('Signed In With Google')}
          />
        </View>
      </View>
    </AuthLayout>
  );
}
