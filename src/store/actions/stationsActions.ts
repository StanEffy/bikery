import { apiStations } from "../../api/api"
import {
	ActionTypes,
	IAddNewStation,
	ILoadAllStations,
	ISetActiveStation,
	Station,
} from "./types"
import { Dispatch } from "redux"

export const LoadAllStations =
	() => async (dispatch: Dispatch<ILoadAllStations>) => {
		try {
			const { data } = await apiStations.get("/")
			dispatch({
				type: ActionTypes.LoadAllStations,
				payload: data.data.data,
			})
		} catch (e) {
			console.log(e)
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
			console.log(e)
		}
	}
export const AddNewStation =
	(station: Station) => async (dispatch: Dispatch<IAddNewStation>) => {
		try {
			await apiStations.post("/", station)
			dispatch({
				type: ActionTypes.AddNewStation,
				payload: station,
			})
		} catch (e) {
			console.log(e)
		}
	}
