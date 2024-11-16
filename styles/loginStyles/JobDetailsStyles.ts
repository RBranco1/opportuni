import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 80, // Espaço para o botão ou footer
  },
  companyInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  companyText: {
    flex: 1,
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  jobTitle: {
    fontSize: 16,
    color: '#555',
  },
  companyLogo: {
    width: 60,
    height: 60,
  },
  keywordsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  keywordBadge: {
    backgroundColor: '#E1D3FF',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  keywordText: {
    fontSize: 14,
    color: '#40189D',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#5BCEFA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoDetail: {
    fontSize: 14,
    color: '#555',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginBottom: 20,
  },
  applyButton: {
    backgroundColor: '#F5A9B8',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  applyButtonText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default styles;
