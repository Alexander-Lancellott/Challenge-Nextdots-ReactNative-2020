import {StyleSheet} from 'react-native';
import {theme} from '../../../styled';

const {
  inputBackground,
  goBackButton,
  closeButton,
  headerBackground,
  safeArea,
} = theme.color;
const styles = StyleSheet.create({
  load: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  goBackButtonContainer: {
    right: '8%',
  },
  goBackButton: {
    color: goBackButton,
    backgroundColor: null,
  },
  searchIcon: {
    position: 'absolute',
    left: 52,
  },
  closeButtonContainer: {
    right: '30%',
  },
  closeButton: {
    color: closeButton,
    backgroundColor: null,
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: headerBackground,
  },
  safeArea: {
    backgroundColor: safeArea,
  },
  background: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'stretch',
  },
  input: {
    right: '35%',
    height: '70%',
    width: '76%',
    fontSize: 20,
    padding: '2%',
    borderRadius: 8,
    borderWidth: 2,
    paddingLeft: 38,
    alignItems: 'center',
    backgroundColor: inputBackground,
  },
});

export default styles;
