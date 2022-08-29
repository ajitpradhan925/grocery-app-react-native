import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@features/home/view/Home';
import Splash from '@features/Auth/splash';
import Login from '@features/Auth/login';
import Register from '@features/Auth/register';

const Stack = createNativeStackNavigator();


const MainAuth = () => {
  return (
    <Stack.Navigator  initialRouteName="Splash" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  )
}

export default MainAuth;