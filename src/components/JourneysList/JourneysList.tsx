import React, { useEffect, useState } from "react"
import { DistanceFilter, DurationFilter, SelectMonth } from "./JourneysFilters"
import { Box, Button, FormControlLabel } from "@mui/material"
import TripsFromStationTable from "../SingleStation/TripsFromStation"
import { useDispatch, useSelector } from "react-redux"
import { LoadFilteredTrips } from "../../store/actions/tripsAction"
import { Station, TState } from "../../store/actions/types"
import createJourneysQueryString from "../../utils/functions/createJourneysQueryString"
import { JourneysStationFilters } from "../common/JourneysStationFilters"
import Checkbox from "@mui/material/Checkbox"

export type TFilter = {
	departure_station_id: null | Station
	return_station_id: null | Station
	covered_distance_m: string
	duration_sec: string
	distance_is_greater: boolean
	duration_is_greater: boolean
	dateFilter: string | null
	limit?: number
}

const JourneysList = () => {
	const dispatch = useDispatch()

	const [limitChecked, setLimitChecked] = useState(true)
	const trips = useSelector((state: TState) => state.trips.filteredTrips)

	const [filters, setFilters] = useState<TFilter>({
		departure_station_id: null,
		return_station_id: null,
		covered_distance_m: "0",
		duration_sec: "0",
		distance_is_greater: true,
		duration_is_greater: true,
		dateFilter: null,
		limit: 1000,
	})

	const handleFilter = () => {
		dispatch<any>(LoadFilteredTrips(createJourneysQueryString(filters)))
	}

	const handleLimitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setLimitChecked(event.target.checked)
		setFilters((prevState: TFilter) => ({
			...prevState,
			limit: event.target.checked ? 1000 : undefined,
		}))
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
					alignItems={"center"}
					justifyContent={"center"}
					sx={{ width: "100%" }}
				>
					<Box>
						<SelectMonth handleFilters={setFilters} />
					</Box>
					<Box>
						<FormControlLabel
							labelPlacement={"top"}
							control={
								<Checkbox
									checked={limitChecked}
									onChange={handleLimitChange}
								/>
							}
							label={
								limitChecked
									? "Only 1000 trips:"
									: "All the trips"
							}
						/>
						<Button
							disabled={!toggleDisable()}
							variant="contained"
							onClick={() => handleFilter()}
							sx={{ my: 1 }}
						>
							Get trips
						</Button>
					</Box>
				</Box>
			</Box>
			<TripsFromStationTable trips={trips} />
		</>
	)
}

export default JourneysList
