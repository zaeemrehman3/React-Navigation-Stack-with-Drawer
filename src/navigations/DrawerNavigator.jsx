import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Examples from '../screens/Examples'
import Careers from '../screens/Careers'
import Settings from '../screens/Settings'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
     screenOptions={{
        drawerStyle : {
          backgroundColor : '#e6e6e6',
          width : 240,
        },
        drawerLabelStyle : {
          fontSize : 18,
          color : '#333',
        },
        headerStyle : {
          backgroundColor : '#6200EE',
        },
        headerTintColor : '#fff',
        headerTitleAlign : 'center',
      }}
    >

      <Drawer.Screen name='Examples' component={Examples} />

      <Drawer.Screen name='Careers' component={Careers} />

      <Drawer.Screen name='Settings' component={Settings} />

    </Drawer.Navigator>
  );
};

export default DrawerNavigator;