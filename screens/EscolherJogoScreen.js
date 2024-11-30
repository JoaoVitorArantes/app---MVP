// EscolherJogoScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import JogoScreen from './Jogos';

export default function EscolherJogoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha o Jogo</Text>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('JogoScreen')}  
      >
        <Text style={styles.buttonText}>Jogo da Memória - Porcentagem</Text>
      </TouchableOpacity>

      {/* Você pode adicionar mais jogos aqui no futuro */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007BFF',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
