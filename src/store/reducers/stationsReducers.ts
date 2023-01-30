import {
	ActionTypes,
	ActionTypesStats,
	IAddNewStation,
	ILoadAllStations,
	ILoadAllStats,
	ILoadStationPopular,
	ISetActiveStation,
	IStationToStationStats,
	Station,
	StationStats,
} from "../actions/types"

export type TStationsReducers = {
	allStations: Station[]
	activeStation: null | Station
	allStationsStats: StationStats[]
	popularStations: IStationToStationStats[]
}

export const initialState: TStationsReducers = {
	allStations: [],
	activeStation: null,
	allStationsStats: [],
	popularStations: [],
}
type TAction =
	| ILoadAllStations
	| IAddNewStation
	| ISetActiveStation
	| ILoadAllStats
	| ILoadStationPopular

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
		case ActionTypesStats.LoadStationPopular: {
			console.log(action.payload)
			return {
				...state,
				popularStations: action.payload,
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
