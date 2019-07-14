import { createStore, combineReducers } from 'redux';
import calorieIntake from './reducers/calorieIntake';

const rootReducer = combineReducers({
  calorieIntake,
});

export default createStore(rootReducer);
