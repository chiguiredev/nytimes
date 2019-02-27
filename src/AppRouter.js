import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import LandingForm from './containers/LandingForm/LandingForm'

export const AppRouter = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" render={() => (<LandingForm />)} />
        <Route exact path="/hello" render={() => (<div>hello I'm the second route</div>)} />
      </Switch>
    </ConnectedRouter>
  );
};
