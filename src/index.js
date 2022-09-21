import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import allReducers from "./reducer";
import App from './App';
import reportWebVitals from './reportWebVitals';
import logger from 'redux-logger';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'

// const logger2=(store)=>(next)=>(action)=>{
//   console.log("log second middleware run");
//   return next(action)
// }

const composedEnhancer = composeWithDevTools(
  applyMiddleware(thunk)
)

let store = createStore(
    allReducers, 
    composedEnhancer
  );



const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
