import React, { useContext } from 'react';
import { Screens } from '../constants/ScreenHub';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../assets/screens/OnboardingScreen';
import DrinkCategoryScreen from '../assets/screens/DrinkCategoryScreen';
import { UserContext } from '../utils/UserContext';
import Tabs from './Tabs';
import Avatar from '../assets/components/Avatar';

const Stack = createNativeStackNavigator();
export default function RootNavigation() {
  const user = useContext(UserContext);
  return (
    <NavigationContainer>
      {user ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="Home" component={Screens.HomeScreen} />
          <Stack.Screen name="Category" component={DrinkCategoryScreen} />
          <Stack.Screen name="Drink" component={Screens.DrinkScreen} />
          <Stack.Screen name="Setting" component={Screens.SettingsScreen} />
          <Stack.Screen name="Forgot" component={Screens.ForgotPasswordScreen} />
          <Stack.Screen name="Profile" component={Screens.ProfileScreen} />
          <Stack.Screen name="Camera" component={Screens.CameraScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Tutorial" component={OnboardingScreen} />
          <Stack.Screen name="Login" component={Screens.LoginScreen} />
          <Stack.Screen name="Register" component={Screens.RegisterScreen} />
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="Home" component={Screens.HomeScreen} />
          <Stack.Screen name="Category" component={DrinkCategoryScreen} />
          <Stack.Screen name="Drink" component={Screens.DrinkScreen} />
          <Stack.Screen name="Setting" component={Screens.SettingsScreen} />
          <Stack.Screen name="Forgot" component={Screens.ForgotPasswordScreen} />
          <Stack.Screen name="Profile" component={Screens.ProfileScreen} />
          <Stack.Screen name="Camera" component={Screens.CameraScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
