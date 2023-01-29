import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Station, StationStats, TState } from "../../store/actions/types"
import SingleStationStatsTable from "./SingleStationStatsTable"
import SingleMap from "../Map/SingleMap"
import { Box, Typography } from "@mui/material"
import { LoadSomeTripsByStation } from "../../store/actions/tripsAction"
import TripsFromStationTable from "./TripsFromStation"
import OtherStationsStats from "./OtherStationStats"
import { LoadAllStationPopular } from "../../store/actions/stationsStatsActions"
import filterTopStations from "../../utils/functions/filterTopStations"

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
	const statsForStation = useSelector(
		(state: TState) => state.trips.mostPopularStations
	)

	useEffect(() => {
		dispatch<any>(LoadSomeTripsByStation(id))
	}, [id])

	const allStationsStats = useSelector(
		(state: TState) => state.stations.allStationsStats
	)
	const allStations = useSelector(
		(state: TState) => state.stations.allStations
	)
	const popularStations = useSelector(
		(state: TState) => state.stations.popularStations
	)

	const thisStationPopular = popularStations.find((st) => st.station_id == id)

	const returnsStations = filterTopStations(
		thisStationPopular?.stations_of_return
	).map((station) => {
		const { departure_station_name } = allStationsStats.find(
			(st) => station[0] == st.departure_station_id
		)
		return { name: departure_station_name, trips: station[1] }
	})

	const arrivalsStations = filterTopStations(
		thisStationPopular?.stations_of_arrival
	).map((station) => {
		const { departure_station_name } = allStationsStats.find(
			(st) => station[0] == st.departure_station_id
		)
		return { name: departure_station_name, trips: station[1] }
	})

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
				id={activeStation?.FID ?? st_id}
				name={activeStation?.Name ?? name}
				address={activeStation?.Osoite}
				capacity={activeStation?.Kapasiteet ?? 0}
				arrivals={arrivals}
				departures={departures}
				mean_duration={mean_duration}
				mean_distance={mean_distance}
				median_duration={median_duration}
				median_distance={median_distance}
			/>
			{statsForStation?.departures && statsForStation?.returns ? (
				<Box>
					<OtherStationsStats
						stationsWithTrips={arrivalsStations}
						inOrOut={"departures"}
					/>
					<OtherStationsStats
						stationsWithTrips={returnsStations}
						inOrOut={"returns"}
					/>
				</Box>
			) : null}

			{/*<Box>*/}
			{/*	{returnsStations.map((st) => (*/}
			{/*		<p key={st.name + st.trips}>*/}
			{/*			{`Bikers went from here to ${st.name} ${st.trips} times`}*/}
			{/*		</p>*/}
			{/*	))}*/}
			{/*	{arrivalsStations.map((st) => (*/}
			{/*		<p key={st.name + st.trips}>*/}
			{/*			{`Bikes arrived from ${st.name} ${st.trips} times`}*/}
			{/*		</p>*/}
			{/*	))}*/}
			{/*</Box>*/}

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
