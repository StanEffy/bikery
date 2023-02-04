import React from "react"
import { Box, TextField } from "@mui/material"
import { TFilter } from "../JourneysList/JourneysList"

const TripFillInDistDur = ({
	setFilters,
}: {
	setFilters: (cb: (value: TFilter) => TFilter) => void
}) => {
	const handleDistance = (v: string) => {
		setFilters((prev: TFilter) => {
			return {
				...prev,
				covered_distance_m: v,
			}
		})
	}
	const handleDuration = (v: string) => {
		setFilters((prev: TFilter) => {
			return {
				...prev,
				duration_sec: v,
			}
		})
	}
	return (
		<Box
			display={"flex"}
			justifyContent={"center"}
			sx={{ p: 2 }}
			flexDirection={"row"}
			flexWrap={"wrap"}
		>
			<TextField
				type="number"
				label={"distance meters (100+)"}
				required={true}
				sx={{ mx: 2, mb: 2 }}
				inputProps={{
					min: 100,
				}}
				onChange={(e) => handleDistance(e.target.value)}
			/>
			<TextField
				type="number"
				label={"duration sec (100+)"}
				required={true}
				inputProps={{
					min: 100,
				}}
				onChange={(e) => handleDuration(e.target.value)}
			/>
		</Box>
	)
}

export default TripFillInDistDur
