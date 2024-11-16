// EditProfileForm.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const EditProfileForm: React.FC<{ onSave: () => void }> = ({ onSave }) => {
  const [name, setName] = useState('Usuario Usuario');
  const [socialName, setSocialName] = useState('Usuario');
  const [birthDate, setBirthDate] = useState('09/1998');
  const [email, setEmail] = useState('email@email.com');
  const [state, setState] = useState('São Paulo');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome Social</Text>
        <TextInput
          style={styles.input}
          value={socialName}
          onChangeText={setSocialName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Data de Nascimento</Text>
        <TextInput
          style={styles.input}
          value={birthDate}
          onChangeText={setBirthDate}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Estado</Text>
        <TextInput
          style={styles.input}
          value={state}
          onChangeText={setState}
        />
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={onSave}>
        <Text style={styles.saveButtonText}>SALVAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 80, // Espaço para o footer
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  saveButton: {
    backgroundColor: '#5BCEFA',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default EditProfileForm;
