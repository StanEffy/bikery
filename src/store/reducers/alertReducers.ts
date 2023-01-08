import {
	ActionTypesAlert
} from "../actions/types"
import { AlertColor } from "@mui/material"

export type TAlertState = {
	type: AlertColor
	visibility: boolean
	message: string
	status?: string
}

export const initialState: TAlertState = {
	type: "info",
	message: "initial message",
	visibility: false,
}
type TAction = ILoadAllTripsByStation | IAddNewTrip

export const tripsReducers = (state = initialState, action: TAction) => {
	switch (action.type) {
		case ActionTypesAlert.SetAlert: {
			const {type, message} = action.payload
			return { ...state, type, message}
		}
		case ActionTypesAlert.NullifyAlert {
			return {
				...initialState
			}
		}
		default:
			return state
	}
}
