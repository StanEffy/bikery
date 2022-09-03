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
		<Box display={"flex"} justifyContent={"center"} sx={{ p: 2 }}>
			<TextField
				label={"distance meters"}
				onChange={(e) => handleDistance(e.target.value)}
			/>
			<TextField
				label={"duration sec"}
				onChange={(e) => handleDuration(e.target.value)}
			/>
		</Box>
	)
}

export default TripFillInDistDur
