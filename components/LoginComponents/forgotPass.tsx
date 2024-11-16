import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import Header from '../LoginComponents/LoginHeader';


// Defina os tipos de navegação e rota
type RootStackParamList = {
  SecondScreen: undefined;
  // Outros parâmetros de rota, se existirem
};

type ForgotPasswordScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SecondScreen'>;
type ForgotPasswordScreenRouteProp = RouteProp<RootStackParamList, 'SecondScreen'>;

interface Props {
  navigation: ForgotPasswordScreenNavigationProp;
  route: ForgotPasswordScreenRouteProp;
}

const ForgotPasswordScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header onBackPress={() => navigation.navigate('SecondScreen')} />

      <View style={styles.content}>
        <Text style={styles.title}>Esqueceu a Senha?</Text>
        <Text style={styles.description}>
          Para redefinir sua senha, você precisa do seu e-mail para que possa ser autenticado
        </Text>

        <Image
          source={require('../../images/forgotpass.png')}
          style={styles.image}
          resizeMode="contain"
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          keyboardType="email-address"
        />

        <TouchableOpacity style={styles.sendCodeButton}>
          <Text style={styles.sendCodeButtonText}>Enviar Código</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3ECF8',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333333',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    fontSize: 16,
    color: '#333333',
    borderColor: '#ddd',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  sendCodeButton: {
    backgroundColor: '#F5A9B8',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  sendCodeButtonText: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#5BCEFA',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  cancelButtonText: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
