import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import Main  from './screens/Main';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from './screens/Home.js';
import AppStack  from './screens/AppStack';
import Login from './screens/Login.js';
import AuthStack from './navigation/AuthStack.js';
import TabNavigation from './navigation/TabNavigation';



const App = () => {
  return(
  <NavigationContainer>
    <AuthStack />
  </NavigationContainer>
  );
};

export default App;


