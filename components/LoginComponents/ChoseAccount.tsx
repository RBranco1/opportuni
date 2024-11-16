import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import Header from '../LoginComponents/LoginHeader';

// Defina os tipos de navegação e rota
type RootStackParamList = {
  SecondScreen: undefined;
  CreateUserAccountScreen: undefined;
  CreateBussinessAccountScreen: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CreateUserAccountScreen'>;
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'CreateUserAccountScreen'>;

interface Props {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
}

const CreateAccountScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header onBackPress={() => navigation.navigate('SecondScreen')} />

      <View style={styles.content}>
        <Text style={styles.title}>Crie uma nova conta</Text>
        <Text style={styles.description}>Qual é o tipo de conta que deseja cadastrar?</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateBussinessAccountScreen')}>
          <Text style={styles.buttonText}>Conta Empresarial</Text>
          <Icon name="arrowright" size={20} color="#4F4F4F" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateUserAccountScreen')}>
          <Text style={styles.buttonText}>Conta Usuário</Text>
          <Icon name="arrowright" size={20} color="#4F4F4F" />
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
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'left',
    color: '#333333',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    color: '#4F4F4F',
  },
});

export default CreateAccountScreen;
