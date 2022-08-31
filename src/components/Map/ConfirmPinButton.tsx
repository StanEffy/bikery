import React from "react"
import DoneIcon from "@mui/icons-material/Done"
import { Button } from "@mui/material"

// eslint-disable-next-line react/prop-types,@typescript-eslint/ban-ts-comment
// @ts-ignore
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
