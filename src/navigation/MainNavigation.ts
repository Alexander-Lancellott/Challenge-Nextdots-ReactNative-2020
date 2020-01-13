import {createStackNavigator} from 'react-navigation-stack';
import {Home, CocktailsList} from '../screens';

interface noHeader {
  header: any;
}

const noHeader = {header: null};

const stack = {
  Home: {
    screen: Home,
    navigationOptions: noHeader,
  },
  CocktailsList: {
    screen: CocktailsList,
    navigationOptions: noHeader,
  },
};

interface stack {
  Home: object;
  CocktailsList: Object;
}

export const RootStack = createStackNavigator(stack);
