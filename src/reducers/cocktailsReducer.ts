import {
  GET_COCKTAILS_START,
  GET_COCKTAILS_SUCCESS,
  GET_COCKTAILS_ERROR,
} from '../actions/types';

import {Cocktails} from '../actions';

interface initialState {
  data: Cocktails[];
  fetchIsLoading: boolean;
  fetchError: string;
  inputText: string;
}

const initialState = {
  data: null,
  fetchIsLoading: false,
  fetchError: null,
  inputText: null,
};

const cocktailsReducer = (state = initialState, action: any) => {
  let {type, data, err} = action;
  switch (type) {
    case GET_COCKTAILS_START:
      return {
        ...state,
        fetchError: null,
        fetchIsLoading: true,
        inputText: data,
      };
    case GET_COCKTAILS_SUCCESS:
      return {
        ...state,
        fetchIsLoading: false,
        fetchError: null,
        data,
      };
    case GET_COCKTAILS_ERROR:
      return {
        ...state,
        fetchIsLoading: false,
        fetchError: err,
      };
    default:
      return state;
  }
};

export default cocktailsReducer;
