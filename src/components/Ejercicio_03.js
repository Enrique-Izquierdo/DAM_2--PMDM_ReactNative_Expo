// Actividad: Introducción a React Native

// Ejercicio 3 – En el centro de la pantalla ubica tres cuadrados en horizontal con tres 
// colores distintos con dimensiones de 300x300pixels. Implementa la lógica necesaria 
// para que se pueda hacer scroll horizontal para poder verlos. Escribe un texto ubicado 
// arriba de los cuadrados que diga “Haz Scroll!”.


import { ScrollView, Text, View } from "react-native";

const Ejercicio_03 = () => {
    return(
        <ScrollView horizontal>
            <Text>Ejercicio 3</Text>
            <View style={{backgroundColor: '#000', width: 600, height: 600}} />
            <View style={{backgroundColor: '#9c9c9c', width: 600, height: 600}} />
            <View style={{backgroundColor: '#008F39', width: 600, height: 600}} />
        </ScrollView>
    );
}

export default Ejercicio_03;