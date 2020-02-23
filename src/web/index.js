import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import configureStore from './store/index';
import * as serviceWorker from './serviceWorker/index';
import Routes from './routes/index';
import 'semantic-ui-css/semantic.min.css'
import '../styles/styles.scss';

const { persistor, store } = configureStore();

const Root = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <Routes/>
      </Router>
    </PersistGate>
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
