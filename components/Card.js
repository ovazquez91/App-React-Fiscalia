import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
//import Animated from 'react-native-reanimated';
import Calendario from '../assets/Imagenes/calendario.png';
import {styles} from '../styles/styles.js'


function Card({titulo, descripcion, fecha, hora, estatus}) {
    //const alignment = new Animated(400);
    return (
        <TouchableOpacity style={styles.card}>
        <View style={{
            marginBottom: 10,
        }}>   
        <Text style={styles.tituloCard}>{titulo}</Text>
        <View style={styles.division}></View> 
        </View>
        <Text style={styles.descripcionCard}>{descripcion}</Text>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
        <Text style={styles.textoCard}>
            <Feather name='clock' size={22} color='#fff' style={{ marginRight: 7,}} />
            {' '+hora}</Text>       
        <Text style={styles.textoCard}>
        <Feather name='calendar' size={22} color='#fff' style={{
                marginRight: 7,
             }} />    
             {' '+fecha}</Text>
        <Text style={styles.bagdeError}>{estatus}</Text>
        </View>
        </TouchableOpacity>
    );
}

export default Card;