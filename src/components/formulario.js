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
import { Text, TextInput, View } from "react-native";

const Formulario = () => {

    const [name, setName] = useState('');
    const handleChangeName = (event) => {
        if(isNaN(event[event.length-1])){
            setName(event);
        } else {
            alert("¡¡Error!!, Ha introducido un número. El nombre no puede contener números.");            
        }
    }

    const [email, setEmail] = useState(''); 
    const handleChangeEmail = (event) => {
        setEmail(event);
    }

    const handleOnBlur = () => {   
        if(!email.includes("@")) {
            alert("¡¡Error!!, No ha introducido un email.");
        }
    }

    const [password, setPassword] = useState('');
    const handleChangePassword = (event) => {
        setPassword(event);
    }

    return (
        <View>  
            <Text>Nombre: </Text>
            <TextInput style={{borderWidth:1}} onChangeText={handleChangeName}/>
            <Text>{name}</Text>
            <Text>Email: </Text>
            <TextInput style={{borderWidth:1}} onChangeText={handleChangeEmail} onBlur={handleOnBlur}/>
            <Text>{email}</Text>
            <Text>Contraseña: </Text>
            <TextInput style={{borderWidth:1}} onChangeText={handleChangePassword}/>
            <Text>{password}</Text>
        </View>
    );
}

export default Formulario;