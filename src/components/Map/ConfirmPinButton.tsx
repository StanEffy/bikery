import React from "react"
import DoneIcon from "@mui/icons-material/Done"
import { Button } from "@mui/material"

const ConfirmPinButton = ({ handleClick }) => {
	return (
		<Button
			color="primary"
			variant={"contained"}
			aria-label="fill in station details"
			component="label"
			size="large"
			onClick={() => handleClick()}
			sx={{
				position: "absolute",
				left: "20px",
				bottom: "40px",
			}}
			endIcon={<DoneIcon fontSize={"inherit"} />}
		>
			Next step
		</Button>
	)
}

export default ConfirmPinButton
