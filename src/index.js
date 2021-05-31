import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app'

import App from './components/App';
import store from './store/store';
import './index.css';

firebase.initializeApp({
  apiKey: "AIzaSyDXTl__JjEcze274sEIoOS0Tb3zBMzx6cw",
  authDomain: "pmdigital-8798d.firebaseapp.com",
  databaseURL: "https://pmdigital-8798d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pmdigital-8798d",
  storageBucket: "pmdigital-8798d.appspot.com",
  messagingSenderId: "482210054802",
  appId: "1:482210054802:web:318a5d570c03b318ad5c4b"
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
