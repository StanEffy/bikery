import React, { useState } from "react"
import {
	DistanceFilter,
	DurationFilter,
	JourneysStationFilters,
} from "./JourneysFilters"
import { Box, Button } from "@mui/material"
import TripsFromStationTable from "../SingleStation/TripsFromStation"
import { useDispatch, useSelector } from "react-redux"
import { LoadFilteredTrips } from "../../store/actions/tripsAction"
import { Station, TState } from "../../store/actions/types"

type TFilter = {
	departure_station_id: null | Station
	return_station_id: null | Station
	covered_distance_m: string | 0
	duration_sec: string | 0
	distance_is_greater: boolean
	duration_is_greater: boolean
}

const JourneysList = () => {
	const dispatch = useDispatch()

	const trips = useSelector((state: TState) => state.trips.filteredTrips)

	const [filters, setFilters] = useState<TFilter>({
		departure_station_id: null,
		return_station_id: null,
		covered_distance_m: 0,
		duration_sec: 0,
		distance_is_greater: true,
		duration_is_greater: true,
	})

	const createQueryString = (filter: TFilter) => {
		let str = ""
		if (filter.departure_station_id !== null) {
			str += "departure_station_id=" + filter.departure_station_id?.ID
		}
		if (filter.return_station_id !== null) {
			filter.departure_station_id !== null
				? (str += "&return_station_id=" + filter.return_station_id?.ID)
				: (str += "return_station_id=" + filter.return_station_id?.ID)
		}
		if (filter.covered_distance_m > 0) {
			if (filter.distance_is_greater) {
				str += "&covered_distance_m[gte]=" + filter.covered_distance_m
			} else {
				str += "&covered_distance_m[lte]=" + filter.covered_distance_m
			}
		}
		if (filter.duration_sec > 0) {
			if (filter.duration_is_greater) {
				str += "&duration_sec[gte]=" + filter.duration_sec
			} else {
				str += "&duration_sec[lte]=" + filter.duration_sec
			}
		}
		return str
	}
	const handleFilter = () => {
		console.log(toggleDisable())
		// @ts-ignore
		dispatch(LoadFilteredTrips(createQueryString(filters)))
	}

	const toggleDisable = () => {
		return filters.departure_station_id || filters.return_station_id
	}

	return (
		<>
			<Box
				display={"flex"}
				justifyContent={"center"}
				flexWrap={"wrap"}
				sx={{ mt: 2 }}
			>
				<Box
					display={"flex"}
					alignItems={"center"}
					flexWrap={"wrap"}
					flexDirection={"column"}
					justifyContent={"space-between"}
					sx={{ p: 1 }}
				>
					<JourneysStationFilters
						label={"Departure station"}
						handleFilters={setFilters}
					/>
					<JourneysStationFilters
						label={"Return station"}
						handleFilters={setFilters}
					/>
				</Box>
				<Box>
					<DistanceFilter handleFilters={setFilters} />
					<DurationFilter handleFilters={setFilters} />
				</Box>
				<Box
					display={"flex"}
					alignItems={"flex-start"}
					justifyContent={"center"}
					sx={{ width: "100%" }}
				>
					<Button
						disabled={!toggleDisable()}
						variant="contained"
						onClick={() => handleFilter()}
					>
						Send filters
					</Button>
				</Box>
			</Box>
			<TripsFromStationTable trips={trips} />
		</>
	)
}

export default JourneysList
