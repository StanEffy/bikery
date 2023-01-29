import { createStore, combineReducers, applyMiddleware } from "redux"

import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import {
	stationsReducers,
	TStationsReducers,
} from "./reducers/stationsReducers"
import { tripsReducers } from "./reducers/tripsReducers"
import { alertReducers } from "./reducers/alertReducers"

const reducer = combineReducers({
	stations: stationsReducers,
	trips: tripsReducers,
	alert: alertReducers,
})

const middleware = [thunk]

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middleware))
)

export type AppDispatch = typeof store.dispatch

export default store
