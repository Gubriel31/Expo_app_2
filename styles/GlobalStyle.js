
import { StyleSheet } from 'react-native';

const GlobalStyle = StyleSheet.create({

  // Hele skærmen
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20,
  },

  // Stor overskrift
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },

  // Mindre overskrift
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 25,
  },

  // Almindelig tekst
  text: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
  },

  // Et kort
  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 14,
    marginBottom: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 3,
  },

  // Titel inde i et card
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 6,
  },

  // Knapper
  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 8,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  // Input-felter
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 12,
  },

  // Listeelementer
  listItem: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  // MyBookingsScreen

  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  addButton: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },

  bookingCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  bookingInfo: {
    flex: 1,
  },

  bookingTitle: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  bookingDate: {
    color: '#666',
    marginTop: 5,
  },

  edit: {
    color: '#2563EB',
    marginRight: 15,
  },

  delete: {
    color: '#DC2626',
  },

  empty: {
    textAlign: 'center',
    color: '#888',
    marginTop: 30,
  },

});

export default GlobalStyle;
