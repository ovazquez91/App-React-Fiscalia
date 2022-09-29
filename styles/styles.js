import { StyleSheet } from "react-native";

export const styles =StyleSheet.create({

    card: {
        backgroundColor: "#0B2A97",
        borderRadius: 30,
        height: 190,
        marginBottom: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 8,
        },
        shadowOpacity: 3,
        shadowRadius: 8,
        elevation: 6,
    },

    division: {
    borderBottomColor: '#fff',
    borderRightColor: '#0B2A97',
    borderTopColor: '#0B2A97',
    borderLeftColor: '#0B2A97',
    width: '100%',
    paddingBottom: -20,
    borderWidth: 1,
    },

    divisionBlanco: {
        borderBottomColor: '#cccccc',
        borderRightColor: '#0B2A97',
        borderTopColor: '#0B2A97',
        borderLeftColor: '#0B2A97',
        width: '100%',
        borderWidth: 1,
        },

    textoCard: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold'
    },

    tituloCard: {
        fontSize: 23,
        paddingBottom: 5,
        color: '#fff',
        fontWeight: 'bold',
    },

    descripcionCard: {
        fontSize: 16,
        color: '#fff',
        paddingBottom: 18,
        fontWeight: 'normal',
    },

    bagdeError: {
        fontSize: 14,
        color: '#fff',

        fontWeight: 'bold',
        backgroundColor: '#F94687',
        marginRight: 5,
        marginLeft: 5,
        padding: 7,
        borderRadius: 15,
        fontSize: 14,
    },

    inputText: {
     borderRadius: 20,
     backgroundColor: '#fff',
     borderWidth: 2,
     borderColor: '#f0f1f5',
     color: '#B1B1B1',
     height: 65,
     position: 'relative',
     fontSize: 18, 
     marginLeft: 90,
     marginRight: 90,
     paddingLeft: 16,
     width: 400,
     marginBottom: 30,
    },

    textoLogin: {
        color: '#0d263d',
        fontSize: 21,
        lineHeight: 28,
        marginLeft: 90,
        marginBottom: 10,
    },

    btnLogin: {
        backgroundColor: '#0B2A97',
        padding: 20,
        width: '90%',
        borderRadius: 18,
        alignItems: 'center',
    }

});