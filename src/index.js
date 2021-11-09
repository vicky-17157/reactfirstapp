import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import FavouriteColor from './components/samples';
import Getgreet from './components/sample1';
import reportWebVitals from './reportWebVitals';

//ReactDOM.render(
  //<React.StrictMode>
    //<App />
  //</React.StrictMode>,
  //document.getElementById('root')
//);

//ReactDOM.render(
  //<React.StrictMode>
    //<FavouriteColor/>
  //</React.StrictMode>,
  //document.getElementById('root')
//);

ReactDOM.render(
  <React.StrictMode>
    <Getgreet/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
