import { Dimensions, StyleSheet, Text, View, Image, ScrollView, Button, TextInput} from 'react-native';

import Formulario from './src/components/formulario';

export default function App() {
  return (    
    <View style={styles.container}>  
      <Formulario /> 
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