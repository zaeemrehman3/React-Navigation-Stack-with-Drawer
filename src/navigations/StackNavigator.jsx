import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from '../navigations/DrawerNavigator'
import Home from '../screens/Home'
import About from '../screens/About'
import Login from '../screens/Login'

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
   <Stack.Navigator 
   screenOptions={{
      headerStyle: styles.header,
      headerTitleStyle: styles.headerTitle,
      headerTintColor : '#fff',
      contentStyle : styles.screen
      }}
   >

    <Stack.Screen name='Drawer' component={DrawerNavigator} />

    <Stack.Screen name='Home' component={Home} />

    <Stack.Screen name='About' component={About} />

    <Stack.Screen name='Login' component={Login} />
    
   </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({
  header : {
    backgroundColor : '#a578e5ff',
  },
  headerTitle : {
    fontWeight : 'bold',
    fontSize : 26,
  },
  screen : {
    backgroundColor : 'lightgreen',
  },
});