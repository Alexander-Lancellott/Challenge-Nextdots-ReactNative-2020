import * as React from 'react';
import {FlatList, View, Image, Text} from 'react-native';

import DefaultText from '../DefaultText';
import styles from './styles';
import SubLogo from '../SubLogo';

interface Props {
  data: any;
  show: boolean;
  inputText: string;
  fetchError: string;
}
const CocktailsRenderer = (props: Props) => {
  let {data, show, inputText, fetchError} = props;
  if (fetchError) {
    return <DefaultText value={fetchError.toString()} />;
  }
  if (data && show === true) {
    if (data.drinks === null) {
      return (
        <DefaultText value={`No results where found for "${inputText}"`} />
      );
    }
    return (
      <FlatList
        data={data.drinks}
        keyExtractor={(item: any) => item.idDrink}
        renderItem={({item}: any) => (
          <View style={styles.itemContainer}>
            <Image
              resizeMode="contain"
              source={{uri: item.strDrinkThumb}}
              style={styles.cocktailImage}
            />
            <Text style={styles.cocktailName}>{item.strDrink}</Text>
          </View>
        )}
      />
    );
  }
  return <SubLogo />;
};

export default CocktailsRenderer;
