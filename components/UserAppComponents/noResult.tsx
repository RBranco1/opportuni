// NoResultScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from '../UserAppComponents/Footer'; // Caminho correto para o Footer

const NoResultScreen: React.FC = () => {
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

      {/* Imagem e mensagem de nenhum resultado */}
      <View style={styles.content}>
        <Image
          source={require('../../images/noresult.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.noResultTitle}>Nenhum resultado encontrado</Text>
        <Text style={styles.noResultDescription}>
          A pesquisa não foi encontrada, verifique a ortografia ou escreva outra palavra.
        </Text>
      </View>

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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: '80%',
    height: 200,
    marginBottom: 20,
  },
  noResultTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#150B3D',
    textAlign: 'center',
    marginBottom: 10,
  },
  noResultDescription: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
  },
});

export default NoResultScreen;
