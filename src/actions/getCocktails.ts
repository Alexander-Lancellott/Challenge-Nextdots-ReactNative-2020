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

export const getCocktailsSuccess = (data: object) => {
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
        const cocktails: any = await CocktailService.getCocktails(data);
        dispatch(
          getCocktailsSuccess(
            cocktails.drinks !== null &&
              cocktails.drinks.map(function(obj: Cocktails) {
                const {strDrink, strDrinkThumb, idDrink} = obj;
                return {strDrink, strDrinkThumb, idDrink};
              }),
          ),
        );
      }
    } catch (err) {
      dispatch(getCocktailsError(err));
    }
  };
}
