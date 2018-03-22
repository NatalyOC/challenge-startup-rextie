import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyBa_RfzzQAkdNLXEgbw22EhubG46LvSTiM",
    authDomain: "app-rextie.firebaseapp.com",
    databaseURL: "https://app-rextie.firebaseio.com",
    projectId: "app-rextie",
    storageBucket: "app-rextie.appspot.com",
    messagingSenderId: "842090789691"
});

ReactDOM.render(
    
  <App/>,
    
    document.getElementById('root'));
registerServiceWorker();
