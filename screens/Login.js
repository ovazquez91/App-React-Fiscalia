import React from 'react';
import { View, Text,Image, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { styles } from '../styles/styles';
import Logo from '../assets/Imagenes/logoLargo.jpg';

const Login = () => {
    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#0f253b',
          }}>
            <View style={{ 
            backgroundColor: '#fff', 
            justifyContent: 'center',
            borderRadius: 50,
            width: '100%',
            height: 700,
            marginBottom: -200,
                
            }}>
            <Image source={Logo} style={{width: 300, height: 100, marginTop: -150, marginLeft: 150}}/>
            <View style={{paddingTop: 40,}}>
            <Text style={styles.textoLogin}>Correo:</Text>    
            <TextInput style={styles.inputText}  placeholder='Email Id'/>
            <Text style={styles.textoLogin}>Contraseña:</Text>
            <TextInput secureTextEntry={true} style={styles.inputText}  placeholder='Contraseña'/>
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
            </View>
            </View>
        </SafeAreaView>
    );
};

export default Login;