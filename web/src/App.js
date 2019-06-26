import '~/config/reactotron';

import React from 'react';
import { Provider } from 'react-redux';

import store from '~/store';
import Routes from '~/routes/index';
import GlobalStyle from '~/styles/global';

const App = () => (
  <Provider store={store}>
    <>
      <GlobalStyle />
      <Routes />
    </>
  </Provider>
);

export default App;
