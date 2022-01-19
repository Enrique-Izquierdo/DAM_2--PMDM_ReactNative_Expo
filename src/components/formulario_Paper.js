// Actividad Evaluable 3: Librerías de Componentes en React Native

// En esta actividad se realizará un formulario utilizando para ello una librería de 
// componentes de libre elección. Para ello el alumno deberá realizar una búsqueda 
// previa para decidir que librería elegir. 
// El formulario a implementar contendrá los siguientes campos:
// 1. Nombre: donde el usuario podrá introducir su nombre. Se deberá realizar 
// una validación de que el nombre está compuesto únicamente por letras. Si 
// es incorrecto, se mostrará por pantalla una alerta diciendo que el nombre 
// introducido no es correcto. 
// 2. Email: donde el usuario podrá introducir su correo electrónico. Se deberá 
// realizar una validación de que el correo electrónico introducido es correcto. 
// Si es incorrecto, se mostrará por pantalla una alerta diciendo que el correo 
// introducido no es correcto.
// 3. Contraseña: Donde el usuario introducirá una contraseña. 

// PROCESO DE DESARROLLO
// Se deberán implementar las instrucciones necesarias para poder realizar 
// el formulario –eventos y manejadores de eventos utilizando Hooks 
// (useState) para validar los formularios-. Los estilos serán libres.


import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Caption, Card,Headline, HelperText, Text, TextInput, Title } from "react-native-paper";


const Formulario = () => {

    //Lógica entrada Nombre
    const [name, setName] = useState('');
    const [visible_Name, setVisible_Name] = useState(false);
    const handleOnFocus_Name = () => {
        setVisible_Name(name.length>0);
    }
    const handleChangeText_Name = (event) => {
        setName(event);
        setVisible_Name(name.length>0);
    }    
    const handleOnBlur_Name = () => { 
        setVisible_Name(name.length>0);
    }
    const handleOnPress_IconClose_Name = () => {
        setName('');
    }
    const esNumero = (x) => {
        return !isNaN(x);
    }
    const hasErrors_Name = () => {
        let arrayName = name.split("");
        return arrayName.some(esNumero);
    }

    // Lógica entra Email
    const [email, setEmail] = useState(""); 
    const [visible_Email, setVisible_Email] = useState(false);
    const handleOnFocus_Email = () => {
        setVisible_Email(false);
    }
    const handleChangeText_Email = (event) => {
        setEmail(event);
    }
    const handleOnBlur_Email = (e) => {
        setEmail(e.target.value); 
        setVisible_Email(e.target.value.length>0);
    }
    const handleOnPress_IconClose_Email = () =>{
        setEmail('');
    }
    const hasErrors_Email = () => {
        return email.length>0 && !email.includes("@")
    }

    // Lógica entrada Contraseña
    const [password, setPassword] = useState('');   
    const [secureText, setSecureText] = useState(true);
    const handleChangeText_Password = (event) => {
        setPassword(event);
    }
    const handleOnPressIn_IconEye = () => {
        setSecureText(false);
    }
    const handleOnPressOut_IconEye = () => {
        setSecureText(true);
    }


    return (
        <Card style={styles.box}>
            <Card.Content>
                <Headline style={{color:'#dcdcdc', textAlign:'center'}}>AE3 - Librerías</Headline>
                <Caption style={{textAlign:'right', paddingBottom:10}}>by Enrique Izquierdo</Caption>
                <TextInput 
                    mode="outlined" 
                    label={"Nombre:"} 
                    placeholder="Introduzca el nombre" 
                    activeOutlineColor="#97e9ff"
                    style={{marginTop:10}}
                    onFocus={handleOnFocus_Name}
                    onChangeText={handleChangeText_Name}
                    value={name}
                    onBlur={handleOnBlur_Name} 
                    right={<TextInput.Icon name='close' onPress={handleOnPress_IconClose_Name} />}
                    />      
                <HelperText visible={visible_Name} type={hasErrors_Name()? "error" : "info"} >
                    {hasErrors_Name() ? "¡¡Error!! Nombre no válido.\nNo está permitido el uso de números." : "Nombre válido"}
                </HelperText>
    
                <TextInput 
                    mode="outlined" 
                    label={"Email:"}
                    placeholder="Introduzca el email" 
                    activeOutlineColor="#76ee94"
                    style={{marginTop:10}}
                    keyboardType='email-address'                                 
                    onFocus={handleOnFocus_Email} 
                    onChangeText={handleChangeText_Email}
                    value={email}
                    onBlur={handleOnBlur_Email}
                    right={<TextInput.Icon name="close" onPress={handleOnPress_IconClose_Email} />}
                    />
                <HelperText visible={visible_Email} type={hasErrors_Email() ? "error" : "info"} >
                    {hasErrors_Email() ? "¡¡Error!! Email no válido" : "Email válido"}
                </HelperText>

                <TextInput  
                    mode="outlined" 
                    label={"Contraseña:"} 
                    placeholder="Introduzca el password"
                    activeOutlineColor="#ffc340"
                    style={{marginTop:10}}                
                    secureTextEntry={secureText}
                    right={ <TextInput.Icon name="eye" onPressIn={handleOnPressIn_IconEye} onPressOut={handleOnPressOut_IconEye}/>}
                    onChangeText={handleChangeText_Password}
                    />
            </Card.Content>            
        </Card>
    );
}

export default Formulario;


const styles = StyleSheet.create({
    box:{
        backgroundColor: '#3e4144',
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        elevation: 20,
    },
})