import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
//import ExercicioScreen from './screens/Exercicios';

export default function selecionarScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qual tópico você deseja aprender?</Text>

      <TouchableOpacity
        style={styles.levelButton}
        onPress={() => navigation.navigate('ExercicioScreen', { topic: 'Porcentagem' })}
      >
        <Text style={styles.levelButtonText}>Porcentagem</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.levelButton}
        onPress={() => navigation.navigate('Module', { topic: 'Frações' })}
      >
        <Text style={styles.levelButtonText}>Frações</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.levelButton}
        onPress={() => navigation.navigate('Module', { topic: 'Decimais' })}
      >
        <Text style={styles.levelButtonText}>Decimais</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.levelButton}
        onPress={() => navigation.navigate('Module', { topic: 'Proporções' })}
      >
        <Text style={styles.levelButtonText}>Proporções</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
    textAlign: 'center',
  },
  levelButton: {
    width: '80%',
    paddingVertical: 15,
    backgroundColor: '#007BFF',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  levelButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
