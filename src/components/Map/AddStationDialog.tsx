import {
	Box,
	Button,
	Dialog,
	DialogTitle,
	IconButton,
	List,
	ListItem,
	TextField,
} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { AddNewStation } from "../../store/actions/stationsActions"

const AddStationDialog = ({
	handleClose,
	open,
	x,
	y,
	length,
}: {
	handleClose: any
	open: boolean
	x: number
	y: number
	length: number
}) => {
	const [station, setStaion] = useState({
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
		FID: length + 222,
		ID: length + 222,
	})

	const dispatch = useDispatch()

	const handleSendStation = () => {
		// @ts-ignore
		dispatch(AddNewStation(JSON.stringify(station)))
	}

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	useEffect(() => {}, [x, y])
	return (
		<Dialog onClose={handleClose} open={open}>
			<Box display={"flex"} justifyContent={"space-between"}>
				<Box />
				<IconButton
					color={"error"}
					aria-label="delete"
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
						setStaion((prev) => ({
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
						setStaion((prev) => ({
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
