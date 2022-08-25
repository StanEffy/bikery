import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Station, StationStats, TState } from "../../store/actions/types"
import SingleStationStatsTable from "./SingleStationStatsTable"
import SingleMap from "../Map/SingleMap"
import { Typography } from "@mui/material"
import { LoadAllTripsByStation } from "../../store/actions/tripsAction"
import TripsFromStationTable from "./TripsFromStation"

const SingleStation = () => {
	const dispatch = useDispatch()
	const { id } = useParams()

	//No idea how to solve this TS trouble so had to put this rather weak solution
	const mockObject = {
		departure_station_name: "Mock station",
		departure_station_id: "0",
		arrivals: 0,
		departures: 0,
		mean_distance: 0,
		median_distance: 0,
		mean_duration: 0,
		median_durarion: 0,
	}

	const tripsFromStation = useSelector(
		(state: TState) => state.trips.tripsForActiveStation
	)
	useEffect(() => {
		// @ts-ignore
		dispatch(LoadAllTripsByStation(id))
	}, [id])
	console.log(tripsFromStation)

	const allStationsStats = useSelector(
		(state: TState) => state.stations.allStationsStats
	)
	const allStations = useSelector(
		(state: TState) => state.stations.allStations
	)

	const activeStation = allStations.find(
		(st: Station) => st.ID.toString() === id
	)

	const activeStationStats = allStationsStats.find(
		(st: StationStats) => st.departure_station_id.toString() === id
	)

	const {
		departure_station_name: name,
		departure_station_id: st_id,
		arrivals,
		departures,
		mean_distance,
		median_distance,
		mean_duration,
		median_durarion: median_duration,
	} = activeStationStats ?? mockObject

	return (
		<div>
			<SingleStationStatsTable
				id={st_id}
				name={name}
				address={activeStation?.Osoite}
				capacity={activeStation?.Kapasiteet ?? 0}
				arrivals={arrivals}
				departures={departures}
				mean_duration={mean_duration}
				mean_distance={mean_distance}
				median_duration={median_duration}
				median_distance={median_distance}
			/>
			<Typography variant={"h5"} sx={{ textAlign: "center", my: 3 }}>
				Here it is on the map!
			</Typography>
			<SingleMap
				x={activeStation?.x}
				y={activeStation?.y}
				st_id={st_id}
			/>

			<TripsFromStationTable trips={tripsFromStation} />
		</div>
	)
}

export default SingleStation
