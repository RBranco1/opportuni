import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from '../UserAppComponents/Footer'; // Caminho correto para o Footer
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import JobList from '../UserAppComponents/JobList';
import { useAuth } from '../../authContext'; // Importa o contexto de autenticação
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation

type RootStackParamList = {
  Menu: undefined;
  EditProfile: undefined;
  JobDetails: undefined;
  RecentJobScreen: undefined;
  AppliedJobsScreen: undefined;
  SearchScreen: { query: string }; // Adiciona a rota de pesquisa
  // Outras rotas se necessário
};

type MainMenuProps = NativeStackScreenProps<RootStackParamList, 'Menu'>;

const MainMenu: React.FC<MainMenuProps> = () => {
  const navigation = useNavigation();
  const { token } = useAuth(); // Obtém o token do contexto de autenticação
  const [userName, setUserName] = useState<string>('Usuário'); // Estado para armazenar o nome do usuário
  const [searchQuery, setSearchQuery] = useState<string>(''); // Estado para armazenar a query de pesquisa

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch('http://192.168.15.62:8080/candidato/perfil', {
          headers: {
            Authorization: `Bearer ${token}`, // Inclui o token na requisição
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserName(data.nomeCompleto); // Atualiza o estado com o nome do usuário
        } else {
          Alert.alert('Erro', 'Não foi possível carregar o perfil do usuário');
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
        Alert.alert('Erro', 'Algo deu errado. Tente novamente.');
      }
    };

    fetchUserProfile();
  }, [token]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigation.navigate('SearchScreen', { query: searchQuery }); // Navega para SearchScreen com a query
      setSearchQuery(''); // Limpa a barra de pesquisa
    }
  };

  const handleKeyPress = (e) => {
    if (e.nativeEvent.key === 'Enter') {
      handleSearch(); // Chama handleSearch ao pressionar Enter
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.welcomeContainer}>
          <View style={styles.welcomeTextContainer}>
            <Text style={styles.welcomeText}>Bem-vindo</Text>
            <Text style={styles.userName}>{userName}</Text>
          </View>
        </View>

        <View style={styles.searchContainer}>
          
          <TextInput
            style={styles.searchInput}
            placeholder="Procurar vaga"
            placeholderTextColor="#888"
            value={searchQuery} // Controla o valor da entrada
            onChangeText={setSearchQuery} // Atualiza o estado
            onKeyPress={handleKeyPress} // Captura a tecla pressionada
          />
          <TouchableOpacity onPress={handleSearch}>
            <Icon name="search" size={16} color="#888" />
          </TouchableOpacity>
        </View>

        <View style={styles.appliedJobsContainer}>
          <Text style={styles.appliedJobsNumber}>10</Text>
          <Text style={styles.appliedJobsText} onPress={() => navigation.navigate('AppliedJobsScreen')}>
            Vagas Acessadas
          </Text>
        </View>

        <Text style={styles.recentJobsTitle} onPress={() => navigation.navigate('RecentJobScreen')}>
          Vagas Recentes
        </Text>

        <JobList />
      </ScrollView>

      {/* Footer com navegação */}
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  scrollContent: {
    paddingBottom: 80, // Espaço para o footer
  },
  welcomeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 45,
    backgroundColor: '#5BCEFA',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    marginBottom: -5, // Para sobrepor a metade do input de pesquisa
  },
  welcomeTextContainer: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 16,
    color: '#000000', // Texto em preto
    textAlign: 'left',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000', // Texto em preto
    textAlign: 'left',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 15,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginTop: -25, // Para elevar metade do input de pesquisa para a zona azul
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },
  appliedJobsContainer: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 10,
    backgroundColor: '#6A1B9A',
    marginHorizontal: '25%',
    borderRadius: 16,
    marginBottom: 20,
    width: '50%', // Largura reduzida
  },
  appliedJobsNumber: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  appliedJobsText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  recentJobsTitle: {
    fontSize: 18,
    marginLeft: 20,
    marginBottom: 10,
    color: '#333333',
    fontWeight: 'bold',
  },
});

export default MainMenu;
