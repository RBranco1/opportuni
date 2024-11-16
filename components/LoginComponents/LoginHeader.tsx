import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

interface HeaderProps {
  onBackPress: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBackPress }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onBackPress} style={styles.circleButton}>
        <Icon name="arrowleft" size={24} color="#4F4F4F" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF', // Fundo branco para o header
  },
  circleButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
