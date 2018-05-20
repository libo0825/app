import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import One from './routes/one';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
      <Route path="/" exact component={IndexPage} />
      <Route path="/one" exact component={One} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
