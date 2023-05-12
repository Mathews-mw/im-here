import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },

  eventName: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },

  eventDate: {
    color: '#6d6d6d',
  },

  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 6,
    color: '#FFF',
    padding: 16,
    marginRight: 12,
    fontSize: 16
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 6,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },

  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  },

  emptyList: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center'
  },
});