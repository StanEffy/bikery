import { useSelector } from "react-redux"
import Autocomplete from "@mui/material/Autocomplete"
import { Station, TState } from "../../store/actions/types"
import { Box } from "@mui/material"
import TextField from "@mui/material/TextField"
import React from "react"

export const JourneysStationFilters = ({ label, handleFilters }) => {
	const allStations = useSelector(
		(state: TState) => state.stations.allStations
	)

	const handleStationChange = (value: Station | null) => {
		label === "Departure station"
			? handleFilters((prevState: any) => ({
					...prevState,
					departure_station_id: value,
			  }))
			: handleFilters((prevState: any) => ({
					...prevState,
					return_station_id: value,
			  }))
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
			getOptionLabel={(option: Station) => option.Name}
			renderOption={(props, option) => (
				<Box
					component="li"
					sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
					{...props}
				>
					{option.Name}
				</Box>
			)}
			renderInput={(params) => <TextField {...params} label={label} />}
		/>
	)
}