import React, {useState} from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {useSelector} from "react-redux";
import {Station} from "../../store/actions/types"
import {Box, FormControlLabel, InputAdornment} from "@mui/material";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const JourneysStationFilters = () => {
    // @ts-ignore
    const allStations = useSelector(state => state.stations.allStations)

    return (
        <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={allStations}
            disableCloseOnSelect
            getOptionLabel={(option: Station) => option.Name}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                    {option.Name}
                </li>
            )}
            style={{ width: 500 }}
            renderInput={(params) => (
                <TextField {...params} label="Station of departure" placeholder="Stations" />
            )}
        />
    );
}

export const DistanceFilter = () => {
    const [distance, setDistance] = useState("0")
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    const handleDistanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDistance(event.target.value);
    };
    return (
        <Box display={"flex"} alignItems={"center"}>
            <FormControlLabel control={<Checkbox checked={checked} onChange={handleChange}/>} label={checked ? "Greater than:" : "Shorter than:"} />
            <TextField
                label="Type distance"
                type={"number"}

                id="outlined-start-adornment"
                sx={{ m: 1, width: '250px' }}
                value={distance}
                onChange={handleDistanceChange}
                InputProps={{
                    inputMode: 'numeric',
                    endAdornment: <InputAdornment position="end">meters</InputAdornment>,
                }}
            />
        </Box>
    )
}

export const DurationFilter = () => {
    const [duration, setDuration] = useState("0")
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    const handleDistanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDuration(event.target.value);
    };
    return (
        <Box display={"flex"} alignItems={"center"}>
            <FormControlLabel control={<Checkbox checked={checked} onChange={handleChange}/>} label={checked ? "Greater than:" : "Shorter than:"} />
            <TextField
                label="Type duration"
                type={"number"}
                id="outlined-start-adornment"
                sx={{ m: 1, width: '250px' }}
                value={duration}
                onChange={handleDistanceChange}
                InputProps={{
                    inputMode: 'numeric',
                    endAdornment: <InputAdornment position="end">seconds</InputAdornment>,
                }}
            />
        </Box>
    )
}
