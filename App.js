import { Dimensions, StyleSheet, Text, View, Image, ScrollView, Button, TextInput} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Formulario from './src/components/formulario_Paper';

export default function App() {
  return ( 

      <PaperProvider>
        <View style={styles.container}>  
          <Formulario /> 
        </View>
      </PaperProvider>



    // <View style={styles.container}>  
    //   <Formulario /> 
    // </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#aaaaaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});