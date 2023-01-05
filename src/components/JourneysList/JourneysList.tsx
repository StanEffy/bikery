import React, { useEffect, useState } from "react"
import { DistanceFilter, DurationFilter, TWarmMonths } from "./JourneysFilters"
import { Box, Button } from "@mui/material"
import TripsFromStationTable from "../SingleStation/TripsFromStation"
import { useDispatch, useSelector } from "react-redux"
import { LoadFilteredTrips } from "../../store/actions/tripsAction"
import { Station, TState } from "../../store/actions/types"
import createJourneysQueryString from "../../utils/functions/createJourneysQueryString"
import { JourneysStationFilters } from "../common/JourneysStationFilters"

export type TFilter = {
	departure_station_id: null | Station
	return_station_id: null | Station
	covered_distance_m: string | 0
	duration_sec: string | 0
	distance_is_greater: boolean
	duration_is_greater: boolean
	dateFilter: string | null
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
		dateFilter: null,
	})

	const handleFilter = () => {
		dispatch<any>(LoadFilteredTrips(createJourneysQueryString(filters)))
	}

	const toggleDisable = () => {
		return filters.departure_station_id || filters.return_station_id
	}
	useEffect(() => undefined, [trips])
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
