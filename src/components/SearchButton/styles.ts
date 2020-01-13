import {StyleSheet} from 'react-native';
import {theme} from '../../styled';

const {searchButtonBackground, searchButtonBorder} = theme.color;
const styles = StyleSheet.create({
  searchIcon: {
    right: '8%',
    top: 1,
  },
  buttonText: {
    fontSize: 24,
    left: '10%',
  },
  buttonContainer: {
    alignSelf: 'center',
  },
  button: {
    flexDirection: 'row',
    width: 380,
    padding: '2%',
    borderBottomColor: searchButtonBorder,
    borderRadius: 6,
    borderWidth: 2,
    backgroundColor: searchButtonBackground,
  },
});

export default styles;
