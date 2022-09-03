import React from "react"
import { Box, Button } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import DoNotDisturbOnTotalSilenceIcon from "@mui/icons-material/DoNotDisturbOnTotalSilence"
type Props = {
	handleClick: (p: boolean) => void
	pin: boolean
}

const AddStationButton: React.FC<Props> = ({ handleClick, pin }) => {
	return (
		<Box sx={{ position: "absolute", bottom: "40px", right: "40px" }}>
			{!pin ? (
				<Button
					color={"secondary"}
					aria-label="add new station"
					size="large"
					variant="contained"
					endIcon={<LocationOnIcon fontSize={"large"} />}
					onClick={() => handleClick(!pin)}
				>
					Add Station
				</Button>
			) : (
				<Button
					color={"error"}
					aria-label="add new station"
					size="large"
					variant="contained"
					endIcon={
						<DoNotDisturbOnTotalSilenceIcon fontSize={"large"} />
					}
					onClick={() => handleClick(!pin)}
				>
					Don&apos;t add
				</Button>
			)}
		</Box>
	)
}

export default AddStationButton
