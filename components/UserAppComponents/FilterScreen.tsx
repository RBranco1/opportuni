// FilterScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const categories = ['Design', 'Desenvolvedor', 'Direito'];
const subCategories = {
  Design: ['Gráfico', 'UI/UX', 'Moda'],
  Desenvolvedor: ['Frontend', 'Backend', 'Fullstack'],
  Direito: ['Civil', 'Criminal', 'Tributário']
};
const locations = ['São Paulo', 'Campinas', 'Santos', 'Ribeirão Preto', 'Sorocaba'];

const formatCurrency = (value: number): string => {
  return value >= 1000 ? `R$ ${(value / 1000).toFixed(1)}k` : `R$ ${value}`;
};

const FilterScreen: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);
  const [selectedLocation, setSelectedLocation] = useState<string>(locations[0]);
  const [salaryRange, setSalaryRange] = useState<[number, number]>([0, 100000]);

  return (
    <View style={styles.container}>
      {/* Botão de voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => { /* lógica para voltar */ }}>
        <Icon name="arrow-left" size={20} color="#888" />
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>Filtro</Text>

      {/* Categoria */}
      <Text style={styles.sectionTitle}>Categoria</Text>
      <Picker
        selectedValue={selectedCategory}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedCategory(itemValue.toString())}>
        {categories.map((category, index) => (
          <Picker.Item key={index} label={category} value={category} />
        ))}
      </Picker>

      {/* Localização */}
      <Text style={styles.sectionTitle}>Localização</Text>
      <Picker
        selectedValue={selectedLocation}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedLocation(itemValue.toString())}>
        {locations.map((location, index) => (
          <Picker.Item key={index} label={location} value={location} />
        ))}
      </Picker>

      {/* Botão Aplique Agora */}
      <TouchableOpacity style={styles.applyButton}>
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
  sliderContainer: {
    alignItems: 'center', // Centraliza horizontalmente
    marginVertical: 20,
  },
  sliderThumb: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: '#FFF', // Cor do meio da bolinha
    borderWidth: 5,
    borderColor: '#000', // Contorno da bolinha
  },
  salaryRange: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  salaryText: {
    fontSize: 16,
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
