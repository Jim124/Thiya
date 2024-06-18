import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    shadowColor: '#000',
    elevation: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 20,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: '50%',
  },
  texts: {
    flex: 1,
    paddingLeft: 15,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
    marginTop: 10,
  },
  btn: {
    backgroundColor: '#eee',
    borderRadius: '50%',
    padding: 10,
  },
});

export default style;
