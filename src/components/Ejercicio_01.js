import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';


export default class Ejercicio_01 extends Component {
  render() {
    return(
      <View>      
        <Text>Ejercicio 1</Text>
      </View>
    );
  }
}

// export default function Ejercicio_01() {
//   return (
//     <View>      
//       <Text>Ejercicio 1</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       flexDirection: 'column',
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     cuadradoNegro: {
//       flex: 1,
//       backgroundColor: '#000',
//       width: Dimensions.get('window').height/8,
//     },
//     cuadradoGris: {
//       flex: 1,
//       backgroundColor: '#9c9c9c',
//       width: Dimensions.get('window').height/8,
//     }
//   });