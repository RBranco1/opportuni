import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import Header from '../LoginComponents/LoginHeader';
import styles from '../../styles/loginStyles/CreateUserStyles'; // Importando os estilos

// Defina os tipos de navegação e rota
type RootStackParamList = {
  SecondScreen: undefined;
  LoginScreen: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LoginScreen'>;
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'LoginScreen'>;

interface Props {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
}

const CreateUserAccountScreen: React.FC<Props> = ({ navigation }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  // Campos de entrada com valores padrão para teste
  const [nomeCompleto, setNomeCompleto] = useState('João da Silva');
  const [email, setEmail] = useState('joao.silva@example.com');
  const [dataNascimento, setDataNascimento] = useState('01/01/2000');
  const [senha, setSenha] = useState('senha123');
  const [confirmarSenha, setConfirmarSenha] = useState('senha123');
  const [logradouro, setLogradouro] = useState('Rua Exemplo');
  const [numero, setNumero] = useState('123');
  const [complemento, setComplemento] = useState('Apto 101');
  const [bairro, setBairro] = useState('Centro');
  const [cidade, setCidade] = useState('Cidade Exemplo');
  const [estado, setEstado] = useState('Estado Exemplo');
  const [cep, setCep] = useState('12345-678');

  const handleCreateAccount = async () => {
    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    // Convertendo a data de nascimento para o formato AAAA-MM-DD
    const [dia, mes, ano] = dataNascimento.split('/');
    const dataNascimentoFormatada = `${ano}-${mes}-${dia}`;

    const data = {
      nomeCompleto,
      email,
      dataNascimento: dataNascimentoFormatada,
      senha,
      endereco: {
        logradouro,
        numero,
        complemento,
        bairro,
        cidade,
        estado,
        cep,
      },
    };

    try {
      const response = await fetch('http://192.168.15.62:8080/candidato/registrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        Alert.alert('Sucesso!', 'Usuário criado com sucesso!');
        navigation.navigate('LoginScreen');
      } else {
        Alert.alert('Erro', 'Dados inválidos ou já existentes.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro ao conectar ao servidor');
    }
  };

  return (
    <View style={styles.container}>
      <Header onBackPress={() => navigation.navigate('SecondScreen')} />

      {/* Adicionando ScrollView */}
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
        <Text style={styles.title}>Crie uma conta de usuário</Text>
        <Text style={styles.description}>Insira os dados abaixo.</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome Completo"
          placeholderTextColor="#888"
          value={nomeCompleto}
          onChangeText={setNomeCompleto}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#888"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Data de Nascimento (DD/MM/AAAA)"
          placeholderTextColor="#888"
          value={dataNascimento}
          onChangeText={setDataNascimento}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Senha"
            placeholderTextColor="#888"
            secureTextEntry={!isPasswordVisible}
            value={senha}
            onChangeText={setSenha}
          />
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Icon
              name={isPasswordVisible ? 'eyeo' : 'eye'}
              size={20}
              color="#4F4F4F"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Confirmar Senha"
            placeholderTextColor="#888"
            secureTextEntry={!isConfirmPasswordVisible}
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
          />
          <TouchableOpacity onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}>
            <Icon
              name={isConfirmPasswordVisible ? 'eyeo' : 'eye'}
              size={20}
              color="#4F4F4F"
            />
          </TouchableOpacity>
        </View>

        {/* Campos de Endereço */}
        <TextInput
          style={styles.input}
          placeholder="Logradouro"
          placeholderTextColor="#888"
          value={logradouro}
          onChangeText={setLogradouro}
        />
        <TextInput
          style={styles.input}
          placeholder="Número"
          placeholderTextColor="#888"
          keyboardType="number-pad"
          value={numero}
          onChangeText={setNumero}
        />
        <TextInput
          style={styles.input}
          placeholder="Complemento"
          placeholderTextColor="#888"
          value={complemento}
          onChangeText={setComplemento}
        />
        <TextInput
          style={styles.input}
          placeholder="Bairro"
          placeholderTextColor="#888"
          value={bairro}
          onChangeText={setBairro}
        />
        <TextInput
          style={styles.input}
          placeholder="Cidade"
          placeholderTextColor="#888"
          value={cidade}
          onChangeText={setCidade}
        />
        <TextInput
          style={styles.input}
          placeholder="Estado"
          placeholderTextColor="#888"
          value={estado}
          onChangeText={setEstado}
        />
        <TextInput
          style={styles.input}
          placeholder="CEP"
          placeholderTextColor="#888"
          keyboardType="number-pad"
          value={cep}
          onChangeText={setCep}
        />

        <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
          <Text style={styles.createAccountButtonText}>Criar Conta</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          Ao tocar em “Cadastre-se” você aceita nossos <Text style={styles.linkText}>termos</Text> e <Text style={styles.linkText}>condições</Text>.
        </Text>
      </ScrollView>
    </View>
  );
};

export default CreateUserAccountScreen;