import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Logo no topo */}
      <Image source={require('../assets/imagens/logo.png')} style={styles.logo} />
      {/* Campos de entrada */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#888"
          style={styles.input}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#888"
          style={styles.input}
          secureTextEntry
        />
      </View>

      {/* Lembrar senha e Esqueceu a senha */}
      <View style={styles.optionsContainer}>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>

      {/* Botão de Login */}
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('home')}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Criar conta */}
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signUpText}>Ainda não tem conta? <Text style={styles.createAccountText}>Criar conta</Text></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF', // Fundo branco
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    paddingHorizontal: 20,
  },
  logo: {
    padding: 80,
    width: 120,
    height: 120,
    marginBottom: 50, // Espaço entre o logo e o texto
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007BFF', // Azul vibrante
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F5F5F5', // Fundo cinza claro
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#CCC', // Borda cinza leve
  },
  optionsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  rememberText: {
    color: '#555',
    fontSize: 14,
  },
  forgotPasswordText: {
    color: '#007BFF',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFA500', // Cor laranja
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpText: {
    color: '#555',
    fontSize: 14,
  },
  createAccountText: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});
