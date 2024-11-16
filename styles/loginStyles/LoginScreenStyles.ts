import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3ECF8',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'left',
    color: '#333333',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    fontSize: 16,
    color: '#333333',
    borderColor: '#ddd',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    borderColor: '#ddd',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },
  loginButton: {
    backgroundColor: '#5BCEFA',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  loginButtonText: {
    fontSize: 18,
    color: '#000000',
  },
  forgotPasswordText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
  },
  linkText: {
    color: '#40189D',
    fontWeight: 'bold',
  },
  createAccountButton: {
    backgroundColor: '#F5A9B8',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 10, // Adicionando margem inferior
  },
  createAccountButtonText: {
    fontSize: 18,
    color: '#000000',
  },
  enterAsCandidateButton: {
    backgroundColor: '#D1E7DD', // Cor diferente para o botão
    paddingVertical: 10, // Botão um pouco menor
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10, // Adicionando espaço acima do botão
  },
  enterAsCandidateButtonText: {
    fontSize: 16, // Texto um pouco menor
    color: '#000000',
  },
});

export default styles;
