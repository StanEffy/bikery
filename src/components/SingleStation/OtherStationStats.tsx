import React from "react"
import { Box } from "@mui/material"
import Typography from "@mui/material/Typography"

type StationTuple = [string, number]
export type StationsStats = [StationTuple] | []
type TInOrOut = "departures" | "returns"
const OtherStationStats = (
	statonsWithTrips: StationsStats,
	inOrOut: TInOrOut
) => {
	return (
		<>
			<Typography>
				{inOrOut === "departures"
					? "Most frequent return stations"
					: "Most often travelers arrived from these stations"}
			</Typography>
			<Box display={"flex"}>
				{statonsWithTrips.map((s) => (
					<Box key={s[0] + "stats" + s[1]}>
						<Typography variant={"h6"}>{s[0]}</Typography>
						<Typography variant={"subtitle1"}>{s[1]}</Typography>
					</Box>
				))}
			</Box>
		</>
	)
}

export default OtherStationStats
