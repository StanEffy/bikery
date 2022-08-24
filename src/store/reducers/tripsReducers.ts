import {
	ActionTypesTrips,
	ILoadAllTripsByStation,
	IAddNewTrip,
} from "../actions/types"

import { Station } from "../actions/types"

export type TTripsState = {
	tripsForActiveStation: [] | [Station]
	filteredTrips: [] | [Station]
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
