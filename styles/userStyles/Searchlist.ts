// SearchScreenStyles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  scrollContainer: {
    flexGrow: 1, // Permite que o ScrollView cresça
    paddingBottom: 20, // Adiciona um espaço na parte inferior para o Footer
  },
  
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 15,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },
  resultsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  resultsTextContainer: {
    flex: 1,
  },
  resultsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
  },
  resultsSubtitle: {
    fontSize: 14,
    color: '#777777',
  },
  filterButton: {
    padding: 10,
  },
  filtersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  filterBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5BCEFA',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  filterCloseButton: {
    backgroundColor: '#40189D',
    borderRadius: 10,
    padding: 3,
    marginRight: 5,
  },
  filterText: {
    fontSize: 16,
    color: '#40189D',
  },
});

export default styles;
