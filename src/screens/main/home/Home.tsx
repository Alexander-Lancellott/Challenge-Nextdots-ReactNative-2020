import * as React from 'react';
import {Text, View, ImageBackground, Image} from 'react-native';
import styles from './styles';
import {Background} from '../../../assets/images';
import {Logo} from '../../../assets/images';
import {SearchButton} from '../../../components';

interface Props {
  navigation: any;
}

class Home extends React.Component<Props> {
  render() {
    const {navigation} = this.props;
    return (
      <ImageBackground source={Background} style={styles.background}>
        <View style={styles.textContainer}>
          <Text style={styles.cocktail}>Cocktail</Text>
          <Text style={styles.finder}>Finder</Text>
        </View>
        <Image source={Logo} style={styles.logo} />
        <SearchButton onPress={() => navigation.navigate('CocktailsList')} />
      </ImageBackground>
    );
  }
}

export default Home;
