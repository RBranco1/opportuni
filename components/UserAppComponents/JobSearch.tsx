// JobSearch.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Image, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/userStyles/jobListStyle'; 
import { useAuth } from '../../authContext'; 
import { useNavigation } from '@react-navigation/native';

type JobSearchProps = {
  title: string; 
  filters?: {
    category?: string;
    location?: string;
    experienceLevel?: string;
    employmentType?: string;
    modality?: string;
  };
};

const JobSearch: React.FC<JobSearchProps> = ({ title, filters }) => {
  const { token } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const params = new URLSearchParams({
          titulo: title,
          ...(filters?.experienceLevel && { nivelExperiencia: filters.experienceLevel }),
          ...(filters?.employmentType && { tipoEmprego: filters.employmentType }),
          ...(filters?.modality && { tipoModalidade: filters.modality }),
          ...(filters?.location && { localizacao: filters.location }), // Se precisar adicionar localização
        });

        const response = await fetch(`http://192.168.15.62:8080/candidato/vagas/pesquisar?${params.toString()}`, {
          headers: {
            Authorization: `Bearer ${token}`,
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
  }, [title, filters, token]); 

  if (loading) {
    return <Text>Carregando...</Text>;
  }

  if (jobs.length === 0) {
    return <Text>Nenhuma vaga encontrada.</Text>;
  }

  return (
    <>
      {jobs.map((job) => (
        <TouchableOpacity
          key={job.titulo}
          style={styles.jobCard}
          onPress={() => navigation.navigate('JobDetails', { jobTitle: job.titulo })} 
        >
          <Image
            source={require('../../images/companyLogo1.png')}
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

export default JobSearch;
