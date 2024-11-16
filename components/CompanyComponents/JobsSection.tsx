import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import JobList from '../UserAppComponents/JobList';
import { useNavigation } from '@react-navigation/native'; // Importa o hook

const JobsSection: React.FC = () => {
  const navigation = useNavigation(); // Usa o hook useNavigation

  return (
    <View style={styles.container}>
      <JobList />
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddJob')}>
        <Icon name="plus" size={16} color="#5BCEFA" />
        <Text style={styles.addButtonText}>Adicionar Vaga</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 80, // Espaço para o footer
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  addButtonText: {
    fontSize: 14,
    color: '#5BCEFA',
    marginLeft: 5,
  },
});

export default JobsSection;
