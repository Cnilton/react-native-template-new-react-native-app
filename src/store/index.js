import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import rootReducer from './ducks';

const middlewares = [];

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({sagaMonitor});

middlewares.push(sagaMiddleware);

const composer = __DEV__
  ? compose(
      applyMiddleware(...middlewares),
      console.tron.createEnhancer(),
    )
  : applyMiddleware(...middlewares);

const store = createStore(rootReducer, composer);

if (__DEV__) {
  console.tron.log(store.getState());
}

sagaMiddleware.run(rootSaga);

export default store;
