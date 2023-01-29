import { apiStationsPopular, apiStationsStats } from "../../api/apiCopy"

import { Dispatch } from "redux"
import { ActionTypesStats, ILoadAllStats, ILoadStationPopular } from "./types"

export const LoadAllStationsStats =
	() => async (dispatch: Dispatch<ILoadAllStats>) => {
		try {
			const { data } = await apiStationsStats.get("/")
			dispatch({
				type: ActionTypesStats.LoadAllStationStats,
				payload: data.data.data,
			})
		} catch (e) {
			console.log(e)
		}
	}
export const LoadAllStationPopular =
	() => async (dispatch: Dispatch<ILoadStationPopular>) => {
		try {
			const { data } = await apiStationsPopular.get("/")
			dispatch({
				type: ActionTypesStats.LoadStationPopular,
				payload: data.data.data,
			})
		} catch (e) {
			console.log(e)
		}
	}
