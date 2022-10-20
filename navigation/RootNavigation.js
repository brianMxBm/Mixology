import { View, Text } from 'react-native'
import React from 'react'
import { createNavigationContainerRef, NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../assets/screens/HomeScreen';
import DrinkScreen from '../assets/screens/DrinkScreen';
import LoginScreen from '../assets/screens/LoginScreen';
import ProfileScreen from '../assets/screens/ProfileScreen';
const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Drink" component={DrinkScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Profile" component={ProfileScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}