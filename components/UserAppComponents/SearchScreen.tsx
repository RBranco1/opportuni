// SearchScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import JobSearch from '../UserAppComponents/JobSearch';
import Footer from '../UserAppComponents/Footer';
import styles from '../../styles/userStyles/Searchlist';

const SearchScreen: React.FC<{ route: { params: { query: string, filters?: any } } }> = ({ route, navigation }) => {
  const { query: initialQuery, filters } = route.params; 
  const [query, setQuery] = useState(initialQuery);

  const handleSearch = () => {
    // Aqui você pode implementar a lógica de pesquisa, se necessário
  };

  const handleFilterPress = () => {
    navigation.navigate('FilterScreen'); 
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}> 
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={16} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Procurar vaga"
            placeholderTextColor="#888"
            value={query}
            onChangeText={setQuery} 
            onSubmitEditing={handleSearch} 
          />
          <TouchableOpacity onPress={handleSearch}>
            <Icon name="search" size={16} color="#888" />
          </TouchableOpacity>
        </View>

        <View style={styles.resultsContainer}>
          <View style={styles.resultsTextContainer}>
            <Text style={styles.resultsTitle}>Resultados</Text>
            <Text style={styles.resultsSubtitle}> empregos encontrados</Text>
          </View>
          <TouchableOpacity style={styles.filterButton} onPress={handleFilterPress}>
            <Icon name="filter" size={18} color="#000" />
          </TouchableOpacity>
        </View>

        <JobSearch title={query} filters={filters} /> 

        <Footer
          onHomePress={() => {}}
          onAccountPress={() => {}}
        />
      </View>
    </ScrollView>
  );
};

export default SearchScreen;
