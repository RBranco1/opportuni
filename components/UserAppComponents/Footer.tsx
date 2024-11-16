import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationProp } from '@react-navigation/native';

interface FooterProps {
  navigation: NavigationProp<any>;
  // Remova ou torne 'route' opcional se não for necessário
  route?: any;
}

const Footer: React.FC<FooterProps> = ({ navigation }) => {
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Menu')}>
        <Icon name="home" size={24} color="#DB5E77" />
        <Text style={styles.footerText}>Home</Text>
      </TouchableOpacity>

      <Image
        source={require('../../images/Logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('EditProfile')}>
        <Icon name="user" size={24} color="#DB5E77" />
        <Text style={styles.footerText}>Conta</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#DB5E77',
    marginTop: 4,
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default Footer;
