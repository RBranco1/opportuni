import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import Header from './components/LoginComponents/LoginHeader';

// Defina os tipos de navegação e rota
type RootStackParamList = {
  SecondScreen: undefined;
  // Outros parâmetros de rota, se existirem
};

type SuccessScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SecondScreen'>;
type SuccessScreenRouteProp = RouteProp<RootStackParamList, 'SecondScreen'>;

interface Props {
  navigation: SuccessScreenNavigationProp;
  route: SuccessScreenRouteProp;
}

const SuccessScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header onBackPress={() => navigation.navigate('SecondScreen')} />

      <View style={styles.content}>
        <Text style={styles.title}>Sucesso</Text>
        <Text style={styles.description}>
          Sua senha foi atualizada, com sucesso.
        </Text>

        <Image
          source={require('./images/loginsucess.png')}
          style={styles.image}
          resizeMode="contain"
        />

        <TouchableOpacity style={styles.continueButton} onPress={() => { /* Lógica para continuar */ }}>
          <Text style={styles.continueButtonText}>Continuar</Text>
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
    width: 250, // Ajuste o tamanho conforme necessário
    height: 250, // Ajuste o tamanho conforme necessário
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: '#F5A9B8',
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
  continueButtonText: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default SuccessScreen;
