import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import CalorieIntake from './containers/CalorieIntake';
import MaxHeartRate from './containers/MaxHeartRate';
import calorieIntake from './reducers/calorieIntake';
import setupOffline from './modules/offline';

setupOffline();

const rootReducer = combineReducers({
  calorieIntake,
});

const store = createStore(rootReducer);

render(
  <div>
    <Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
          <Route path="/" component={CalorieIntake} />
          <Route path="/test" component={MaxHeartRate} />
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  </div>,
  document.querySelector('#app'),
);
