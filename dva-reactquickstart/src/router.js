import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import Example from './components/Example';

export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={ Example} />
    </Router>
  );
};
