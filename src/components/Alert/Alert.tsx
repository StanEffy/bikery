import React from "react"
import { Alert, AlertColor } from "@mui/material"
type Props = {
	type: AlertColor
	message: string
	status?: number
}
const AppAlert: React.FC<Props> = ({ type, message }) => {
	return <Alert severity={type}>{message}</Alert>
}

export default AppAlert
