import {
  GET_COCKTAILS_START,
  GET_COCKTAILS_SUCCESS,
  GET_COCKTAILS_ERROR,
} from './types';

import CocktailService from '../provider/services/CocktailService';

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
        let cocktails: any = await CocktailService.getCocktails(data);
        dispatch(getCocktailsSuccess(cocktails));
      }
    } catch (err) {
      dispatch(getCocktailsError(err));
    }
  };
}
