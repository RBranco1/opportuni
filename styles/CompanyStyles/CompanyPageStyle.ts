import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  scrollContent: {
    paddingBottom: 80, // Espaço para o footer
  },
  header: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  companyLogo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  companyDetails: {
    fontSize: 14,
    color: '#777',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  tabButton: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10, // Mais quadrado
    backgroundColor: '#FFFFFF',
  },
  activeTabButton: {
    backgroundColor: '#F5A9B8',
  },
  tabButtonText: {
    fontSize: 16,
    color: '#333',
  },
  activeTabButtonText: {
    color: '#FFF',
  },
});

export default styles;
