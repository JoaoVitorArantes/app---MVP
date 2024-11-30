import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function NivelScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qual nível você está?</Text>

      <TouchableOpacity
        style={styles.levelButton}
        onPress={() => navigation.navigate('Module', { level: 'Iniciante' })}
      >
        <Text style={styles.levelButtonText}>Nível I : Iniciante</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.levelButton}
        onPress={() => navigation.navigate('Module', { level: 'Básico' })}
      >
        <Text style={styles.levelButtonText}>Nível II : Básico</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.levelButton}
        onPress={() => navigation.navigate('Module', { level: 'Experiente' })}
      >
        <Text style={styles.levelButtonText}>Nível III : Experiente</Text>
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
