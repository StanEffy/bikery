import React from "react"
import { Typography } from "@mui/material"

const InitialPage = () => {
	return (
		<Typography variant={"h4"} sx={{ p: 3 }}>
			Welcome to our unbelievably well done Bikery app. Need to confess:
			you were bamboozled! While you were reading this paragraph I already
			uploaded data and dispatched it to the store; Have a look on the Map
			or Stations list, please.
		</Typography>
	)
}

export default InitialPage
