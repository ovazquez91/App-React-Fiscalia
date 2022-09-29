import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, ScrollView, ImageBackground, TextInput } from 'react-native';
import React from 'react';



function BotonInicio({navigation}) { 

    return(
        <TouchableOpacity 
        onPress={() => { navigation.navigate('Home'); }}
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
    );
    }

export default BotonInicio;