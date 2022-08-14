import {apiTrips} from "../../api/api";
import {
 ActionTypesTrips, IAddNewTrip,
    ILoadAllTripsByStation,
    Station, Trip
} from "./types";
import {Dispatch} from "redux";

export const LoadAllTripsByStation = (id:string) => async (dispatch: Dispatch<ILoadAllTripsByStation>) => {
    try {
        const {data} = await apiTrips.get('/?departure_station_id='+ id);

        dispatch(
            {
                type: ActionTypesTrips.LoadAllTripsByStation,
                payload: data.data.data
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
