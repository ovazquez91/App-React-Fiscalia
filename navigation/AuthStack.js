import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home.js'
import Main  from '../screens/Main.js'
import Login from '../screens/Login.js';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen component={Main} name='Main' options={{headerShown: false}}/>
        <Stack.Screen component={Login} name='Login' options={{headerShown: true}}/>
    </Stack.Navigator>
    );
};

export default AuthStack;