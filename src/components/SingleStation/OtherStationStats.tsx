import React from "react"
import { Box } from "@mui/material"
import Typography from "@mui/material/Typography"

export type StationTuple = [string, number]
export type StationsStats = [StationTuple] | []
type TInOrOut = "departures" | "returns"

type Props = {
	stationsWithTrips: StationsStats
	inOrOut: TInOrOut
}
const OtherStationsStats: React.FC<Props> = ({
	stationsWithTrips,
	inOrOut,
}) => {
	return (
		<Box>
			<Typography variant={"h6"}>
				{inOrOut === "departures"
					? "Most frequent return stations"
					: "Most often travelers arrived from these stations"}
			</Typography>
			<Box>
				{stationsWithTrips?.map((s: StationTuple, i) => (
					<Box
						display={"flex"}
						flexDirection={"row"}
						key={"return" + i}
					>
						<Typography variant={"caption"} sx={{ mr: 1 }}>
							{s[0]}
						</Typography>
						<Typography variant={"caption"}>
							{s[1]} trips
						</Typography>
					</Box>
				))}
			</Box>
		</Box>
	)
}
export default OtherStationsStats
