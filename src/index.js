import React, {Component} from 'react';
import Routes from './routes';
import './config/ReactotronConfig';
import {setNavigator} from './services/navigation';
import './config/StatusBarConfig';
import {Provider} from 'react-redux';
import store from './store';
import Loader from './components/Loader';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Loader />
        <Routes ref={setNavigator} />
      </Provider>
    );
  }
}
