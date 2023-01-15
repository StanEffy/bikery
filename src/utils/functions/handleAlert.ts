import { AlertColor } from "@mui/material"
import { SetAlert } from "../../store/actions/alertAction"
import { Dispatch } from "redux"
import { ISetAlert } from "../../store/actions/types"
import { TAlert } from "../../store/reducers/alertReducers"

const handleAlert = ({
	dispatch,
	alert,
}: {
	dispatch: Dispatch<any>
	alert: TAlert
}): void => {
	dispatch(SetAlert(alert))
}

export const handleInfoAlert = (dispatch: Dispatch<any>): void => {
	dispatch(
		SetAlert({ type: "info", message: "Hold on! Working on your request!" })
	)
}
export default handleAlert
