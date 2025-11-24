import { View, Text, Button } from 'react-native';
import React from 'react';

const Login = ({navigation}) => {
  return (
    <View>
      <Text>Login</Text>

      <Button title='Go Back' onPress={()=>navigation.goBack()} />

    </View>
  );
};

export default Login;