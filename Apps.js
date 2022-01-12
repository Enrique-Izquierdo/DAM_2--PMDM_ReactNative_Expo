import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView, Button, TextInput} from 'react-native';
import { useState } from 'react';
import Ejercicio_01 from './src/components/Ejercicio_01';

export default function App() {

  return (
    
    <View style={styles.container}>  
      <Ejercicio_01 /> 
    </View>

  );
}

const image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
