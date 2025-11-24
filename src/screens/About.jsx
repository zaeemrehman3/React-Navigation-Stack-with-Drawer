import { View, Text, Button } from 'react-native';
import React from 'react';

const About = ({navigation}) => {
  return (
    <View>
      <Text>About</Text>

      
      <Button title='Go to Login Screen' onPress={()=>navigation.navigate('Login')} />

    </View>
  );
};

export default About;