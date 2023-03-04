import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import greetingReducer from './greeting';

const composeEnhancers = compose;

export default configureStore({
  reducer: {
    greeting: greetingReducer,
  },
},
composeEnhancers(applyMiddleware(thunk)));
