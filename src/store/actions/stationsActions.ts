import { apiStations } from "../../api/api"
import {
	ActionTypes,
	ActionTypesAlert,
	IAddNewStation,
	ILoadAllStations,
	ISetActiveStation,
	ISetAlert,
	Station,
} from "./types"
import { Dispatch } from "redux"
import { dispatchLoading } from "./utils"
import axios from "axios"
import { AlertColor } from "@mui/material"
import handleAlert from "../../utils/functions/handleAlert"

export const LoadAllStations =
	() => async (dispatch: Dispatch<ILoadAllStations | ISetAlert>) => {
		dispatchLoading(dispatch, "Loading all stations...")
		try {
			const { data } = await apiStations.get("/")
			dispatch({
				type: ActionTypesAlert.SetAlert,
				payload: {
					type: "success",
					message: `Loaded ${data.data.data.length} stations`,
				},
			})
			dispatch({
				type: ActionTypes.LoadAllStations,
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
		}
	}

export const SetActiveStation =
	(station: Station) => async (dispatch: Dispatch<ISetActiveStation>) => {
		try {
			dispatch({
				type: ActionTypes.SetActiveStation,
				payload: station,
			})
		} catch (e) {
			if (axios.isAxiosError(e)) {
				const alert = {
					type: "error" as AlertColor,
					message: e.message,
				}
				handleAlert({ dispatch, alert })
			}
		}
	}
export const AddNewStation =
	(station: Station) =>
	async (dispatch: Dispatch<IAddNewStation | ISetAlert>) => {
		try {
			const res = await apiStations.post("/", JSON.stringify(station), {
				withCredentials: true,
				headers: {
					"Content-Type": "application/json",
				},
			})

			dispatch({
				type: ActionTypesAlert.SetAlert,
				payload: {
					type: "success",
					message: `${station.Name} successfully added! Update the page please`,
				},
			})

			dispatch({
				type: ActionTypes.AddNewStation,
				payload: station,
			})
		} catch (e) {
			if (axios.isAxiosError(e)) {
				const alert = {
					type: "error" as AlertColor,
					message: e.message,
				}
				handleAlert({ dispatch, alert })
			}
		}
	}
