import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';

export default function ExercicioScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handlePress = (answer) => {
    setFeedback(answer);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercícios</Text>
      <Text style={styles.question}>
        (IFAL 2017) O salário mínimo previsto para 2017 será de R$ 946,00. Qual
        é o percentual de reajuste em relação ao salário mínimo de 2016 sabendo
        que neste ano seu valor é de R$ 880,00?
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('Resposta incorreta')}
      >
        <Text style={styles.buttonText}>A) 5,5%</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('Resposta correta!')}
      >
        <Text style={styles.buttonText}>B) 6,5%</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('Resposta incorreta')}
      >
        <Text style={styles.buttonText}>C) 7,5%</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('Resposta incorreta')}
      >
        <Text style={styles.buttonText}>D) 8,5%</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{feedback}</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2c3e50',
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'justify',
    color: '#34495e',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#2c3e50',
  },
  closeButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
