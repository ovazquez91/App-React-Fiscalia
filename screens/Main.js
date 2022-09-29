import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import ImanPrincipal from '../assets/Imagenes/crimi.png';
import Home from '../screens/Home';
import Login from '../screens/Login';

const Main = ({navigation}) => {
    return (
        <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}
    >
      <View>
        <Text style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#000',
          alignItems: 'center',
          paddingBottom: 40,
        }}>
          BIENVENIDO
        </Text>
      </View>
      <Image
          style={{
            marginBottom: 30,
            marginTop: 30,
          }}
          source={ImanPrincipal}
        />
      <TouchableOpacity 
      onPress={() => {navigation.navigate("Login");}}
      style={{
        backgroundColor: '#0B2A97',
        padding: 20,
        width: '90%',
        borderRadius: 18,
        alignItems: 'center',
      }}>
        <Text style={{
          color: '#fff',
          fontSize: 23,
          fontWeight: 'bold',
        }}>INICIAR</Text>
      </TouchableOpacity>
    </SafeAreaView>
    );
};

export default Main;