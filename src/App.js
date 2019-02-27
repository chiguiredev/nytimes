import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import { GlobalStyle } from './utils/GlobalStyle';
import { AppRouter } from './AppRouter';

const App = ({ history }) => {
  return (
    <Fragment>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
          rel="stylesheet"
        />
        <title>NYtimes</title>
      </Helmet>
      <GlobalStyle />
      <AppRouter history={history} />
    </Fragment>
  );
}

export default App;
