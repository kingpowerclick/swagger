import { Route } from 'react-router-dom';
import React from 'react';
import Root from './containers/root';
import Home from './containers/home';
import Swagger from './containers/swagger';

export default () => (
  <Root>
    <Route path="/" exact component={Home} />
    <Route path="/specs/:specName" exact component={Swagger} />
  </Root>
);
