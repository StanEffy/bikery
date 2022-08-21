import React, {useState} from 'react';
import {DistanceFilter, DurationFilter, JourneysStationFilters} from "./JourneysFilters";
import {Box, Button} from "@mui/material";
import TripsFromStationTable from "../SingleStation/TripsFromStation";
import {useDispatch} from "react-redux";
import {LoadFilteredTrips} from "../../store/actions/tripsAction";

const JourneysList = () => {
    const dispatch = useDispatch();
    const [trips, setTrips] = useState([])

    const [filters, setFilters] = useState({
        departure_station_id: [],
        covered_distance_m: 0,
        duration_sec: 0,
    })

    const handleFilter = (str:string) => {
        // @ts-ignore
        dispatch(LoadFilteredTrips(str))
    }
    return (
        <>
            <Box display={"flex"} alignItems={"flex-start"} justifyContent={"center"} flexWrap={"wrap"} sx={{ mt: 2}}>
                <JourneysStationFilters  handleFilters={setFilters}/>
                <Box>
                    <DistanceFilter handleFilters={setFilters}/>
                    <DurationFilter handleFilters={setFilters}/>
                </Box>
                <Box display={"flex"} alignItems={"flex-start"} justifyContent={"center"} sx={{ width: "100%"}}>
                    <Button variant="contained">Send filters</Button>
                </Box>
            </Box>
            <TripsFromStationTable trips={trips} />
        </>

    );
};

export default JourneysList;
