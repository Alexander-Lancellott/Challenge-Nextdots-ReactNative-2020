import * as React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

interface Props {
  value: string;
}

const DefaultText = (props: Props) => {
  const {value} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

export default DefaultText;
