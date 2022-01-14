// Actividad: Introducción a React Native

// Ejercicio 4 – En el centro de la pantalla ubica un botón que ocupe todo el ancho del 
// dispositivo móvil. El botón tendrá la inscripción "púlsame". Al pulsarlo contará el 
// número de veces que se pulsa. Antes de pulsarlo, no aparecerá nada por pantalla. A 
// cada pulsación, se mostrará escrito el número de veces que se ha pulsado mediante la
// inscripción "El botón se ha pulsado X veces". NOTA: usar useState() y onPress.


import { useState } from "react";
import { Button, Dimensions, Text, View } from "react-native";

const Ejercicio_04 = () => {
    const [estado, setEstado] = useState(0);
    return (
        <View>  
            <Text>Ejercicio 4</Text>
            <Button
                    title="Púlsame" 
                    style={{
                        // backgroundcolor: '#9c9c9c', 
                        width: Dimensions.get('window').width, 
                        height: Dimensions.get('window').width            
                    }}
                    onPress={()=>setEstado(estado+1)}/>
                {estado>0 && <Text>El botón se ha pulsado {estado} veces</Text>}
        </View>);
}

export default Ejercicio_04;