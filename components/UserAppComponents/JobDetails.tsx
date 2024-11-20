import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/loginStyles/JobDetailsStyles'; // Ajuste o caminho conforme necessário
import { useRoute, RouteProp } from '@react-navigation/native';
import { useAuth } from '../../authContext'; // Importa o contexto de autenticação
import { Linking } from 'react-native';


type RootStackParamList = {
  JobDetails: { jobTitle: string };
};

type JobDetailsScreenRouteProp = RouteProp<RootStackParamList, 'JobDetails'>;

interface JobDetails {
  titulo: string;
  descricao: string;
  dataInicial: string;
  dataFinal: string;
  link: string;
  nomeEmpresa: string;
  nivelExperiencia: string;
  tipoEmprego: string;
  tipoModalidade: string;
  endereco: string;
  categoria: string;
}

const JobDetailsScreen: React.FC = () => {
  const route = useRoute<JobDetailsScreenRouteProp>();
  const { jobTitle } = route.params;
  const { token } = useAuth(); // Obtém o token do contexto de autenticação
  const [jobDetails, setJobDetails] = useState<JobDetails | null>(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const formattedTitle = jobTitle.replace(/['"]+/g, ''); // Remove aspas simples e duplas
        const url = `http://192.168.15.62:8080/candidato/vagas/busca?titulo=${encodeURIComponent(formattedTitle)}`;
        console.log('Fetching job details from URL:', url);

        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`, // Inclui o token na requisição
          },
        });

        if (response.ok) {
          const data: JobDetails[] = await response.json(); // Note que agora estamos esperando um array
          if (data.length > 0) {
            setJobDetails(data[0]); // Pega o primeiro item do array
          } else {
            Alert.alert('Erro', 'Nenhuma vaga encontrada com esse título');
          }
        } else {
          Alert.alert('Erro', 'Não foi possível carregar os detalhes da vaga');
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
        Alert.alert('Erro', 'Algo deu errado. Tente novamente.');
      }
    };


    

    fetchJobDetails();
  }, [jobTitle, token]);

  const handleApply = () => {
    if (jobDetails?.link) {
      Linking.openURL(jobDetails.link).catch((err) =>
        Alert.alert('Erro', 'Não foi possível abrir o link da vaga.')
      );
    } else {
      Alert.alert('Erro', 'Link da vaga não disponível.');
    }
  };

  const getLogoSource = (nivelExperiencia: string) => {
    switch (nivelExperiencia) {
      case 'Estágio':
      case 'Júnior':
        return require('../../images/companyLogo1.png');
      case 'Pleno':
        return require('../../images/companyLogo2.png');
      case 'Sênior':
        return require('../../images/companyLogo3.png');
      default:
        return require('../../images/companyLogo1.png'); // Logo padrão
    }
  };

  const handleFeedbackForm = () => {
    const baseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfvrUSBExP7btcVS627sRHDRrG7IkotoVRgY3veQ2NTW_PtjQ/viewform?usp=pp_url';
    const filledUrl = `${baseUrl}&entry.28241720=${encodeURIComponent(jobDetails?.titulo || '')}`;
  
    Linking.openURL(filledUrl).catch((err) =>
      Alert.alert('Erro', 'Não foi possível abrir o formulário.')
    );
  };
  

  if (!jobDetails) {
    return <Text>Carregando...</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => { /* lógica para voltar */ }}>
          <Icon name="arrow-left" size={20} color="#888" />
        </TouchableOpacity>
        <Text style={styles.title}>Detalhes</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.companyInfo}>
          <View style={styles.companyText}>
            <Text style={styles.companyName}>{jobDetails.nomeEmpresa}</Text>
            <Text style={styles.jobTitle}>{jobDetails.titulo}</Text>
          </View>
          <Image
            source={getLogoSource(jobDetails.nivelExperiencia)}
            style={styles.companyLogo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.iconCircle}>
            <Icon name="briefcase" size={20} color="#40189D" />
          </View>
          <View>
            <Text style={styles.infoTitle}>Tipo de Emprego</Text>
            <Text style={styles.infoDetail}>{jobDetails.tipoEmprego}</Text>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.iconCircle}>
            <Icon name="map-marker" size={20} color="#40189D" />
          </View>
          <View>
            <Text style={styles.infoTitle}>Localização</Text>
            <Text style={styles.infoDetail}>{jobDetails.endereco}</Text>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.iconCircle}>
            <Icon name="calendar" size={20} color="#40189D" />
          </View>
          <View>
            <Text style={styles.infoTitle}>Período</Text>
            <Text style={styles.infoDetail}>{jobDetails.dataInicial} - {jobDetails.dataFinal}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Descrição</Text>
        <Text style={styles.description}>
          {jobDetails.descricao}
        </Text>
        <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
          <Text style={styles.applyButtonText}>Aplicar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.applyButton} onPress={handleFeedbackForm}>
          <Text style={styles.applyButtonText}>Enviar Feedback</Text>
        </TouchableOpacity>



      </ScrollView>
    </View>
  );
};

export default JobDetailsScreen;
