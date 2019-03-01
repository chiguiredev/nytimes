import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import LandingForm from './containers/LandingForm/LandingForm'
import NewsFeed from './containers/NewsFeed/NewsFeed';

export const AppRouter = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={LandingForm} />
        <Route exact path="/feed" component={NewsFeed} />
        <Route render={() => (<p>not found</p>)}/>
      </Switch>
    </ConnectedRouter>
  );
};
