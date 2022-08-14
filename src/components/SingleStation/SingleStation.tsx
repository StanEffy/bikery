import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {Station, StationStats} from "../../store/actions/types";
import SingleStationStatsTable from "./SingleStationStatsTable";

const SingleStation = () => {
    const {id} = useParams()
    // @ts-ignore
    const allStationsStats = useSelector((state) => state.stations.allStationsStats)
    // @ts-ignore
    const allStations = useSelector((state) => state.stations.allStations)
    const activeStation = allStations.find((st: Station) => st.ID.toString() === id)
    const activeStationStats = allStationsStats.find((st: StationStats) => st.departure_station_id.toString() === id)
    console.log(activeStationStats)
    const {departure_station_name: name, departure_station_id : st_id, arrivals, departures, mean_distance, median_distance, mean_duration, median_durarion : median_duration} = activeStationStats
    return (
        <div>
            <SingleStationStatsTable id={st_id} name={name}  address={activeStation.Osoite} capacity={activeStation.Kapasiteet} arrivals={arrivals} departures={departures} mean_duration={mean_duration} mean_distance={mean_distance} median_duration={median_duration} median_distance={median_distance} />
        </div>
    );
};

export default SingleStation;
