// AppliedJobsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import JobList from '../UserAppComponents/JobList'; // Certifique-se de que o caminho está correto para o JobList
import Footer from '../UserAppComponents/Footer'; // Caminho correto para o Footer
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Menu: undefined;
  EditProfile: undefined;
  AppliedJobsScreen: undefined; // Adicione outras rotas conforme necessário
};

  const AppliedJobsScreen: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  return (
    <View style={styles.container}>
      {/* Botão de voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => { /* lógica para voltar */ }}>
        <Icon name="arrow-left" size={20} color="#888" />
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>Vagas Aplicadas</Text>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Texto "Suas Candidaturas" */}
        <Text style={styles.subTitle}>Suas Candidaturas</Text>

        {/* Lista de empregos aplicados */}
        <JobList />
      </ScrollView>

      {/* Footer */}
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10,
    color: '#333333',
  },
  scrollContent: {
    paddingBottom: 80, // Espaço para o footer
  },
});

export default AppliedJobsScreen;
