import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function calcular(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    

    if(imc < 18.6) {
      alert('Voce esta abaixo do peso! ' + imc.toFixed(2));
    } 
    else if(imc >= 18.6 && imc < 24.9) {
      alert('Peso ideal! ' + imc.toFixed(2));
    } 
    else if(imc >= 24.9 && imc < 34.9){
      alert('Levemente acima do peso! ' + imc.toFixed(2));
    }
    else {
      alert('nao sei');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC</Text>

      <TextInput
        style={styles.input}
        value={peso}
        onChangeText={ (peso) => setPeso(peso) }
        placeholder="Peso kg"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        value={altura}
        onChangeText={ (altura) => setAltura(altura) }
        placeholder="Altura cm"
        keyboardType="numeric"
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={calcular}>
          <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F1F2',
  },
  title:{
    textAlign: 'center',
    marginTop: 200,
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#90e0ef',
    color: '#03045e',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    fontSize: 23,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#13293D',
    padding:10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
  }
});
