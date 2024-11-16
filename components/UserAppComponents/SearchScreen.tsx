// SearchScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import JobList from '../UserAppComponents/JobList';
import Footer from '../UserAppComponents/Footer'; // Caminho correto para o Footer

const SearchScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Barra de pesquisa */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={16} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Procurar vaga"
          placeholderTextColor="#888"
        />
      </View>

      {/* Resultados e filtro */}
      <View style={styles.resultsContainer}>
        <View style={styles.resultsTextContainer}>
          <Text style={styles.resultsTitle}>Resultados</Text>
          <Text style={styles.resultsSubtitle}>3 empregos encontrados</Text>
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Icon name="filter" size={18} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Filtros selecionados */}
      <View style={styles.filtersContainer}>
        {['Tempo integral', 'São Paulo', 'Remoto'].map((filter, index) => (
          <View key={index} style={styles.filterBadge}>
            <TouchableOpacity style={styles.filterCloseButton}>
              <Icon name="close" size={12} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.filterText}>{filter}</Text>
          </View>
        ))}
      </View>

      {/* Lista de empregos */}
      <JobList />

      {/* Footer */}
      <Footer
        onHomePress={() => {
          // Lógica para ir para a tela Home
        }}
        onAccountPress={() => {
          // Lógica para ir para a tela Conta
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 15,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },
  resultsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  resultsTextContainer: {
    flex: 1,
  },
  resultsTitle: {
    fontSize: 22, // Aumentado
    fontWeight: 'bold',
    color: '#333333',
  },
  resultsSubtitle: {
    fontSize: 14,
    color: '#777777',
  },
  filterButton: {
    padding: 10,
  },
  filtersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Permite que os filtros quebrem em múltiplas linhas
    marginHorizontal: 20,
    marginBottom: 10,
  },
  filterBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5BCEFA',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  filterCloseButton: {
    backgroundColor: '#40189D',
    borderRadius: 10,
    padding: 3,
    marginRight: 5,
  },
  filterText: {
    fontSize: 16, // Aumentado
    color: '#40189D',
  },
});

export default SearchScreen;
