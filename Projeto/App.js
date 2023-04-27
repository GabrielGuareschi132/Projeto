import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TextInput, TouchableHighlight } from 'react-native';
import { StyleSheet, Text, View,  } from 'react-native';

export default function App() {

  const [operacao,setOperacao]=useState("")
  const [resultado,setResultado]=useState(0)

  const operar=()=>{
    setResultado(eval(operacao))
  }
  return (
    <View style={styles.container}>
  
      <View style={styles.display}>
      <TextInput
        style={styles.displayOperacao}
        placeholder="Insira a Formula" 
        placeholderTextColor={'#000'}
        value={String(operacao)}
        onChangeText={(texto)=>{setOperacao(texto)}}
        keyboardType='default'
      ></TextInput>

      <TextInput
        style={styles.displayResultado}
        value={String(resultado)}
        ></TextInput>
      </View>
      <View>
      <TouchableHighlight 
      style={styles.btn}
      onPress={()=>operar()}
      color="#841584"
      ><Text style={styles.txtbtn}>Operar</Text>
      </TouchableHighlight>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },

  h1: {
    marginTop: 80,
    fontSize: 17,
    textAlign: 'center',
    borderRadius: 50,
    padding:  20,
    backgroundColor: 'black',
    color: '#fff'

  },

  display: {
    borderRadius: 10,
    backgroundColor: 'lightblue',
    padding: 10,
    marginTop: 250,
  },

  
  displayOperacao: {
    padding: 20,
    borderWidth: 2,
    borderColor: 'blue',
    color: '#000',
    margin: 10

  },
  displayResultado:{
    padding: 20,
    borderWidth: 2,
    borderColor: 'blue',
    color: '#000',
    margin: 10,
  },

  btn: {
  backgroundColor: 'lightblue',
  padding: 20,
  borderWidth: 3,
  borderColor: 'blue',
  width: 414,
  fontSize: 200,
  alignItems: 'center',
  marginTop: 90,
},

txtbtn:{
  color: '#000',
  fontSize: 25
}
});
