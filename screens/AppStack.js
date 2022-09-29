import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Feather from 'react-native-vector-icons/Feather';
import Ioconics from 'react-native-vector-icons/Ionicons';

import TabNavigation from '../navigation/TabNavigation';

import Home from '../screens/Home.js';
import Formulario from './Formulario.js';
import Informacion from './Informacion.js';
import Perfil from './Perfil.js';
import CustomDrawer from '../components/CustomDrawer.js';
const Drawer = createDrawerNavigator();

const AuthStack = () => {
    return (
      <Drawer.Navigator screenOptions={{headerShown: true, drawerLabelStyle: {
        marginLeft: -23,
        }}} drawerContent={props => <CustomDrawer {...props} />}>
        
         <Drawer.Screen component={TabNavigation} name='TabNavigation' options={{
                drawerIcon: ({focused}) => (
                    <Ioconics name='home' size={25} color={focused ? '#fff' : '#6c757d'} />
                ),
                drawerLabel: 'Inicio',
                drawerActiveTintColor: '#fff',
                drawerPosition: 'left',
                drawerInactiveTintColor: '#6c757d',
                drawerActiveBackgroundColor: '#0b2a97',
         }} />
         <Drawer.Screen component={Formulario} name='Formulario' options={{
                drawerIcon: ({focused}) => (
                    <Ioconics name='clipboard-outline' size={25} color={focused ? '#fff' : '#6c757d'} />
                ),
                drawerLabel: 'Formulario',
                drawerActiveTintColor: '#fff',
                drawerPosition: 'left',
                drawerInactiveTintColor: '#6c757d',
                drawerActiveBackgroundColor: '#0b2a97',
         }}   />
         <Drawer.Screen component={Perfil} name='Perfil' options={{
                drawerIcon: ({focused}) => (
                    <Ioconics name='person-circle-outline' size={25} color={focused ? '#fff' : '#6c757d'} />
                ),
                drawerLabel: 'Perfil',
                drawerActiveTintColor: '#fff',
                drawerPosition: 'left',
                drawerInactiveTintColor: '#6c757d',
                drawerActiveBackgroundColor: '#0b2a97',
         }} />
         <Drawer.Screen component={Informacion} name='Informacion' options={{
                drawerIcon: ({focused}) => (
                    <Ioconics name='information-circle-outline' size={25} color={focused ? '#fff' : '#6c757d'} />
                ),
                drawerLabel: 'Información',
                drawerActiveTintColor: '#fff',
                drawerPosition: 'left',
                drawerInactiveTintColor: '#6c757d',
                drawerActiveBackgroundColor: '#0b2a97',
         }}/>
    </Drawer.Navigator>
    );
};

export default AuthStack;