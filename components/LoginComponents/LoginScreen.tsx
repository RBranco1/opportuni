import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import Header from '../LoginComponents/LoginHeader';
import styles from '../../styles/loginStyles/LoginScreenStyles';
import { useAuth } from '../../authContext';

// Defina os tipos de navegação e rota
type RootStackParamList = {
  SecondScreen: undefined;
  Menu: undefined;
  ChoseAccount: undefined;
  LoginScreenBussiness: undefined; // Adicionando a rota LoginScreenBussiness
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Menu'>;
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Menu'>;

interface Props {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
  // Preencha os campos com valores padrão para testes
  const [email, setEmail] = useState('maria.silva@example.com'); // E-mail padrão
  const [password, setPassword] = useState('senhaForte987'); // Senha padrão
  
  const { setToken } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.15.62:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
      });

      if (response.ok) {
        const token = await response.text();
        console.log('Token recebido:', token);
        setToken(token); // Armazena o token no contexto
        navigation.navigate('Menu');
      } else if (response.status === 403) {
        Alert.alert('Erro', 'Usuário ou senha incorreta');
      } else {
        Alert.alert('Erro', 'Algo deu errado. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      Alert.alert('Erro', 'Algo deu errado. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Header onBackPress={() => navigation.navigate('SecondScreen')} />

      <View style={styles.content}>
        <Text style={styles.title}>Logar</Text>
        <Text style={styles.description}>Entre com:</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#888"
          keyboardType="email-address"
          value={email} // Define o valor do campo de e-mail
          onChangeText={(text) => setEmail(text)} // Atualiza o estado ao digitar
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Senha"
            placeholderTextColor="#888"
            secureTextEntry={!isPasswordVisible}
            value={password} // Define o valor do campo de senha
            onChangeText={(text) => setPassword(text)} // Atualiza o estado ao digitar
          />
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Icon
              name={isPasswordVisible ? 'eyeo' : 'eye'}
              size={20}
              color="#4F4F4F"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.loginButton}
          onPress={handleLogin}>
          <Text style={styles.loginButtonText}>LOGAR</Text>
        </TouchableOpacity>

        <Text style={styles.forgotPasswordText}>
          Esqueceu a senha?{' '}
          <Text style={styles.linkText} onPress={() => { /* Lógica para recuperação de senha */ }}>
            Nova senha
          </Text>
        </Text>

        <TouchableOpacity 
          style={styles.createAccountButton} 
          onPress={() => navigation.navigate('ChoseAccount')}>
          <Text style={styles.createAccountButtonText}>Criar Conta</Text>
        </TouchableOpacity>

        {/* Botão para entrar como empresa */}
        <TouchableOpacity 
          style={styles.createAccountButton} 
          onPress={() => navigation.navigate('LoginScreenBussiness')}>
          <Text style={styles.createAccountButtonText}>Entrar como Empresa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
