import {ActionTypesTrips, ILoadAllTripsByStation, IAddNewTrip} from "../actions/types";

export const initialState = {
    tripsForStation: {},
}
type TAction = ILoadAllTripsByStation | IAddNewTrip

export const tripsReducers = (state = initialState, action: TAction) => {
    switch (action.type) {
        case ActionTypesTrips.LoadAllTripsByStation: {
            return {...state, tripsForStation: action.payload}

        }
        case ActionTypesTrips.AddNewTrip: {

            return {
                ...state
            }
        }
    }
}
