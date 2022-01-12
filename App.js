import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView, Button, TextInput, } from 'react-native';
import { useState } from 'react';
import { Alert } from 'react-native-web';

export default function App() {
  //useState()
  const [estadoBoton, setEstadoBoton] = useState(0);

  //useState()  opcion A 
  // const [text, onChangeText] = useState('');
  //useState()  opcion B 
  const [estado, setEstado] = useState('');
  const handleChangeText = (event) => {
    if(isNaN(event)){
      setEstado(event);
    } else{
      Alert.alert('Error', 'Has introducido un número');
    }    
  };

  return (
    <View style={styles.container}>      
      <View style={styles.fila}>
        <View>
          <Text>Nombre: </Text>
        </View>
        <View>
            {/* Opcion A */}
            {/* <TextInput style={{borderWidth:1}} onChangeText={onChangeText}/>
            <Text>{text}</Text> */}
            {/* Opcion B */}
          <TextInput style={{borderWidth:1}} onChangeText={handleChangeText}/>
          <Text>{estado}</Text>
          
        </View>
        <StatusBar style="auto" />   
      </View>

      <View style={styles.fila}>
        <View>
          <Text>email: </Text>
        </View>
        <View>
          {/* Opcion B */}
          <TextInput style={{borderWidth:1}} onChangeText={handleChangeText}/>
          <Text>{estado}</Text>
        </View>
        <StatusBar style="auto" />   
      </View>

      <View style={styles.fila}>
        <View>
          <Text>contraseña: </Text>
        </View>
        <View>
          {/* Opcion B */}
          <TextInput style={{borderWidth:1}} onChangeText={handleChangeText}/>
          <Text>{estado}</Text>
        </View>
        <StatusBar style="auto" />   
      </View>
      <Button
            title="Púlsame" 
            style={{
              // backgroundcolor: '#9c9c9c', 
              width: Dimensions.get('window').width, 
              height: Dimensions.get('window').width            
            }}
            onPress={()=>setEstadoBoton(estadoBoton+1)}/>
            {estadoBoton>0 && <Text>El botón se ha pulsado {estadoBoton} veces</Text>}

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
    justifyContent: "space-around",
  },
  fila: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
