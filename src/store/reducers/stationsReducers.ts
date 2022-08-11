import {ActionTypes, IAddNewStation, ILoadAllStations, ISetActiveStation} from "../actions/types";

export const initialState = {
    allStations: [],
    activeStation: null,
}
type TAction = ILoadAllStations | IAddNewStation | ISetActiveStation

export const stationsReducers = (state = initialState, action: TAction) => {
    switch (action.type) {
        case ActionTypes.LoadAllStations: {
            return {...state, allStations: action.payload}

        }
        case ActionTypes.AddNewStation: {
            return {
                ...state, allStations: [...state.allStations, action.payload]
            }
        }
        case ActionTypes.SetActiveStation: {
            return {
                ...state, activeStation: action.payload
            }
        }
    }
}
