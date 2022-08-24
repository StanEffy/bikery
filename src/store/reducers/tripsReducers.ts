import {
	ActionTypesTrips,
	ILoadAllTripsByStation,
	IAddNewTrip,
} from '../actions/types'
import { LoadFilteredTrips } from '../actions/tripsAction'

export const initialState = {
	tripsForActiveStation: [],
	filteredTrips: [],
}
type TAction = ILoadAllTripsByStation | IAddNewTrip

export const tripsReducers = (state = initialState, action: TAction) => {
	switch (action.type) {
		case ActionTypesTrips.LoadAllTripsByStation: {
			return { ...state, tripsForActiveStation: action.payload }
		}
		case ActionTypesTrips.LoadFilteredTrips: {
			return {
				...state,
				filteredTrips: action.payload,
			}
		}
		case ActionTypesTrips.AddNewTrip: {
			return {
				...state,
			}
		}
		default:
			return state
	}
}
