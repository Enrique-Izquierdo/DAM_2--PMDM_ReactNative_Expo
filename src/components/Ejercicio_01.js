import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const Ejercicio_01 = () => {
    return(
    <View style={styles.container}>
      <Text>Ejercicio 1</Text>
      <View style={styles.cuadradoNegro} />
      <View style={styles.cuadradoGris} />
      <View style={styles.cuadradoNegro} />
      <View style={styles.cuadradoGris} />
      <View style={styles.cuadradoNegro} />
      <View style={styles.cuadradoGris} />
      <View style={styles.cuadradoNegro} />
      <View style={styles.cuadradoGris} />
      <StatusBar style="auto" />
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