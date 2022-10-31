import React from 'react';
import { Screens } from '../constants/ScreenHub';
import Tabs from './Tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Screens.LoginScreen} />
        <Stack.Screen name="Register" component={Screens.RegisterScreen} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Home" component={Screens.HomeScreen} />
        <Stack.Screen name="Drink" component={Screens.DrinkScreen} />
        <Stack.Screen name="Forgot" component={Screens.ForgotPasswordScreen} />
        <Stack.Screen name="Profile" component={Screens.ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
