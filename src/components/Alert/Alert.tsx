import React from "react"
import { Alert, AlertColor } from "@mui/material"
type Props = {
	type: AlertColor
	message: string
	status?: number
	visibility: boolean
}
const AppAlert: React.FC<Props> = ({ type, message, visibility }) => {
	return (
		<Alert
			sx={{
				position: "absolute",
				display: visibility ? "flex" : "none",
				marginTop: "20px",
				marginLeft: "20px",
			}}
			severity={type}
		>
			{message}
		</Alert>
	)
}

export default AppAlert
