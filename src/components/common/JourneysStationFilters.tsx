import { useSelector } from "react-redux"
import Autocomplete from "@mui/material/Autocomplete"
import { Station, TState } from "../../store/actions/types"
import { Box } from "@mui/material"
import TextField from "@mui/material/TextField"
import React from "react"
import { TFilter } from "../JourneysList/JourneysList"
import { nanoid } from "nanoid"

type Props = {
	label: string
	handleFilters: (cb: (value: TFilter) => TFilter) => void
}

export const JourneysStationFilters: React.FC<Props> = ({
	label,
	handleFilters,
}) => {
	const allStations = useSelector(
		(state: TState) => state.stations.allStations
	)

	const handleStationChange = (value: Station | null) => {
		label === "Departure station"
			? handleFilters((prevState: TFilter) => ({
					...prevState,
					departure_station_id: value,
			  }))
			: handleFilters((prevState: TFilter) => ({
					...prevState,
					return_station_id: value,
			  }))
	}

	return (
		<Autocomplete
			disablePortal
			id={"autocomplete" + label.split(" ").join("")}
			aria-label={"autocomplete" + label.split(" ").join("")}
			options={allStations}
			onChange={(event, value) => {
				handleStationChange(value)
			}}
			sx={{
				width: 300,
				mb: {
					xs: 2,
				},
			}}
			getOptionLabel={(option: Station) => option.Name}
			renderOption={(props, option) => {
				const uniqueId = nanoid()
				return (
					<Box
						component="li"
						sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
						{...props}
						key={uniqueId}
					>
						{option.Name}
					</Box>
				)
			}}
			renderInput={(params) => <TextField {...params} label={label} />}
		/>
	)
}
