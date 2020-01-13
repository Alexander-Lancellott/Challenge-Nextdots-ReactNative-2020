import * as React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';
import {Logo} from '../../assets/images';

const SubLogo = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.subLogo} />
      <View style={styles.textContainer}>
        <Text style={styles.cocktail}>Cocktail</Text>
        <Text style={styles.finder}>Finder</Text>
      </View>
    </View>
  );
};

export default SubLogo;
