import {apiTrips} from "../../api/api";
import {
 ActionTypesTrips, IAddNewTrip,
    ILoadAllTripsByStation,
    Station, Trip
} from "./types";
import {Dispatch} from "redux";

export const LoadAllTripsByStation = (station: Station) => async (dispatch: Dispatch<ILoadAllTripsByStation>) => {
    try {
        const {data} = await apiTrips.get('/'+ station.FID);
        dispatch(
            {
                type: ActionTypesTrips.LoadAllTripsByStation,
                payload: data
            }
        )
    }
    catch (e) {
        console.log(e)
    }
}

export const AddNewTrip = (trip: Trip) => async (dispatch: Dispatch<IAddNewTrip>) => {
    try {
        dispatch(
            {
                type: ActionTypesTrips.AddNewTrip,
                payload: trip
            }
        )
    }
    catch (e) {
        console.log(e)
    }
}
