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
		covered_distance_m: 0,
		duration_sec: 0,
		distance_is_greater: true,
		duration_is_greater: true,
	})

	const res = { duration: 0, length: 0 }

	const handleFilter = () => {
		dispatch<any>(LoadFilteredTrips(createJourneysQueryString(filters)))
	}

	const toggleDisable = () => {
		return filters.departure_station_id && filters.return_station_id
	}
	//Add some random distance or duration to a trip
	const randomiseNumber = (num: number) => {
		return Math.floor(((Math.random() + 0.4) * num) / trips.length)
	}

	const handleSubmit = () => {
		const dateNow = new Date()

		const distance = Math.floor(randomiseNumber(res.length))
		const duration = Math.floor(randomiseNumber(res.duration))

		const createdTrip = {
			departure: dateNow.toISOString(),
			return: addSeconds(dateNow, duration).toISOString(),
			departure_station_id: filters.departure_station_id?.ID,
			departure_station_name: filters.departure_station_id?.Name,
			return_station_id: filters.return_station_id?.ID,
			return_station_name: filters.return_station_id?.Name,
			covered_distance_m: distance,
			duration_sec: duration,
		}

		dispatch<any>(AddNewTrip(createdTrip))
	}

	const trips = useSelector((state: TState) => state.trips.filteredTrips)

	trips.forEach((t) => {
		res.duration += t.duration_sec
		res.length += t.covered_distance_m
	})

	useEffect(() => {
		console.log("Trips updated!")
	}, [trips])
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
			{!trips.length ? (
				<Typography textAlign={"center"} sx={{ p: 2 }}>
					Fetch trips to count on average, or fill distance and
					duration it yourself
				</Typography>
			) : (
				<Typography textAlign={"center"} sx={{ p: 2 }}>
					Average data is in the system! All energy to engines!
				</Typography>
			)}

			<Box display={"flex"} justifyContent={"center"}>
				<Button
					disabled={!toggleDisable()}
					variant="contained"
					onClick={() => handleFilter()}
				>
					Send filters
				</Button>
			</Box>
			{!!filters.departure_station_id &&
			!!filters.return_station_id &&
			trips.length == 0 ? (
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
