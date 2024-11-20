// FilterScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const categories = ['Design', 'Desenvolvedor', 'Direito'];
const experienceLevels = ['Estágio', 'Junior', 'Pleno', 'Sênior'];
const employmentTypes = ['Estágio', 'CLT', 'PJ', 'Freelancer'];
const modalities = ['Presencial', 'Híbrido', 'Remoto'];
const locations = ['São Paulo', 'Campinas', 'Santos', 'Ribeirão Preto', 'Sorocaba'];

const FilterScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);
  const [selectedLocation, setSelectedLocation] = useState<string>(locations[0]);
  const [selectedExperienceLevel, setSelectedExperienceLevel] = useState<string>(experienceLevels[0]);
  const [selectedEmploymentType, setSelectedEmploymentType] = useState<string>(employmentTypes[0]);
  const [selectedModality, setSelectedModality] = useState<string>(modalities[0]);

  const handleApplyFilters = () => {
    navigation.navigate('SearchScreen', {
      filters: {
        category: selectedCategory,
        location: selectedLocation,
        experienceLevel: selectedExperienceLevel,
        employmentType: selectedEmploymentType,
        modality: selectedModality,
      },
    });
  };

  return (
    <View style={styles.container}>
      {/* Botão de voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#888" />
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>Filtro</Text>

      {/* Categoria 
      <Text style={styles.sectionTitle}>Categoria</Text>
      <Picker
        selectedValue={selectedCategory}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedCategory(itemValue.toString())}>
        {categories.map((category, index) => (
          <Picker.Item key={index} label={category} value={category} />
        ))}
      </Picker>
      */}

      {/* Nível de Experiência */}
      <Text style={styles.sectionTitle}>Nível de Experiência</Text>
      <Picker
        selectedValue={selectedExperienceLevel}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedExperienceLevel(itemValue.toString())}>
        {experienceLevels.map((level, index) => (
          <Picker.Item key={index} label={level} value={level} />
        ))}
      </Picker>

      {/* Tipo de Emprego */}
      <Text style={styles.sectionTitle}>Tipo de Emprego</Text>
      <Picker
        selectedValue={selectedEmploymentType}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedEmploymentType(itemValue.toString())}>
        {employmentTypes.map((type, index) => (
          <Picker.Item key={index} label={type} value={type} />
        ))}
      </Picker>

      {/* Modalidade */}
      <Text style={styles.sectionTitle}>Modalidade</Text>
      <Picker
        selectedValue={selectedModality}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedModality(itemValue.toString())}>
        {modalities.map((modality, index) => (
          <Picker.Item key={index} label={modality} value={modality} />
        ))}
      </Picker>


      {/* Botão Aplique Agora */}
      <TouchableOpacity onPress={handleApplyFilters} style={styles.applyButton}>
        <Text style={styles.applyButtonText}>Aplique agora</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  picker: {
    height: 50,
    marginBottom: 20,
  },
  applyButton: {
    backgroundColor: '#F5A9B8',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  applyButtonText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default FilterScreen;
