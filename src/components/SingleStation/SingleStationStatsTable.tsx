import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

type StationStatsRow = {
	name: string
	id: number | string
	address?: string
	capacity?: number
	arrivals: number
	departures: number
	mean_duration: number
	mean_distance: number
	median_duration: number
	median_distance: number
}

export default function SingleStationStatsTable({
	name,
	id,
	address,
	capacity,
	arrivals,
	departures,
	mean_distance,
	median_distance,
	mean_duration,
	median_duration,
}: StationStatsRow) {
	return (
		<TableContainer component={Paper}>
			<Table
				sx={{ minWidth: 450 }}
				aria-label="table of the station"
				size="small"
			>
				<TableHead>
					<TableRow>
						<TableCell>ID</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Address</TableCell>
						<TableCell
							align="right"
							sx={{ display: { xs: "none", md: "table-cell" } }}
						>
							Capacity
						</TableCell>
						<TableCell align="right">Arrivals</TableCell>
						<TableCell align="right">Departures</TableCell>
						<TableCell
							align="right"
							sx={{ display: { xs: "none", md: "table-cell" } }}
						>
							Mean dist
						</TableCell>
						<TableCell
							align="right"
							sx={{ display: { xs: "none", md: "table-cell" } }}
						>
							Mean duration
						</TableCell>
						<TableCell
							align="right"
							sx={{ display: { xs: "none", md: "table-cell" } }}
						>
							Median dist
						</TableCell>
						<TableCell
							align="right"
							sx={{ display: { xs: "none", md: "table-cell" } }}
						>
							Median duration
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow
						key={name}
						sx={{
							"&:last-child td, &:last-child th": { border: 0 },
						}}
					>
						<TableCell component="th" scope="row">
							{id}
						</TableCell>
						<TableCell component="th" scope="row">
							{name}
						</TableCell>
						<TableCell component="th" scope="row">
							{address}
						</TableCell>
						<TableCell
							align="right"
							sx={{ display: { xs: "none", md: "table-cell" } }}
						>
							{capacity}
						</TableCell>
						<TableCell align="right">{arrivals}</TableCell>
						<TableCell align="right">{departures}</TableCell>
						<TableCell
							align="right"
							sx={{ display: { xs: "none", md: "table-cell" } }}
						>
							{Math.floor(mean_distance)} m
						</TableCell>
						<TableCell
							align="right"
							sx={{ display: { xs: "none", md: "table-cell" } }}
						>
							{(Math.floor(mean_duration) / 60).toFixed(2)} min
						</TableCell>
						<TableCell
							align="right"
							sx={{ display: { xs: "none", md: "table-cell" } }}
						>
							{median_distance} m
						</TableCell>
						<TableCell
							align="right"
							sx={{ display: { xs: "none", md: "table-cell" } }}
						>
							{(Math.floor(median_duration) / 60).toFixed(2)} min
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	)
}
