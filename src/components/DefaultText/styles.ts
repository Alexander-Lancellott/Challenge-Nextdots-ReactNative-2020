import {StyleSheet} from 'react-native';
import {theme} from '../../styled';

const {defaultText} = theme.color;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: defaultText,
    textAlign: 'center',
    maxWidth: '95%',
  },
});

export default styles;
