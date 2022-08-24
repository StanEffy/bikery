import React, {useState} from "react"
import Checkbox from "@mui/material/Checkbox"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank"
import CheckBoxIcon from "@mui/icons-material/CheckBox"
import {useSelector} from "react-redux"
import {Station} from "../../store/actions/types"
import {
	Box,
	FormControlLabel,
	InputAdornment,
} from "@mui/material"

// @ts-ignore
export const JourneysStationFilters = ({label, handleFilters}) => {
	// @ts-ignore
	const allStations = useSelector(state => state.stations.allStations)

	const handleStationChange = (value: any) => {
		label === "Departure station" ?
			handleFilters((prevState: any) => ({...prevState, departure_station_id: value})) :
			handleFilters((prevState: any) => ({...prevState, return_station_id: value}))
	}

	return (
		<Autocomplete
			disablePortal
			id="combo-box-demo"
			options={allStations}
			onChange={(event, value) => {
				handleStationChange(value)
			}}
			sx={{ width: 300 }}
			getOptionLabel={(option:Station) => option.Name}
			renderOption={(props, option) => (
				<Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
					{option.Name}
				</Box>
			)}
			renderInput={(params) => <TextField {...params} label={label} />}
		/>
	)
}

// @ts-ignore
export const DistanceFilter = ({handleFilters}) => {
	const [distance, setDistance] = useState("0")
	const [checked, setChecked] = React.useState(true)

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked)
		handleFilters((prevState: any) => ({...prevState, distance_is_greater: event.target.checked}))
	}
	const handleDistanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDistance(event.target.value)
		handleFilters((prevState: any) => ({...prevState, covered_distance_m: event.target.value}))
	}
	return (
		<Box display={"flex"} alignItems={"center"}>
			<FormControlLabel control={<Checkbox checked={checked} onChange={handleChange}/>} label={checked ? "Greater than:" : "Shorter than:"} />
			<TextField
				label="Type distance"
				type={"number"}

				id="outlined-start-adornment"
				sx={{ m: 1, width: "250px" }}
				value={distance}
				onChange={handleDistanceChange}
				InputProps={{
					inputMode: "numeric",
					endAdornment: <InputAdornment position="end">meters</InputAdornment>,
				}}
			/>
		</Box>
	)
}

// @ts-ignore
export const DurationFilter = ({handleFilters}) => {
	const [duration, setDuration] = useState("0")
	const [checked, setChecked] = React.useState(true)

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked)
		handleFilters((prevState: any) => ({...prevState, duration_is_greater: event.target.checked}))
	}
	const handleDistanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDuration(event.target.value)
		handleFilters((prevState: any) => ({...prevState, duration_sec: event.target.value}))
	}
	return (
		<Box display={"flex"} alignItems={"center"}>
			<FormControlLabel control={<Checkbox checked={checked} onChange={handleChange}/>} label={checked ? "Greater than:" : "Shorter than:"} />
			<TextField
				label="Type duration"
				type={"number"}
				id="outlined-start-adornment"
				sx={{ m: 1, width: "250px" }}
				value={duration}
				onChange={handleDistanceChange}
				InputProps={{
					inputMode: "numeric",
					endAdornment: <InputAdornment position="end">seconds</InputAdornment>,
				}}
			/>
		</Box>
	)
}
