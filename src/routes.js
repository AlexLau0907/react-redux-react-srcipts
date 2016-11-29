import React from 'react';
import App from './App';
import Home from './components/Home'
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
  </Route>
);
