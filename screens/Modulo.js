import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';


export default function ModuleScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcome}>Ana Helena! Seja bem-vinda,</Text>
      <Text style={styles.title}>Módulo I - Conteúdos</Text>
      <Text style={styles.subtitle}>O que é porcentagem? Vamos descobrir!</Text>

      

      <Button
        title="Exercícios"
        onPress={() => navigation.navigate('Exercise')}
        style={styles.button}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flexGrow: 1, 
    justifyContent: 'center', 
    padding: 20, 
    backgroundColor: '#f5f5f5' 
  },
  welcome: { 
    fontSize: 18, 
    marginBottom: 10, 
    color: '#333',
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 10, 
    color: '#000',
  },
  subtitle: { 
    fontSize: 16, 
    color: '#555', 
    marginBottom: 20,
  },
  videoContainer: {
    marginVertical: 20,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#000',
    padding: 10,
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  video: {
    width: '100%',
    height: 220, // Adjust height as needed
  },
  button: {
    marginTop: 20,
  },
});
