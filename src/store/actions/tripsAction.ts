import { apiTrips } from "../../api/apiCopy"
import {
	ActionTypesTrips,
	IAddNewTrip,
	ILoadAllTripsByStation,
	ISetAlert,
	Station,
	Trip,
} from "./types"
import { Dispatch } from "redux"
import handleAlert, { handleInfoAlert } from "../../utils/functions/handleAlert"
import axios from "axios"
import { SetAlert } from "./alertAction"
import { AlertColor } from "@mui/material"
import { dispatchLoading } from "./utils"

export const LoadAllTripsByStation =
	(id: string | undefined) =>
	async (dispatch: Dispatch<ILoadAllTripsByStation>) => {
		dispatchLoading(dispatch, "loading all trips by station...")
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
		dispatchLoading(dispatch, "loading trips...")
		try {
			//If nothing was filtered out, then sending only ~60k trips
			const str = requestString.length > 0 ? "/?" + requestString : ""
			const { data } = await apiTrips.get(str)

			dispatch({
				type: ActionTypesTrips.LoadFilteredTrips,
				payload: data.data.data,
			})
		} catch (e) {
			if (axios.isAxiosError(e)) {
				const alert = {
					type: "error" as AlertColor,
					message: e.message,
				}
				handleAlert({ dispatch, alert })
			}
			console.log(e)
		}
	}

export const AddNewTrip =
	(trip: Trip) => async (dispatch: Dispatch<IAddNewTrip>) => {
		dispatchLoading(dispatch, "Trying to add new trip")
		try {
			const postedTrip = await apiTrips.post("/", JSON.stringify(trip), {
				withCredentials: true,
				headers: {
					"Content-Type": "application/json",
				},
			})

			const alert = {
				type: "success" as AlertColor,
				message: "Looks like success",
			}

			handleAlert({ dispatch, alert })
			dispatch({
				type: ActionTypesTrips.AddNewTrip,
				payload: trip,
			})
		} catch (e) {
			if (axios.isAxiosError(e)) {
				const alert = {
					type: "error" as AlertColor,
					message: e.message,
				}
				handleAlert({ dispatch, alert })
			}
			console.log(e)
		}
	}
