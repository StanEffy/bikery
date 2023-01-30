import {
	ActionTypesAlert,
	ISetAlert,
	INullifyAlert,
	ISetLoadingTrue,
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
type TAction = ISetAlert | INullifyAlert | ISetLoadingTrue

export const alertReducers = (state = initialState, action: TAction) => {
	switch (action.type) {
		case ActionTypesAlert.SetAlert: {
			return {
				...state,
				alert: action.payload,
				visibility: true,
				isLoading: true,
			}
		}
		case ActionTypesAlert.NullifyAlert: {
			return {
				...initialState,
			}
		}
		case ActionTypesAlert.SetLoadingTrue: {
			return {
				...state,
				isLoading: true,
			}
		}
		default:
			return state
	}
}
