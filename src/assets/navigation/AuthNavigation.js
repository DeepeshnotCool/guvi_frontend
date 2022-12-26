import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPassword from '../components/ForgotPassword';
import Login from '../components/Login';
import Signup from '../components/Signup';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name= 'Login' component={Login} />
        <Stack.Screen name= 'Signup' component={Signup} /> 
        <Stack.Screen name= 'ForgotPassword' component={ForgotPassword} />
    </Stack.Navigator>
};

export default AuthNavigator;