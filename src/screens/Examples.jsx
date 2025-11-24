import { View, Text, Button } from 'react-native';
import React from 'react';
import Home from '../screens/Home'

const Examples = ({ navigation }) => {
  return (
    <View>
      <Text>Examples</Text>

     <Button title='Go to Home Screen' onPress={()=> navigation.navigate('Home')} />

    </View>
  );
};

export default Examples;