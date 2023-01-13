import React from "react"
import { Alert, AlertColor } from "@mui/material"
type Props = {
	type: AlertColor
	message: string
	status?: number
	visibility: boolean
}
const AppAlert: React.FC<Props> = ({ type, message, visibility }) => {
	return visibility ? (
		<Alert
			sx={{
				position: "absolute",
				marginTop: "20px",
				marginLeft: "20px",
				right: "10px",
				opacity: 0.75,
			}}
			severity={type}
		>
			{message}
		</Alert>
	) : null
}

export default AppAlert
