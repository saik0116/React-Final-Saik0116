import React from 'react';
import Main from './components/Main';
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Details from './components/Details';




let initialState = {
data: [],
currentRest: {},
isShowMain: Boolean,
backTM: Boolean
};

let store = createStore(reducers, initialState, applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return (
<Provider store = {store}>
        
       <Main /> 
      </Provider>

    );
  }
}

        
        