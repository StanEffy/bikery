import { apiTrips } from "../../api/apiCopy"
import {
	ActionTypesTrips,
	IAddNewTrip,
	ILoadAllTripsByStation,
	Station,
	Trip,
} from "./types"
import { Dispatch } from "redux"

export const LoadAllTripsByStation =
	(id: string | undefined) =>
	async (dispatch: Dispatch<ILoadAllTripsByStation>) => {
		try {
			const { data } = await apiTrips.get("/?departure_station_id=" + id)
			console.log(data)
			dispatch({
				type: ActionTypesTrips.LoadAllTripsByStation,
				payload: data.data.data,
			})
		} catch (e) {
			console.log(e)
		}
	}

export const LoadFilteredTrips =
	(requestString: string) =>
	async (dispatch: Dispatch<ILoadAllTripsByStation>) => {
		try {
			//If nothing was filtered, then sending only 60k trips
			const str = requestString.length > 0 ? "/?" + requestString : ""
			const { data } = await apiTrips.get(str)

			dispatch({
				type: ActionTypesTrips.LoadFilteredTrips,
				payload: data.data.data,
			})
		} catch (e) {
			console.log(e)
		}
	}

export const AddNewTrip =
	(trip: Trip) => async (dispatch: Dispatch<IAddNewTrip>) => {
		try {
			await apiTrips.post("/", JSON.stringify(trip), {
				withCredentials: true,
				headers: {
					"Content-Type": "application/json",
				},
			})
			dispatch({
				type: ActionTypesTrips.AddNewTrip,
				payload: trip,
			})
		} catch (e) {
			console.log(e)
		}
	}
