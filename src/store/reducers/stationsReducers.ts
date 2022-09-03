import {
	ActionTypes,
	ActionTypesStats,
	IAddNewStation,
	ILoadAllStations,
	ILoadAllStats,
	ISetActiveStation,
	StationStats,
} from "../actions/types"
import { Station } from "../actions/types"

export type TTStations = {
	allStations: Station[]
	activeStation: null | Station
	allStationsStats: StationStats[]
}

export const initialState: TTStations = {
	allStations: [],
	activeStation: null,
	allStationsStats: [],
}
type TAction =
	| ILoadAllStations
	| IAddNewStation
	| ISetActiveStation
	| ILoadAllStats

export const stationsReducers = (state = initialState, action: TAction) => {
	switch (action.type) {
		case ActionTypes.LoadAllStations: {
			return { ...state, allStations: action.payload }
		}
		case ActionTypesStats.LoadAllStationStats: {
			return {
				...state,
				allStationsStats: action.payload,
			}
		}
		case ActionTypes.AddNewStation: {
			return {
				...state,
				allStations: [...state.allStations, action.payload],
			}
		}
		case ActionTypes.SetActiveStation: {
			return {
				...state,
				activeStation: action.payload,
			}
		}
		default: {
			return state
		}
	}
}
