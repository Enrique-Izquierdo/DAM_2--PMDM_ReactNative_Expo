// Actividad: Introducción a React Native

// Ejercicio 2 – Implementa una imagen en el centro de la pantalla. La imagen la 
// recogerás desde una dirección url. 


import { Image, Text, View } from "react-native";

const Ejercicio_02 = () => {

    const image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png';

    return(
        <View>
            <Text>Ejercicio 2</Text>
            <Image style={{width:100, height:100}} source={{uri:image }}/> 
        </View>
    );
}

export default Ejercicio_02;