import React from 'react';
import {DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Logo from '../assets/Imagenes/logoLargo.jpg';
import { Image, View, Text } from 'react-native';
import { styles } from '../styles/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ioconics from 'react-native-vector-icons/Ionicons';

const CustomDrawer = (props) => {
    return (
        <View style={{flex: 1}}>
        <DrawerContentScrollView  {...props}>
            <View style={{justifyContent: 'center', flex: 1}}>
            <Image source={Logo} style={{ width: '90%', marginLeft: 20, marginTop: 40, marginBottom:30}} />
            </View>
            <View style={{paddingLeft: 15, justifyContent: 'center', alignContent: 'center', marginBottom: 10}}>
                <Text style={{fontSize: 30,}}>
                Omar Vázquez
                </Text>
                <Text style={{fontSize: 17,}}>
                Perito en fiscalia
                </Text>
            </View>
            <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, paddingTop: 10, marginBottom: 30 }} />
            <DrawerItemList  {...props}/>
        </DrawerContentScrollView>
        <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
            <TouchableOpacity onPress={()=>{}} style={{paddingVertical: 15}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ioconics name='exit-outline' size={25} color={'#6c757d'} />
                    <Text style={{ color: '#6c757d', marginLeft: 10, fontSize: 17 }}>Salir</Text>
                </View>
            </TouchableOpacity>
        </View>
        </View>
    );
};

export default CustomDrawer;