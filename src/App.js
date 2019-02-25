import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import { GlobalStyle } from './utils/GlobalStyle';

const App = ({ history }) => {
  return (
    <Fragment>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
          rel="stylesheet"
        />
        <meta charset="utf-8" />
        <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>NYtimes</title>
      </Helmet>
      <GlobalStyle />
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" render={() => (<div>Match</div>)} />
          <Route exact path="/hola" render={() => (<div>hola</div>)} />
        </Switch>
      </ConnectedRouter>
    </Fragment>
  );
}

export default App;
