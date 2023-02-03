import {
	Box,
	Button,
	Dialog,
	DialogTitle,
	IconButton,
	TextField,
} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AddNewStation } from "../../store/actions/stationsActions"
import { TState } from "../../store/actions/types"

const AddStationDialog = ({
	handleClose,
	open,
	x,
	y,
}: {
	handleClose: () => void
	open: boolean
	x: number
	y: number
}) => {
	const length = useSelector(
		(state: TState) => state.stations.allStations.length
	)

	const [station, setStation] = useState({
		Name: "",
		Namn: "",
		Nimi: "",
		Osoite: "",
		Kaupunki: "Helsinki",
		Stad: "Helsinki",
		Operaattor: "UserCompany",
		Kapasiteet: 0,
		x: x,
		y: y,
		FID: length + 2023,
		ID: length + 2023,
	})

	const dispatch = useDispatch()

	const handleSendStation = () => {
		dispatch<any>(AddNewStation(station))
		handleClose()
	}

	useEffect(() => {
		setStation((prev) => ({ ...prev, x: x, y: y }))
	}, [x, y])

	return (
		<Dialog
			onClose={handleClose}
			open={open}
			data-testid="add-station-dialog__test-id"
		>
			<Box display={"flex"} justifyContent={"space-between"}>
				<Box />
				<IconButton
					color={"error"}
					aria-label="Cancel adding new station"
					size="large"
					onClick={() => handleClose()}
				>
					<DeleteIcon />
				</IconButton>
			</Box>
			<DialogTitle>Add new station</DialogTitle>
			<Box
				display={"flex"}
				flexDirection={"column"}
				sx={{ p: 2 }}
				className={"station-dialog"}
			>
				<TextField
					label="Station name"
					variant="outlined"
					onChange={(e) =>
						setStation((prev) => ({
							...prev,
							Name: e.target.value,
							Namn: e.target.value,
							Nimi: e.target.value,
						}))
					}
				/>
				<TextField
					label="Station address"
					variant="outlined"
					onChange={(e) =>
						setStation((prev) => ({
							...prev,
							Osoite: e.target.value,
						}))
					}
				/>
				<TextField
					label="City"
					variant="outlined"
					disabled
					value={station.Kaupunki}
				/>
				<TextField
					label="Operator"
					variant="outlined"
					disabled
					value={station.Operaattor}
				/>
				<TextField
					label="Longitude"
					variant="outlined"
					disabled
					value={station.x}
				/>
				<TextField
					label="Latitude"
					variant="outlined"
					disabled
					value={station.y}
				/>
			</Box>
			<Button
				variant={"contained"}
				color={"primary"}
				onClick={() => handleSendStation()}
			>
				Send station
			</Button>
		</Dialog>
	)
}

export default AddStationDialog
