import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure({host: 'localhost'})
    .useReactNative()
    .use(reactotronSaga())
    .use(reactotronRedux())
    .connect();

  tron.clear();

  console.tron = tron;
}
