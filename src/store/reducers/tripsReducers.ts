import {ActionTypesTrips, ILoadAllTripsByStation, IAddNewTrip} from "../actions/types";

export const initialState = {
    tripsForActiveStation: [],
}
type TAction = ILoadAllTripsByStation | IAddNewTrip

export const tripsReducers = (state = initialState, action: TAction) => {
    switch (action.type) {
        case ActionTypesTrips.LoadAllTripsByStation: {
            return {...state, tripsForActiveStation: action.payload}

        }
        case ActionTypesTrips.AddNewTrip: {
            return {
                ...state
            }
        }
        default:
            return state
    }
}
