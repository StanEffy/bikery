import React from "react"
import { Typography } from "@mui/material"

const InitialPage = () => {
	return (
		<Typography variant={"h4"} sx={{ p: 3 }}>
			This is a bikery app. It was made as an assignment for Solita
			Academy and consist data of over 3 million bike trips made in
			Uusimaa in 2021. But that is not all! You can easily create your own
			station, add a trip or filter out some specific trips you are
			looking for. You can navigate through menu which is in the header.
			App has been adapted for mobile and desktop screens.
		</Typography>
	)
}

export default InitialPage
