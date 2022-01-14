// Actividad: Introducción a React Native


import { Dimensions, StyleSheet, Text, View, Image, ScrollView, Button, TextInput} from 'react-native';
import Ejercicio_01 from './src/components/Ejercicio_01';
import Ejercicio_02 from './src/components/Ejercicio_02';
import Ejercicio_03 from './src/components/Ejercicio_03';
import Ejercicio_04 from './src/components/Ejercicio_04';
import Ejercicio_05 from './src/components/Ejercicio_05';

export default function App() {
  return (    
    <View style={styles.container}>  
      <Ejercicio_05 /> 
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});