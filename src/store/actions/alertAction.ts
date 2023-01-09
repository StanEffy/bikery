import { ActionTypesAlert, INullifyAlert, ISetAlert } from "./types"
import { Dispatch } from "redux"
import { TAlert } from "../reducers/alertReducers"

export const SetAlert =
	(alert: TAlert) => async (dispatch: Dispatch<ISetAlert>) => {
		try {
			dispatch({
				type: ActionTypesAlert.SetAlert,
				payload: alert,
			})
		} catch (e) {
			console.log(e)
		}
	}

export const NullifyAlert = () => async (dispatch: Dispatch<INullifyAlert>) => {
	try {
		dispatch({
			type: ActionTypesAlert.NullifyAlert,
		})
	} catch (e) {
		console.log(e)
	}
}
