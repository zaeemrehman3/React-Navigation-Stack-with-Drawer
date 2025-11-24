import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home'
import About from '../screens/About'
import Login from '../screens/Login'

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
   <Stack.Navigator>

    <Stack.Screen name='Home' component={Home} />

    <Stack.Screen name='About' component={About} />

    <Stack.Screen name='Login' component={Login} />
    
   </Stack.Navigator>
  );
};

export default StackNavigator;