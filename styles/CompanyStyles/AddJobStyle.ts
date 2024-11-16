import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  pickerContainer: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  pickerItem: {
    paddingVertical: 10,
  },
  pickerText: {
    fontSize: 16,
    color: '#333',
  },
  selectedType: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  salaryControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  salaryInput: {
    width: 100,
    textAlign: 'center',
    marginHorizontal: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
  },
  publishButton: {
    backgroundColor: '#F5A9B8',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  publishButtonText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default styles;
