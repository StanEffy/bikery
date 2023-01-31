import React, { useEffect } from "react"
import { Box } from "@mui/material"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"

export type StationWithTrips = { name?: any; trips?: any }

export type StationsStats = StationWithTrips[]
type TInOrOut = "departures" | "returns"

type Props = {
	stationsWithTrips: StationsStats | []
	inOrOut: TInOrOut
}
const OtherStationsStats: React.FC<Props> = ({
	stationsWithTrips,
	inOrOut,
}) => {
	return (
		<Accordion>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="Most popular stations"
			>
				<Typography variant={"h6"}>
					{inOrOut === "departures"
						? "Most frequently striders departed to:"
						: "Most often travelers arrived from:"}
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Box component={"ul"} sx={{ p: 0, m: 0 }}>
					{stationsWithTrips?.map((s: StationWithTrips, i) => (
						<Box
							component={"li"}
							display={"flex"}
							flexDirection={"row"}
							alignItems={"center"}
							key={"return" + i}
						>
							<Typography variant={"body1"} sx={{ mr: 1 }}>
								{s.name}
							</Typography>
							<Typography variant={"body2"}>
								<span style={{ fontWeight: "bold" }}>
									{s.trips}
								</span>{" "}
								trips
							</Typography>
						</Box>
					))}
				</Box>
			</AccordionDetails>
		</Accordion>
	)
}
export default OtherStationsStats
