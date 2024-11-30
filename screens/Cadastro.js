import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function CadastroScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput placeholder="Nome de usuário" style={styles.input} />
      <TextInput placeholder="Senha" style={styles.input} secureTextEntry />
      <TextInput
        placeholder="Confirme a senha"
        style={styles.input}
        secureTextEntry
      />
      <Button
        title="Criar Conta"
        onPress={() => navigation.navigate('SelectLevel')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
