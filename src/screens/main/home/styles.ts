import {StyleSheet} from 'react-native';
import {theme} from '../../../styled';

const {homeTextCocktail, homeTextFinder} = theme.color;
const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    bottom: '4%',
  },
  textContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    bottom: '12%',
  },
  finder: {
    fontSize: 35,
    fontFamily: 'Arial',
    color: homeTextFinder,
  },
  cocktail: {
    fontSize: 35,
    fontWeight: 'bold',
    color: homeTextCocktail,
  },
  background: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

export default styles;
