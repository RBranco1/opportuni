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
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    fontSize: 16,
    color: '#333333',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },
  createAccountButton: {
    backgroundColor: '#F5A9B8',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  createAccountButtonText: {
    fontSize: 18,
    color: '#000000',
  },
  linkText: {
    color: '#40189D',
    fontWeight: 'bold',
  },
});

export default styles;
