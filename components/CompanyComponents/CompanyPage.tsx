import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import AboutUsSection from '../../components/CompanyComponents/AboutUs';
import JobsSection from '../../components/CompanyComponents/JobsSection';
import Footer from '../../components/UserAppComponents/Footer';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from '../../styles/CompanyStyles/CompanyPageStyle'; // Ajuste o caminho conforme necessário
import { useAuth } from '../../authContext'; // Importa o contexto de autenticação

type RootStackParamList = {
  Menu: undefined;
  EditProfile: undefined;
  AppliedJobsScreen: undefined;
  AddJob: undefined;
  // Outras rotas se necessário
};

interface CompanyProfile {
  nomeEmpresa: string;
  cnpj: string;
  email: string;
  endereco: {
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
  };
}

const CompanyPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'about' | 'jobs'>('about');
  const [companyProfile, setCompanyProfile] = useState<CompanyProfile | null>(null);
  const { token } = useAuth(); // Obtém o token de autenticação
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const fetchCompanyProfile = async () => {
      try {
        const response = await fetch('http://192.168.15.62:8080/empresa/perfil', {
          headers: {
            Authorization: `Bearer ${token}`, // Passa o token no cabeçalho
          },
        });

        if (response.ok) {
          const data: CompanyProfile = await response.json();
          setCompanyProfile(data);
        } else {
          Alert.alert('Erro', 'Não foi possível carregar o perfil da empresa');
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
        Alert.alert('Erro', 'Algo deu errado. Tente novamente.');
      }
    };

    fetchCompanyProfile();
  }, [token]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Image
            source={require('../../images/companyLogo2.png')} // Certifique-se de que o caminho está correto
            style={styles.companyLogo}
            resizeMode="cover"
          />
          <Text style={styles.companyName}>{companyProfile ? companyProfile.nomeEmpresa : 'Empresa'}</Text>
          <Text style={styles.companyDetails}>
            {companyProfile ? `CNPJ: ${companyProfile.cnpj}` : 'CNPJ não disponível'}
          </Text>
        </View>

        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tabButton, selectedTab === 'about' && styles.activeTabButton]}
            onPress={() => setSelectedTab('about')}
          >
            <Text style={[styles.tabButtonText, selectedTab === 'about' && styles.activeTabButtonText]}>Sobre Nós</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, selectedTab === 'jobs' && styles.activeTabButton]}
            onPress={() => setSelectedTab('jobs')}
          >
            <Text style={[styles.tabButtonText, selectedTab === 'jobs' && styles.activeTabButtonText]}>Vagas</Text>
          </TouchableOpacity>
        </View>

        {selectedTab === 'about' ? <AboutUsSection /> : <JobsSection />}
      </ScrollView>
      {/* Footer */}
      <Footer navigation={navigation} />
    </View>
  );
};

export default CompanyPage;
