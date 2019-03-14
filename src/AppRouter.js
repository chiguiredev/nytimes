import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import LandingForm from './containers/LandingForm/LandingForm'
import NewsFeed from './containers/NewsFeed/NewsFeed';
import Footer from './components/footer/Footer';
import styled from 'styled-components';

export const AppRouter = ({ history }) => {
  return (
    <AppLayout>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={LandingForm} />
          <Route exact path="/feed" component={NewsFeed} />
          <Route render={() => (<p>not found</p>)}/>
        </Switch>
      </ConnectedRouter>
      <Footer />
    </AppLayout>
  );
};

const AppLayout = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
`;
