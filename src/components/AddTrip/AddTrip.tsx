import React, { useEffect, useState } from "react"
import { JourneysStationFilters } from "../common/JourneysStationFilters"
import { TFilter } from "../JourneysList/JourneysList"
import { AddNewTrip, LoadFilteredTrips } from "../../store/actions/tripsAction"
import createJourneysQueryString from "../../utils/functions/createJourneysQueryString"
import { Box, Button, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { TState } from "../../store/actions/types"

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
		// @ts-ignore
		dispatch(LoadFilteredTrips(createJourneysQueryString(filters)))
	}

	const toggleDisable = () => {
		return filters.departure_station_id && filters.return_station_id
	}
	//Add some random distance or duration to a trip
	const randomiseNumber = (num: number) => {
		return Math.floor((Math.random() + 0.4) * num)
	}

	const handleSubmit = () => {
		const createdTrip = {
			departure: "",
			string: "",
			departure_station_id: filters.departure_station_id?.ID,
			departure_station_name: filters.departure_station_id?.Name,
			return_station_id: filters.return_station_id?.ID,
			return_station_name: filters.return_station_id?.Name,
			covered_distance_m: randomiseNumber(res.length / trips.length),
			duration_sec: randomiseNumber(res.duration / trips.length),
		}

		console.log(createdTrip)
		// @ts-ignore
		dispatch(AddNewTrip(createdTrip))
	}

	const trips = useSelector((state: TState) => state.trips.filteredTrips)

	trips.forEach((t) => {
		res.duration += t.duration_sec
		res.length += t.covered_distance_m
	})

	useEffect(() => {}, [trips])
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
			<Box display={"flex"} justifyContent={"center"}>
				<Button
					disabled={!toggleDisable()}
					variant="contained"
					onClick={() => handleFilter()}
				>
					Send filters
				</Button>
			</Box>
			<Typography>
				{res.duration / trips.length} average sec duration with{" "}
				{res.length / trips.length / 1000} average km length
			</Typography>
			<Box display={"flex"} justifyContent={"center"}>
				<Button variant="contained" onClick={() => handleSubmit()}>
					Add trip
				</Button>
			</Box>
		</>
	)
}

export default AddTrip
