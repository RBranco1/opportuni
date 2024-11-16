// JobListStyles.ts

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  jobCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  companyLogo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  jobDetails: {
    flex: 1,
  },
  companyName: {
    fontSize: 12,
    color: '#777',
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  jobInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  jobIcon: {
    marginRight: 5,
  },
  salaryText: {
    fontSize: 14,
    color: '#555',
  },
  locationText: {
    fontSize: 14,
    color: '#555',
  },
});
