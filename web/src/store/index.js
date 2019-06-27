import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import history from '~/routes/history';
import rootReducer from './ducks';
import rootSaga from './sagas';

const middlewares = [];

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
middlewares.push(sagaMiddleware);

const composer = process.env.NODE_ENV === 'development'
  ? compose(
    applyMiddleware(...middlewares, routerMiddleware(history)),
    console.tron.createEnhancer(),
  )
  : applyMiddleware(...middlewares, routerMiddleware(history));

const store = createStore(rootReducer(history), composer);

sagaMiddleware.run(rootSaga);

export default store;
