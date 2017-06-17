import { Route } from 'react-router-dom';
import React from 'react';
import Root from './containers/root';
import Home from './containers/home';

export default () => (
  <Root>
    <Route path="/" exact component={Home} />
  </Root>
);
