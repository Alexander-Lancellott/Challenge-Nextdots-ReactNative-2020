import {StyleSheet} from 'react-native';
import {theme} from '../../styled';

const {cocktailsRendererBackground, cocktailsRendererText} = theme.color;
const styles = StyleSheet.create({
  cocktailImage: {
    flexDirection: 'row',
    width: 115,
    height: 115,
    borderRadius: 200,
  },
  itemContainer: {
    width: '95%',
    flexDirection: 'row',
    backgroundColor: cocktailsRendererBackground,
    alignSelf: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 25,
    borderRadius: 10,
  },
  cocktailName: {
    paddingLeft: 20,
    maxWidth: 250,
    fontSize: 28,
    fontWeight: 'bold',
    color: cocktailsRendererText,
  },
});

export default styles;
