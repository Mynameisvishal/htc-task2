import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from "redux";
import { Provider} from "react-redux";
import ReduxThunk from 'redux-thunk';
import { rootreducer, user_reducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootreducer,composeWithDevTools(applyMiddleware(ReduxThunk)));


ReactDOM.render(
    <Provider store={store}>
  <React.StrictMode>
      <App />
  </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
