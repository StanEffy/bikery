import React from 'react';
import {DistanceFilter, DurationFilter, JourneysStationFilters} from "./JourneysFilters";
import {Box, Button} from "@mui/material";

const JourneysList = () => {

    return (
        <>
            <Box display={"flex"} alignItems={"flex-start"} justifyContent={"center"} flexWrap={"wrap"} sx={{ mt: 2}}>
                <JourneysStationFilters />
                <Box>
                    <DistanceFilter />
                    <DurationFilter />
                </Box>
                <Box display={"flex"} alignItems={"flex-start"} justifyContent={"center"} sx={{ width: "100%"}}>
                    <Button variant="contained">Send filters</Button>
                </Box>
            </Box>

            <div>
                This is Journeys List component
            </div>
        </>

    );
};

export default JourneysList;
