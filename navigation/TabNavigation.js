import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ioconics from 'react-native-vector-icons/Ionicons';
import React from 'react';
import Formulario from "../screens/Formulario";
import Home from "../screens/Home";
import Informacion from "../screens/Informacion";

const Tab = createBottomTabNavigator();


const TabNavigation = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: 0,
                left: 8,
                right: 8,
                elevation: 0,
                backgroundColor: '#fff',
                borderRadius: 15,
                height: 70,
                shadowColor: "#000",
                shadowOffset: {
	            width: 0,
	            height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                }}}>
        <Tab.Screen
        
        options={{
            tabBarIcon: () => (
                <Ioconics name='home' size={25} color={'#6c757d'} />
            ),
        }}
        name="Home" component={Home} />
        <Tab.Screen options={{
            tabBarIcon: () => (
                <Ioconics name='clipboard-outline' size={25} color={'#6c757d'} />
            ) 
        }} name="Formulario" component={Formulario} />
      </Tab.Navigator>
    );
};

export default TabNavigation;