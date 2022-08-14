import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {stationsReducers} from "./reducers/stationsReducers";

const reducer = combineReducers({
    stations: stationsReducers
})

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export type AppDispatch = typeof store.dispatch

export default store;
