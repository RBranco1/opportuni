import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  LoginScreen: undefined; // Adicione as rotas que você tem
};
type SecondScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

const SecondScreen: React.FC<SecondScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../images/Maleta.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Emprego Exclusivo</Text>
        <Text style={styles.description}>
          Aplicativo para as pessoas transexuais encontrarem vagas de emprego inclusivas.
        </Text>
      </View>
      <TouchableOpacity 
  style={styles.circleButton} 
  onPress={() => navigation.navigate('LoginScreen')}
>
  <Icon name="arrowleft" size={24} color="white" />
</TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  logoContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '80%',
    height: '80%',
  },
  textContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333333',
  },
  circleButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F5A9B8',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SecondScreen;