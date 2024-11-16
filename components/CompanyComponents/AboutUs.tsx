// AboutUsSection.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AboutUsSection: React.FC = () => {
  const [about, setAbout] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  const [website, setWebsite] = useState('www.loreipsum.com');
  const [industry, setIndustry] = useState('Informatica');
  const [location, setLocation] = useState('Brasil');
  const [size, setSize] = useState('Pequeno porte');
  const [since, setSince] = useState('1998');

  const [editableField, setEditableField] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      {[
        { label: 'Sobre Nós', value: about, setter: setAbout, multiline: true },
        { label: 'Site', value: website, setter: setWebsite, isWebsite: true },
        { label: 'Indústria', value: industry, setter: setIndustry },
        { label: 'Localização', value: location, setter: setLocation },
        { label: 'Porte', value: size, setter: setSize },
        { label: 'Desde', value: since, setter: setSince },
      ].map(({ label, value, setter, multiline, isWebsite }) => (
        <View key={label} style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={[
                styles.input,
                multiline && styles.largeInput,
                editableField === label && styles.activeInput,
                isWebsite && styles.websiteText,
              ]}
              value={value}
              onChangeText={setter}
              editable={editableField === label}
              multiline={multiline}
            />
            <TouchableOpacity onPress={() => setEditableField(editableField === label ? null : label)}>
              <Icon name="edit" size={16} color="#5BCEFA" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
    textAlign: 'left', // Alinhado à esquerda
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: 'rgba(240, 240, 240, 0.5)',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
    borderColor: 'transparent', // Bordas transparentes
    borderWidth: 1,
    marginRight: 10,
  },
  websiteText: {
    color: 'orange', // Texto em laranja para o site
  },
  largeInput: {
    height: 100,
  },
  activeInput: {
    backgroundColor: '#FFFFFF',
  },
});

export default AboutUsSection;
