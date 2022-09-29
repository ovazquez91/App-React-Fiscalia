import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, ScrollView, ImageBackground, TextInput } from 'react-native';
import image from '../assets/Imagenes/usuario.png';
import { DrawerActions } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Card from '../components/Card';

const Home = ({navigation}) => {



    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#f9f9f9',
        }} >
            <ScrollView style={{
                padding: 20,
            }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginBottom: 10,
                padding: 5,
                fontWeight: 'bold',
                backgroundColor: '#f9f9f9',
            }}>
            <TouchableOpacity onPress={() => navigation.openDrawer()} >
            <Feather name='menu' size={28} color='#0B2A97' style={{ marginRight: 7,}} />
            </TouchableOpacity>
            </View>
            <View style={{
                marginVertical: 15,
                flexDirection: 'row',
                marginTop: 10, }}
                >
            
            </View> 
            <View>
                <Card titulo={'Esto es un titulo y una prueba'} descripcion={'Estan estos titulos para ponerse bien suaves, llevara toda la descripción etse seria con mucho texto para ver que apasa'} fecha={'20/09/2022'} hora={'2:20'} estatus={'Enviado'}/>
                <Card titulo={'Esto es un titulo y una prueba'} descripcion={'Estan estos titulos para ponerse bien suaves, llevara toda la descripción etse seria con mucho texto para ver que apasa'} fecha={'20/09/2022'} hora={'2:20'} estatus={'Enviado'}/>
                <Card titulo={'Esto es un titulo y una prueba'} descripcion={'Estan estos titulos para ponerse bien suaves, llevara toda la descripción etse seria con mucho texto para ver que apasa'} fecha={'20/09/2022'} hora={'2:20'} estatus={'Enviado'}/>
                <Card titulo={'Esto es un titulo y una prueba'} descripcion={'Estan estos titulos para ponerse bien suaves, llevara toda la descripción etse seria con mucho texto para ver que apasa'} fecha={'20/09/2022'} hora={'2:20'} estatus={'Enviado'}/>
                <Card titulo={'Esto es un titulo y una prueba'} descripcion={'Estan estos titulos para ponerse bien suaves, llevara toda la descripción etse seria con mucho texto para ver que apasa'} fecha={'20/09/2022'} hora={'2:20'} estatus={'Enviado'}/>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;