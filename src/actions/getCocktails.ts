import {
  GET_COCKTAILS_START,
  GET_COCKTAILS_SUCCESS,
  GET_COCKTAILS_ERROR,
} from './types';

import CocktailService from '../provider/services/CocktailService';
import {Cocktails} from './dataTypes';

export const getCocktailsStart = (data: string) => {
  return {
    type: GET_COCKTAILS_START,
    data,
  };
};

export const getCocktailsSuccess = (data: Cocktails[]) => {
  return {
    type: GET_COCKTAILS_SUCCESS,
    data,
  };
};

export const getCocktailsError = (err: string) => {
  return {
    type: GET_COCKTAILS_ERROR,
    err,
  };
};

export function getCocktails(data: string, fetchIsLoading: boolean) {
  return async (dispatch: Function) => {
    try {
      if (!fetchIsLoading) {
        dispatch(getCocktailsStart(data));
        const response: any = await CocktailService.getCocktails(data);
        let cocktails = [];
        if (response.drinks) {
          cocktails = response.drinks.map(drink => {
            const {strDrink, strDrinkThumb, idDrink} = drink;
            return {strDrink, strDrinkThumb, idDrink};
          });
        }
        dispatch(getCocktailsSuccess(cocktails));
      }
    } catch (err) {
      dispatch(getCocktailsError(err));
    }
  };
}
