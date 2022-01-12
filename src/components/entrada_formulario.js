import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView, Button, TextInput, } from 'react-native';
import { useState } from 'react';
import { Alert } from 'react-native-web';

const Entrada = (props) => {

    //useState()  opcion A 
    // const [text, onChangeText] = useState('');

    //useState()  opcion B 
    // const [estado, setEstado] = useState('');
    // const handleChangeText = (event) => {
    //     setEstado(event); 
    // };


    return (
        <View style={styles.fila}>
            <View>
                <Text>{props.nombre}: </Text>
            </View>
            {/* <View>
                <TextInput style={{borderWidth:1}} onChangeText={handleChangeText}/>
                <Text>{estado}</Text>            
            </View> */}
            <StatusBar style="auto" />   
      </View>
    )
}

export default Entrada;


const styles = StyleSheet.create({
  fila: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
