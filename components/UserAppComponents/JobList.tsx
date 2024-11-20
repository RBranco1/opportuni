import React, { useEffect, useState } from 'react';
import { View, Text, Image, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/userStyles/jobListStyle'; // Ajuste o caminho conforme necessário
import { useAuth } from '../../authContext'; // Atualize o caminho conforme necessário
import { useNavigation } from '@react-navigation/native';

// Definindo a interface para o tipo de dado do job
interface Job {
  titulo: string;
  nomeEmpresa: string;
  endereco: string;
  nivelExperiencia: string;
}

const JobList: React.FC = () => {
  const { token } = useAuth();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://192.168.15.62:8080/candidato/vagas', {
          headers: {
            Authorization: `Bearer ${token}`, // Passa o token no cabeçalho
          },
        });

        if (response.ok) {
          const data = await response.json();
          setJobs(data);
        } else {
          Alert.alert('Erro', 'Não foi possível carregar as vagas');
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
        Alert.alert('Erro', 'Algo deu errado. Tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [token]);

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

  if (loading) {
    return <Text>Carregando...</Text>;
  }

  return (
    <>
      {jobs.map((job: Job) => (
        <TouchableOpacity
          key={job.titulo}
          style={styles.jobCard}
          onPress={() => navigation.navigate('JobDetails', { jobTitle: job.titulo })} // Passa o título da vaga
        >
          <Image
            source={getLogoSource(job.nivelExperiencia)}
            style={styles.companyLogo}
            resizeMode="contain"
          />
          <View style={styles.jobDetails}>
            <Text style={styles.companyName}>{job.nomeEmpresa}</Text>
            <Text style={styles.jobTitle}>{job.titulo}</Text>
            <View style={styles.jobInfo}>
              <Icon name="map-marker" size={14} color="#777" style={styles.jobIcon} />
              <Text style={styles.locationText}>{job.endereco}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default JobList;
