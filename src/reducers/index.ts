import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import cocktailsReducer from './cocktailsReducer';

const state = combineReducers({
  cocktailsReducer,
  form: formReducer,
});

export default state;
