import React, { useEffect, useState } from "react"
import { JourneysStationFilters } from "../common/JourneysStationFilters"
import { TFilter } from "../JourneysList/JourneysList"
import { AddNewTrip, LoadFilteredTrips } from "../../store/actions/tripsAction"
import createJourneysQueryString from "../../utils/functions/createJourneysQueryString"
import { Box, Button, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { TState } from "../../store/actions/types"
import { addSeconds } from "date-fns"
import TripFillInDistDur from "./TripFillInDistDur"

const AddTrip = () => {
	const dispatch = useDispatch()

	const [filters, setFilters] = useState<TFilter>({
		departure_station_id: null,
		return_station_id: null,
		covered_distance_m: "0",
		duration_sec: "0",
		distance_is_greater: true,
		duration_is_greater: true,
		dateFilter: null,
	})

	const res = { duration: 0, length: 0 }

	const handleFilter = () => {
		dispatch<any>(LoadFilteredTrips(createJourneysQueryString(filters)))
	}

	const toggleDisable = () => {
		const {
			departure_station_id,
			return_station_id,
			duration_sec,
			covered_distance_m,
		} = filters
		return (
			departure_station_id &&
			return_station_id &&
			parseInt(duration_sec) >= 100 &&
			parseInt(covered_distance_m) >= 100
		)
	}

	const handleSubmit = () => {
		const dateNow = new Date()

		const createdTrip = {
			departure: dateNow.toISOString(),
			return: addSeconds(
				dateNow,
				parseInt(filters.duration_sec)
			).toISOString(),
			departure_station_id: filters.departure_station_id?.ID ?? 1111,
			departure_station_name:
				filters.departure_station_id?.Name ?? "Mock station",
			return_station_id: filters.return_station_id?.ID ?? 1111,
			return_station_name:
				filters.return_station_id?.Name ?? "Mock station",
			covered_distance_m: parseInt(filters.covered_distance_m),
			duration_sec: parseInt(filters.duration_sec),
		}

		dispatch<any>(AddNewTrip(createdTrip))
	}

	const trips = useSelector((state: TState) => state.trips.filteredTrips)

	trips.forEach((t) => {
		res.duration += t.duration_sec
		res.length += t.covered_distance_m
	})

	useEffect(() => undefined, [trips])
	return (
		<>
			<Box
				display={"flex"}
				flexDirection={"row"}
				sx={{ py: 2 }}
				justifyContent={"center"}
				flexWrap={"wrap"}
			>
				<JourneysStationFilters
					label={"Departure station"}
					handleFilters={setFilters}
				/>
				<JourneysStationFilters
					label={"Arrival station"}
					handleFilters={setFilters}
				/>
			</Box>

			<Typography textAlign={"center"} sx={{ p: 2 }}>
				Distance or duration can&rsquo;t be less than 100 units!
			</Typography>

			{!!filters.departure_station_id &&
			!!filters.return_station_id &&
			trips.length === 0 ? (
				<TripFillInDistDur setFilters={setFilters} />
			) : null}
			<Box display={"flex"} justifyContent={"center"} sx={{ py: 2 }}>
				<Button
					disabled={!toggleDisable()}
					variant="contained"
					onClick={() => handleSubmit()}
				>
					Add trip
				</Button>
			</Box>
		</>
	)
}

export default AddTrip
