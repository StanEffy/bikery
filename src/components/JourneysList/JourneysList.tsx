import React, {useState} from 'react';
import {DistanceFilter, DurationFilter, JourneysStationFilters} from "./JourneysFilters";
import {Box, Button} from "@mui/material";
import TripsFromStationTable from "../SingleStation/TripsFromStation";
import {useDispatch, useSelector} from "react-redux";
import {LoadFilteredTrips} from "../../store/actions/tripsAction";
import {Station} from "../../store/actions/types";

type TFilter = {
    departure_station_id: null | Station,
    covered_distance_m: string | 0,
    duration_sec: string | 0,
}

const JourneysList = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const trips = useSelector(state => state.trips.filteredTrips)

    const [filters, setFilters] = useState<TFilter>({
        departure_station_id: null,
        covered_distance_m: 0,
        duration_sec: 0,
    } )

    const createQueryString = (filter: TFilter) => {
        let str = '';
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        str += 'departure_station_id='+ filter.departure_station_id?.FID
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
       // @ts-ignore
       str += '&covered_distance_m[gte]='+ filter.covered_distance_m
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        str += '& duration_sec[gte]='+ filter.duration_sec
        return str
    }

    const handleFilter = () => {
        console.log(filters)
        // @ts-ignore
        dispatch(LoadFilteredTrips(createQueryString(filters)))
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
                    <Button variant="contained" onClick={() => handleFilter() }>Send filters</Button>
                </Box>
            </Box>
            <TripsFromStationTable trips={trips} />
        </>

    );
};

export default JourneysList;
