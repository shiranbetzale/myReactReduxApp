// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from "redux";
// import allReducers from "./reducer";
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import logger from 'redux-logger';
// import thunk from "redux-thunk";
// import { composeWithDevTools } from 'redux-devtools-extension'

// // const logger2=(store)=>(next)=>(action)=>{
// //   console.log("log second middleware run");
// //   return next(action)
// // }

// const composedEnhancer = composeWithDevTools(
//   applyMiddleware(thunk)
// )

// let store = createStore(
//     allReducers, 
//     composedEnhancer
//   );



// const container = document.getElementById('root');
// const root = createRoot(container);

// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

// reportWebVitals();
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './configureStore'

const store = configureStore(/* provide initial state if any */)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
      <> { /* your usual react-router v4/v5 routing */ }
        <Switch>
          <Route exact path="/" render={() => (<div>Match</div>)} />
          <Route render={() => (<div>Miss</div>)} />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('react-root')
)
