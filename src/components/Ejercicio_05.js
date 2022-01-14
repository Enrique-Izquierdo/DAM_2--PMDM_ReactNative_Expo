// Actividad: Introducción a React Native

// Ejercicio 5 – En el centro de la pantalla ubica En el centro de la pantalla ubica un 
// insertText de modo que vaya mostrando por pantalla lo que el usuario escribe. NOTA: 
// usar useState() y onChangeText.


import { useState } from "react";
import { Text, TextInput, View } from "react-native";

const Ejercicio_05 = () => {
    //opcion A 
    // const [text, onChangeText] = useState('');

    //opcion B 
    const [estado, setEstado] = useState('');
    const handleChangeText = (event) => {
        setEstado(event);
    }

    return (
        <View>  
            <Text>Ejercicio 5</Text>
            {/* Opcion A */}
            {/* <TextInput style={{borderWidth:1}} onChangeText={onChangeText}/>
            <Text>{text}</Text> */}
            {/* Opcion B */}
            <TextInput style={{borderWidth:1}} onChangeText={handleChangeText}/>
            <Text>{estado}</Text>
        </View>
    );
}

export default Ejercicio_05;