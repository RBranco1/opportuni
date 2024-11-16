import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/CompanyStyles/AddJobStyle'; // Ajuste o caminho conforme necessário
import { useAuth } from '../../authContext'; // Importa o contexto de autenticação
import { useNavigation } from '@react-navigation/native'; // Importa o hook de navegação

const AddJobScreen: React.FC = () => {
  const { token } = useAuth(); // Obtém o token de autenticação
  const navigation = useNavigation(); // Usa o hook useNavigation para navegação

  // Estado dos campos de entrada, predefinido para testes
  const [title, setTitle] = useState('Desenvolvedor React Native');
  const [description, setDescription] = useState('Responsável pelo desenvolvimento de aplicativos móveis.');
  const [endDate, setEndDate] = useState('2024-12-31');
  const [link, setLink] = useState('https://example.com/vaga');
  const [experienceLevel, setExperienceLevel] = useState<'Estagiário' | 'Júnior' | 'Pleno' | 'Sênior'>('Pleno');
  const [employmentMode, setEmploymentMode] = useState<'Híbrido' | 'Presencial' | 'Remoto'>('Remoto');
  const [street, setStreet] = useState('Avenida Paulista');
  const [number, setNumber] = useState('1000');
  const [complement, setComplement] = useState('Sala 101');
  const [neighborhood, setNeighborhood] = useState('Bela Vista');
  const [city, setCity] = useState('São Paulo');
  const [state, setState] = useState('SP');
  const [zipCode, setZipCode] = useState('01310-100');
  const [category, setCategory] = useState('Tecnologia');

  const handlePublish = async () => {
    const jobData = {
      titulo: title,
      descricao: description,
      dataInicial: new Date().toISOString().split('T')[0], // Define a data inicial como a data atual
      dataFinal: endDate,
      link: link,
      nivelExperiencia: {
        descricao: experienceLevel,
      },
      tipoEmprego: {
        descricao: 'Tempo Integral', // Supondo um tipo fixo, ajuste conforme necessário
      },
      tipoModalidade: {
        descricao: employmentMode,
      },
      endereco: {
        logradouro: street,
        numero: number,
        complemento: complement,
        bairro: neighborhood,
        cidade: city,
        estado: state,
        cep: zipCode,
      },
      categoria: {
        descricao: category,
      },
    };

    try {
      const response = await fetch('http://192.168.15.62:8080/empresa/adicionarVaga', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Usa o token do contexto
        },
        body: JSON.stringify(jobData),
      });

      if (response.ok) {
        Alert.alert('Sucesso', 'Vaga publicada com sucesso!', [
          { text: 'OK', onPress: () => navigation.navigate('CompanyPage') }, // Redireciona para CompanyPage
        ]);
      } else {
        Alert.alert('Erro', 'Houve um problema ao publicar a vaga.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      Alert.alert('Erro', 'Algo deu errado. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="#888" />
        </TouchableOpacity>
        <Text style={styles.title}>Adicionar Vaga</Text>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Título da Vaga"
        />
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={setDescription}
          placeholder="Descrição"
          multiline
        />
        <TextInput
          style={styles.input}
          value={endDate}
          onChangeText={setEndDate}
          placeholder="Data Final (YYYY-MM-DD)"
        />
        <TextInput
          style={styles.input}
          value={link}
          onChangeText={setLink}
          placeholder="Link"
        />

        {/* Seleção de Nível de Experiência */}
        <View style={styles.pickerContainer}>
          <Text style={styles.sectionTitle}>Nível de Experiência</Text>
          {['Estagiário', 'Júnior', 'Pleno', 'Sênior'].map((level) => (
            <TouchableOpacity key={level} onPress={() => setExperienceLevel(level as 'Estagiário' | 'Júnior' | 'Pleno' | 'Sênior')} style={styles.pickerItem}>
              <Text style={styles.pickerText}>{level}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Seleção de Modalidade */}
        <View style={styles.pickerContainer}>
          <Text style={styles.sectionTitle}>Modalidade</Text>
          {['Híbrido', 'Presencial', 'Remoto'].map((mode) => (
            <TouchableOpacity key={mode} onPress={() => setEmploymentMode(mode as 'Híbrido' | 'Presencial' | 'Remoto')} style={styles.pickerItem}>
              <Text style={styles.pickerText}>{mode}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Campos de Endereço */}
        <Text style={styles.sectionTitle}>Endereço</Text>
        <TextInput
          style={styles.input}
          value={street}
          onChangeText={setStreet}
          placeholder="Logradouro"
        />
        <TextInput
          style={styles.input}
          value={number}
          onChangeText={setNumber}
          placeholder="Número"
        />
        <TextInput
          style={styles.input}
          value={complement}
          onChangeText={setComplement}
          placeholder="Complemento"
        />
        <TextInput
          style={styles.input}
          value={neighborhood}
          onChangeText={setNeighborhood}
          placeholder="Bairro"
        />
        <TextInput
          style={styles.input}
          value={city}
          onChangeText={setCity}
          placeholder="Cidade"
        />
        <TextInput
          style={styles.input}
          value={state}
          onChangeText={setState}
          placeholder="Estado"
        />
        <TextInput
          style={styles.input}
          value={zipCode}
          onChangeText={setZipCode}
          placeholder="CEP"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          value={category}
          onChangeText={setCategory}
          placeholder="Categoria"
        />

        <TouchableOpacity style={styles.publishButton} onPress={handlePublish}>
          <Text style={styles.publishButtonText}>Publicar Vaga</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default AddJobScreen;
