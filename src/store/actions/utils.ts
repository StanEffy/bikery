import { AlertColor } from "@mui/material"
import handleAlert from "../../utils/functions/handleAlert"
import { Dispatch } from "redux"

export const dispatchLoading = (
	dispatch: Dispatch<any>,
	message = "sending request..."
) => {
	const alert = {
		type: "info" as AlertColor,
		message,
	}
	handleAlert({ dispatch, alert })
}
