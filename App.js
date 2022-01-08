import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView, Button, TextInput} from 'react-native';
import { useState } from 'react';
// import { Ejercicio_01 } from './src/components/Ejercicio_01';

export default function App() {
  //useState() ejercicio 4
  // const [estado, setEstado] = useState(0);

  //useState() ejercicio 5
  //opcion A 
  // const [text, onChangeText] = useState('');
  //opcion B 
  const [estado, setEstado] = useState('');
  const handleChangeText = (event) => {
    setEstado(event);
  }

  return (
    //Ejercicio 1
    // <View style={styles.container}>
    //   <Ejercicio_01 />
    //   <Text>Ejercicio 1</Text>
    //   <View style={styles.cuadradoNegro} />
    //   <View style={styles.cuadradoGris} />
    //   <View style={styles.cuadradoNegro} />
    //   <View style={styles.cuadradoGris} />
    //   <View style={styles.cuadradoNegro} />
    //   <View style={styles.cuadradoGris} />
    //   <View style={styles.cuadradoNegro} />
    //   <View style={styles.cuadradoGris} />
    //   <StatusBar style="auto" />
    // </View>

    //Ejercicio 2
    // <View style={styles.container}>
    //   <Text>Ejercicio 2</Text>
    //   <Image style={{width:100, height:100}} source={{uri:image }}/> 
    //   <StatusBar style="auto" />
    // </View>

    //Ejercicio 3
    // <ScrollView horizontal>
    //   <Text>Ejercicio 3</Text>
    //   <View style={{backgroundColor: '#000', width: 600, height: 600}} />
    //   <View style={{backgroundColor: '#9c9c9c', width: 600, height: 600}} />
    //   <View style={{backgroundColor: '#008F39', width: 600, height: 600}} />
    //   <StatusBar style="auto" />
    // </ScrollView>
    
    //Ejercicio 4
    // <View style={styles.container}>  
    //   <Text>Ejercicio 4</Text>
    //   <Button
    //       title="Púlsame" 
    //       style={{
    //         // backgroundcolor: '#9c9c9c', 
    //         width: Dimensions.get('window').width, 
    //         height: Dimensions.get('window').width            
    //       }}
    //       onPress={()=>setEstado(estado+1)}/>
    //       {estado>0 && <Text>El botón se ha pulsado {estado} veces</Text>}
    //   <StatusBar style="auto" />   
    // </View>

    
    <View style={styles.container}>  
      <Text>Ejercicio 5</Text>

      {/* Opcion A */}
      {/* <TextInput style={{borderWidth:1}} onChangeText={onChangeText}/>
      <Text>{text}</Text> */}

      {/* Opcion B */}
      <TextInput style={{borderWidth:1}} onChangeText={handleChangeText}/>
      <Text>{estado}</Text>

      <StatusBar style="auto" />   
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
