// Formik x React Native example
import React from 'react';
import { Button, StyleSheet, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';

export const Formulario = props => (
  <Formik
    initialValues={{ email: '' }}
    onSubmit={values => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <Text>Introduce nombre:</Text>
          <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={{borderWidth:1}}
          />
          <Text>Introduce email:</Text>
          <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={{borderWidth:1}}
          />
          <Text>Introduce contraseña:</Text>
          <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={{borderWidth:1}}
          />
          <Button onPress={handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
);

// const styles = StyleSheet.create({
//     fila: {
//       flex: 1,
//       frexDirection: 'column',
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     celda: {
//         flex: 1,
//     }
// });

