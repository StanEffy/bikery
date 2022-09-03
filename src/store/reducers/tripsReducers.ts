import {
	ActionTypesTrips,
	ILoadAllTripsByStation,
	IAddNewTrip,
	Trip,
} from "../actions/types"

import { Station } from "../actions/types"

export type TTripsState = {
	tripsForActiveStation: [] | [Trip]
	filteredTrips: [] | [Trip]
}

export const initialState: TTripsState = {
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
