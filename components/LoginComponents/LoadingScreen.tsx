import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// Caso esteja utilizando expo, você pode usar o expo-google-fonts para facilitar

const LoadingScreen = () => {


  return (
    <LinearGradient
      colors={['#5BCEFA', '#F5A9B8']}
      style={styles.container}
    >
      <Image
        source={require('../../images/Logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.appName}>oportunitrans</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 350,
    height: 350,
  },
  appName: {
    marginTop: 20,
    fontSize: 24,
    color: '#000000',
    fontWeight: 'bold', // Negrito
    textShadowColor: '#000000', // Cor da sombra
    textShadowOffset: { width: 1, height: 1 }, // Deslocamento da sombra
    textShadowRadius: 2, // Raio da sombra
  },
});

export default LoadingScreen;
