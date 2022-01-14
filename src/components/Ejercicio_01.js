// Actividad: Introducción a React Native

// Ejercicio 1 – Implementa en el centro de la pantalla una columna donde ubiques ocho 
// cuadrados de iguales dimensiones. Asigna dos colores, de modo que queden cuadrados 
// de un color y otros cuatro de otro y se alternen entre ellos –ejemplo: cuadrado negro, 
// cuadrado gris, cuadrado negro, cuadrado gris, cuadrado negro, cuadrado gris…etc. La 
// columna deberá ocupar toda la pantalla.


import { Dimensions, StyleSheet, Text, View } from 'react-native';

const Ejercicio_01 = () => {
    return(
    <View>
      <Text>Ejercicio 1</Text>
      <View style={styles.cuadradoNegro} />
      <View style={styles.cuadradoGris} />
      <View style={styles.cuadradoNegro} />
      <View style={styles.cuadradoGris} />
      <View style={styles.cuadradoNegro} />
      <View style={styles.cuadradoGris} />
      <View style={styles.cuadradoNegro} />
      <View style={styles.cuadradoGris} />
    </View>
    );
}

export default Ejercicio_01;

// export default function Ejercicio_01() {
//   return (
//     <View>      
//       <Text>Ejercicio 1</Text>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  cuadradoNegro: {
    flex: 1,
    backgroundColor: '#000',
    width: Dimensions.get('window').height/3,
  },
  cuadradoGris: {
    flex: 1,
    backgroundColor: '#9c9c9c',
    width: Dimensions.get('window').height/3,
  },
  });