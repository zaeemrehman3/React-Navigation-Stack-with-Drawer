import { View, Text, Button } from 'react-native';
import React from 'react';
import About from '../screens/About';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>

       <Button title='Go to About Screen' onPress={()=>navigation.navigate('About')} />

    </View>
  );
};

export default Home;