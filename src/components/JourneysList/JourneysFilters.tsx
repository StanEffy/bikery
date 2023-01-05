import React, { useState } from "react"
import Checkbox from "@mui/material/Checkbox"
import TextField from "@mui/material/TextField"
import {
	Box,
	FormControl,
	FormControlLabel,
	InputAdornment,
	InputLabel,
} from "@mui/material"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { TFilter } from "./JourneysList"
import MenuItem from "@mui/material/MenuItem"

export type TDate = { start: string; end: string }

export type TWarmMonths = { dateFilter: TDate }

type Props = {
	handleFilters: (cb: (value: TFilter) => TFilter) => void
}
export const SelectMonth: React.FC<Props> = ({ handleFilters }) => {
	const [month, setMonth] = React.useState<string>("")

	const handleChange = (event: SelectChangeEvent) => {
		setMonth(event.target.value)
		handleFilters((prevState: TFilter) => ({
			...prevState,
			dateFilter: event.target.value,
		}))
	}

	return (
		<FormControl fullWidth>
			<InputLabel id="select-month-label">Age</InputLabel>
			<Select
				labelId="select-month-label"
				id="select-month"
				value={month}
				label="Month"
				onChange={handleChange}
			>
				<MenuItem value={"may"}>May</MenuItem>
				<MenuItem value={"june"}>June</MenuItem>
				<MenuItem value={"july"}>July</MenuItem>
			</Select>
		</FormControl>
	)
}
export const DistanceFilter: React.FC<Props> = ({ handleFilters }) => {
	const [distance, setDistance] = useState("0")
	const [checked, setChecked] = React.useState(true)

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked)
		handleFilters((prevState: TFilter) => ({
			...prevState,
			distance_is_greater: event.target.checked,
		}))
	}
	const handleDistanceChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setDistance(event.target.value)
		handleFilters((prevState: TFilter) => ({
			...prevState,
			covered_distance_m: event.target.value,
		}))
	}
	return (
		<Box display={"flex"} alignItems={"center"}>
			<FormControlLabel
				labelPlacement={"top"}
				control={<Checkbox checked={checked} onChange={handleChange} />}
				label={checked ? "Greater than:" : "Shorter than:"}
			/>
			<TextField
				label="Type distance"
				type={"number"}
				id="outlined-start-adornment"
				sx={{ m: 1, width: "250px" }}
				value={distance}
				onChange={handleDistanceChange}
				InputProps={{
					inputMode: "numeric",
					endAdornment: (
						<InputAdornment position="end">meters</InputAdornment>
					),
				}}
			/>
		</Box>
	)
}

export const DurationFilter: React.FC<Props> = ({ handleFilters }) => {
	const [duration, setDuration] = useState("0")
	const [checked, setChecked] = React.useState(true)

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked)
		handleFilters((prevState: TFilter) => ({
			...prevState,
			duration_is_greater: event.target.checked,
		}))
	}
	const handleDistanceChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setDuration(event.target.value)
		handleFilters((prevState: TFilter) => ({
			...prevState,
			duration_sec: event.target.value,
		}))
	}
	return (
		<Box display={"flex"} alignItems={"center"}>
			<FormControlLabel
				labelPlacement={"top"}
				control={<Checkbox checked={checked} onChange={handleChange} />}
				label={checked ? "Greater than:" : "Shorter than:"}
			/>
			<TextField
				label="Type duration"
				type={"number"}
				id="outlined-start-adornment"
				sx={{ m: 1, width: "250px" }}
				value={duration}
				onChange={handleDistanceChange}
				InputProps={{
					inputMode: "numeric",
					endAdornment: (
						<InputAdornment position="end">seconds</InputAdornment>
					),
				}}
			/>
		</Box>
	)
}
