import React from "react"
import { Alert } from "@mui/material"
import { TAlert } from "../../store/reducers/alertReducers"

type Props = {
	alert: TAlert | null
	visibility: boolean
}
const AppAlert: React.FC<Props> = ({ alert, visibility }) => {
	return visibility && alert ? (
		<Alert
			sx={{
				position: "absolute",
				marginTop: "20px",
				marginLeft: "20px",
				right: "10px",
				opacity: 0.75,
			}}
			severity={alert.type}
		>
			{alert.message}
		</Alert>
	) : null
}

export default AppAlert
