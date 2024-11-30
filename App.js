import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/Login';
import CadastroScreen from './screens/Cadastro';
import NivelScreen from './screens/Nivel';
import ModuloScreen from './screens/Modulo';
import ExercicioScreen from './screens/Exercicios';
import JogoScreen from './screens/Jogos';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Para ícones
import EscolherJogoScreen from './screens/EscolherJogoScreen';
import SelecionarScreen from './screens/SelecaoExercicio';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Função para a Tab Navigator
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // Ícones personalizados para cada rota
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Login') {
            iconName = 'log-in-outline';
          } else if (route.name === 'SignUp') {
            iconName = 'person-add-outline';
          } else if (route.name === 'SelectLevel') {
            iconName = 'layers-outline';
          } else if (route.name === 'Module') {
            iconName = 'book-outline';

          } else if (route.name === 'Exercicio') {
            iconName = 'create-outline';
          } else if (route.name === 'Jogos') {
            iconName = 'game-controller-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007BFF', // Cor ao selecionar
        tabBarInactiveTintColor: 'gray', // Cor inativa
      })}
    >
      <Tab.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Tab.Screen name="SignUp" component={CadastroScreen} options={{ title: 'Criar Conta' }} />
      <Tab.Screen name="SelectLevel" component={NivelScreen} options={{ title: 'Seleção de Nível' }} />
      <Tab.Screen name="Module" component={ModuloScreen} options={{ title: 'Módulo de Conteúdo' }} />

      <Tab.Screen name="Exercicios" component={SelecionarScreen} options={{ title: 'Exercícios' }} />
      <Tab.Screen name="Jogos" component={EscolherJogoScreen} options={{ title: 'Jogos' }} />
    </Tab.Navigator>
  );
}

// App Principal
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainTabs">
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="JogoScreen" component={JogoScreen} options={{ title: 'Jogo da Memória' }} />
        <Stack.Screen name="ExercicioScreen" component={ExercicioScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: '#f5f5f5',
    marginTop: 20,
  },
  logo: {
    marginTop: 50,
    width: 150,
    height: 200,
  },
});
