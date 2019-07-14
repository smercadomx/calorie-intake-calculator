import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import CalorieIntake from './containers/CalorieIntake';
import MaxHeartRate from './containers/MaxHeartRate';
import setupOffline from './modules/offline';
import store from './store';

setupOffline();

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
