import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import './index.css';


ReactDOM.render(
  <Provider store={store()}>
    <Router routes={routes} history={browserHistory} />
  </Provider>
, document.getElementById('root'));


// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

