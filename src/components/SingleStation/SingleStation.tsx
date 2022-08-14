import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Station, StationStats} from "../../store/actions/types";
import SingleStationStatsTable from "./SingleStationStatsTable";
import SingleMap from "../Map/SingleMap";
import {Typography} from "@mui/material";
import {LoadAllTripsByStation} from "../../store/actions/tripsAction";
import TripsFromStationTable from "./TripsFromStation";


const SingleStation = () => {
    const dispatch = useDispatch();
    const {id} = useParams()
    // @ts-ignore
    const tripsFromStation = useSelector((state) => state.trips.tripsForActiveStation)
// @ts-ignore
    useEffect( () => {
        // @ts-ignore
        dispatch(LoadAllTripsByStation(id))
    }, [id]
    )
    console.log(tripsFromStation)
    // @ts-ignore
    const allStationsStats = useSelector((state) => state.stations.allStationsStats)
    // @ts-ignore
    const allStations = useSelector((state) => state.stations.allStations)

    const activeStation = allStations.find((st: Station) => st.ID.toString() === id)

    const activeStationStats = allStationsStats.find((st: StationStats) => st.departure_station_id.toString() === id)

    const {departure_station_name: name, departure_station_id : st_id, arrivals, departures, mean_distance, median_distance, mean_duration, median_durarion : median_duration} = activeStationStats

    return (
        <div>
            <SingleStationStatsTable id={st_id} name={name}  address={activeStation.Osoite} capacity={activeStation.Kapasiteet} arrivals={arrivals} departures={departures} mean_duration={mean_duration} mean_distance={mean_distance} median_duration={median_duration} median_distance={median_distance} />
            <Typography variant={"h5"} sx={{ textAlign: "center", my: 3}}> Here it is on the map!</Typography>
            <SingleMap x={activeStation.x} y={activeStation.y} st_id={st_id} />

            <TripsFromStationTable trips={tripsFromStation}/>
        </div>
    );
};

export default SingleStation;
