import { ActionTypesAlert, ISetAlert, INullifyAlert } from "../actions/types"
import { AlertColor } from "@mui/material"

export type TAlert = {
	type: AlertColor
	message: string
	status?: string
}

export type TAlertState = {
	alert: TAlert | null

	visibility: boolean
}

export const initialState: TAlertState = {
	alert: null,
	visibility: false,
}
type TAction = ISetAlert | INullifyAlert

export const tripsReducers = (state = initialState, action: TAction) => {
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
				...initialState,
			}
		}
		default:
			return state
	}
}
