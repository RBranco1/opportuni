// UserProfileScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Footer from '../UserAppComponents/Footer'; // Caminho correto para o Footer
import EditProfileForm from '../UserAppComponents/EditProfile'; // Caminho correto para o EditProfileForm

const UserProfileScreen: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Cartão de perfil do usuário */}
        <LinearGradient
          colors={['#F5A9B8', '#F9F9F9', '#5BCEFA']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.profileCard}
        >
          <View style={styles.profileInfo}>
            <Image
              source={require('../../images/perfil.png')} // Certifique-se de que o caminho está correto
              style={styles.profileImage}
              resizeMode="cover"
            />
            <Text style={styles.userName}>Usuario Usuario</Text>
            <Text style={styles.userLocation}>Brasil, São Paulo</Text>
          </View>
          <TouchableOpacity style={styles.editProfileButton} onPress={() => setIsEditing(!isEditing)}>
            <Text style={styles.editProfileButtonText}>Editar Perfil</Text>
            <Icon name="edit" size={16} color="#150A33" style={styles.editIcon} />
          </TouchableOpacity>
        </LinearGradient>

        {/* Conteúdo de edição ou visualização */}
        {isEditing ? (
          <EditProfileForm onSave={() => setIsEditing(false)} />
        ) : (
          <>
            {/* Aba "Sobre mim" */}
            <TouchableOpacity style={styles.sectionHeader}>
              <View style={styles.sectionIconText}>
                <Icon name="user" size={20} color="#F5BCC8" />
                <Text style={styles.sectionTitle}>Sobre mim</Text>
              </View>
            </TouchableOpacity>

            {/* Aba "Experiências" */}
            <TouchableOpacity style={styles.sectionHeader}>
              <View style={styles.sectionIconText}>
                <Icon name="briefcase" size={20} color="#F5BCC8" />
                <Text style={styles.sectionTitle}>Experiências</Text>
              </View>
            </TouchableOpacity>

            {/* Aba "Formações" */}
            <TouchableOpacity style={styles.sectionHeader}>
              <View style={styles.sectionIconText}>
                <Icon name="graduation-cap" size={20} color="#F5BCC8" />
                <Text style={styles.sectionTitle}>Formações</Text>
              </View>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>

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
  scrollContent: {
    paddingBottom: 80, // Espaço para o footer
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 40,
    margin: 20,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  profileInfo: {
    alignItems: 'flex-start',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#150A33',
  },
  userLocation: {
    fontSize: 14,
    color: '#150A33',
  },
  editProfileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  editProfileButtonText: {
    fontSize: 14,
    color: '#150A33',
    marginRight: 5,
  },
  editIcon: {
    color: '#150A33',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  sectionIconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#150B3D',
    marginLeft: 10,
  },
});

export default UserProfileScreen;
