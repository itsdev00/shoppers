import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React,{useEffect} from 'react';

import LoginScreen from './app/src/screens/authentication/LoginScreen';
import SignUpScreen from './app/src/screens/authentication/SignUpScreen';
import ForgotPasswordScreen from './app/src/screens/authentication/ForgotPasswordScreen';
import HomeScreen from './app/src/screens/authentication/HomeScreen';
import CartScreen from './app/src/screens/authentication/CartScreen';
import PlaceOrderScreen from './app/src/screens/authentication/PlaceOrderScreen';
import SplashScreen from './app/src/screens/authentication/SplashScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={'SplashScreen'}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUP" component={SignUpScreen} />
        <Stack.Screen name="HomePage" component={HomeScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="PlaceOrderScreen" component={PlaceOrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

