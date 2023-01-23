import {
	ActionTypesTrips,
	ILoadAllTripsByStation,
	IAddNewTrip,
	Trip,
	IClearActiveTrips,
} from "../actions/types"

import { Station } from "../actions/types"
import { StationsStats } from "../../components/SingleStation/OtherStationStats"

export type TTripsState = {
	tripsForActiveStation: [] | [Trip]
	mostPopularStations: null | {
		departures: StationsStats
		returns: StationsStats
	}
	filteredTrips: [] | [Trip]
}

export const initialState: TTripsState = {
	tripsForActiveStation: [],
	filteredTrips: [],
	mostPopularStations: null,
}
type TAction = ILoadAllTripsByStation | IAddNewTrip | IClearActiveTrips

export const tripsReducers = (state = initialState, action: TAction) => {
	switch (action.type) {
		case ActionTypesTrips.LoadAllTripsByStation: {
			return { ...state, tripsForActiveStation: action.payload }
		}
		case ActionTypesTrips.LoadSomeTripsByStation: {
			const { trips, stats } = action.payload
			return {
				...state,
				tripsForActiveStation: trips,
				mostPopularStations: stats,
			}
		}
		case ActionTypesTrips.LoadFilteredTrips: {
			return {
				...state,
				filteredTrips: action.payload,
			}
		}
		case ActionTypesTrips.ClearActiveTrips: {
			return {
				...state,
				tripsForActiveStation: [],
				mostPopularStations: null,
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
