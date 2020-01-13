import {StyleSheet} from 'react-native';
import {theme} from '../../styled';

const {subLogoTextCocktail, subLogoTextFinder} = theme.color;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subLogo: {
    width: 95,
    height: 140,
    alignSelf: 'center',
    bottom: '4%',
  },
  textContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    bottom: '3%',
  },
  finder: {
    fontSize: 32,
    fontFamily: 'Arial',
    color: subLogoTextFinder,
  },
  cocktail: {
    fontSize: 32,
    fontWeight: 'bold',
    color: subLogoTextCocktail,
  },
});

export default styles;
