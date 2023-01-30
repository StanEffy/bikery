import {
	ActionTypesAlert,
	ISetAlert,
	INullifyAlert,
	ISetLoadingTrue,
	ISetLoadingFalse,
} from "../actions/types"
import { AlertColor } from "@mui/material"

export type TAlert = {
	type: AlertColor
	message: string
}

export type TAlertState = {
	alert: TAlert | null

	visibility: boolean
	isLoading: false
}

export const initialState: TAlertState = {
	alert: null,
	visibility: false,
	isLoading: false,
}
type TAction = ISetAlert | INullifyAlert | ISetLoadingTrue | ISetLoadingFalse

export const alertReducers = (state = initialState, action: TAction) => {
	switch (action.type) {
		case ActionTypesAlert.SetAlert: {
			return {
				...state,
				alert: action.payload,
				visibility: true,
			}
		}
		case ActionTypesAlert.NullifyAlert: {
			return {
				...state,
				alert: null,
				visibility: false,
			}
		}
		case ActionTypesAlert.SetLoadingTrue: {
			return {
				...state,
				isLoading: true,
			}
		}
		case ActionTypesAlert.SetLoadingFalse: {
			return {
				...state,
				isLoading: false,
			}
		}
		default:
			return state
	}
}
