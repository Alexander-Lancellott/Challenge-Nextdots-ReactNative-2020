import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

interface Props {
  onPress: any;
}

const SearchButton = (props: Props) => {
  const {onPress} = props;
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <View style={styles.button}>
        <Icon name="search1" size={30} style={styles.searchIcon} />
        <Text style={styles.buttonText}>Search your favorite cocktail</Text>
      </View>
    </TouchableOpacity>
  );
};
export default SearchButton;
