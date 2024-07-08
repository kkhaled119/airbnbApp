import {StyleSheet} from 'react-native';

import {Dimensions} from 'react-native';
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 90,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginLeft: 25,
    marginTop: 30,
  },

  button: {
    backgroundColor: '#fff',
    width: 200,
    height: 40,
    marginTop: 25,
    borderRadius: 10,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  searchButton: {
    backgroundColor: '#fff',
    width: Dimensions.get('screen').width - 20,
    height: 60,
    marginHorizontal: 10,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 60,
    zIndex: 100,
  },
  searchbtText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
