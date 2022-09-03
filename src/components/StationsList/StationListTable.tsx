import * as React from "react"
import { alpha } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TablePagination from "@mui/material/TablePagination"
import TableRow from "@mui/material/TableRow"
import TableSortLabel from "@mui/material/TableSortLabel"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"

import FormControlLabel from "@mui/material/FormControlLabel"
import Switch from "@mui/material/Switch"

import { visuallyHidden } from "@mui/utils"
import { useSelector } from "react-redux"
import { StationStats, TState } from "../../store/actions/types"
import { useNavigate } from "react-router-dom"

interface Data {
	departure_station_name: string
	departure_station_id: number
	arrivals: number
	departures: number
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
	if (b[orderBy] < a[orderBy]) {
		return -1
	}
	if (b[orderBy] > a[orderBy]) {
		return 1
	}
	return 0
}

type Order = "asc" | "desc"

function getComparator<Key extends keyof any>(
	order: Order,
	orderBy: Key
): (
	a: { [key in Key]: number | string },
	b: { [key in Key]: number | string }
) => number {
	return order === "desc"
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy)
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T>(
	array: readonly T[],
	comparator: (a: T, b: T) => number
) {
	const stabilizedThis = array.map((el, index) => [el, index] as [T, number])
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0])
		if (order !== 0) {
			return order
		}
		return a[1] - b[1]
	})
	return stabilizedThis.map((el) => el[0])
}

interface HeadCell {
	disablePadding: boolean
	id: keyof Data
	label: string
	numeric: boolean
	align: "right" | "left"
}

const headCells: readonly HeadCell[] = [
	{
		id: "departure_station_id",
		numeric: true,
		disablePadding: true,
		label: "id",
		align: "left",
	},
	{
		id: "departure_station_name",
		numeric: false,
		disablePadding: true,
		label: "name",
		align: "right",
	},
	{
		id: "arrivals",
		numeric: true,
		disablePadding: false,
		label: "arrivals",
		align: "right",
	},
	{
		id: "departures",
		numeric: true,
		disablePadding: false,
		label: "departures",
		align: "right",
	},
]

interface EnhancedTableProps {
	numSelected: number
	onRequestSort: (
		event: React.MouseEvent<unknown>,
		property: keyof Data
	) => void
	onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
	order: Order
	orderBy: string
	rowCount: number
}

function EnhancedTableHead(props: EnhancedTableProps) {
	const { order, orderBy, onRequestSort } = props
	const createSortHandler =
		(property: keyof Data) => (event: React.MouseEvent<unknown>) => {
			onRequestSort(event, property)
		}

	return (
		<TableHead>
			<TableRow>
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={headCell.align}
						padding={headCell.disablePadding ? "none" : "normal"}
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : "asc"}
							onClick={createSortHandler(headCell.id)}
						>
							{headCell.label}
							{orderBy === headCell.id ? (
								<Box component="span" sx={visuallyHidden}>
									{order === "desc"
										? "sorted descending"
										: "sorted ascending"}
								</Box>
							) : null}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	)
}

interface EnhancedTableToolbarProps {
	numSelected: number
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
	const { numSelected } = props

	return (
		<Toolbar
			sx={{
				pl: { sm: 2 },
				pr: { xs: 1, sm: 1 },
				...(numSelected > 0 && {
					bgcolor: (theme) =>
						alpha(
							theme.palette.primary.main,
							theme.palette.action.activatedOpacity
						),
				}),
			}}
		>
			<Typography
				sx={{ flex: "1 1 100%" }}
				variant="h6"
				id="tableTitle"
				component="div"
			>
				Stations list
			</Typography>
		</Toolbar>
	)
}

export default function StationListTable() {
	const [order, setOrder] = React.useState<Order>("asc")
	const [orderBy, setOrderBy] = React.useState<keyof Data>(
		"departure_station_id"
	)
	const [selected, setSelected] = React.useState<readonly string[]>([])
	const [page, setPage] = React.useState(0)
	const [dense, setDense] = React.useState(false)
	const [rowsPerPage, setRowsPerPage] = React.useState(25)
	const navigate = useNavigate()

	const allStations = useSelector(
		(state: TState) => state.stations.allStationsStats
	)

	const handleRequestSort = (
		event: React.MouseEvent<unknown>,
		property: keyof Data
	) => {
		const isAsc = orderBy === property && order === "asc"
		setOrder(isAsc ? "desc" : "asc")
		setOrderBy(property)
	}

	const handleSelectAllClick = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		if (event.target.checked) {
			const newSelected = allStations.map(
				(n: StationStats) => n.departure_station_name
			)
			setSelected(newSelected)
			return
		}
		setSelected([])
	}
	const handleClick = (id: number) => {
		navigate(`/stations/${id}`)
	}

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage)
	}

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(parseInt(event.target.value, 10))
		setPage(0)
	}

	const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDense(event.target.checked)
	}

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0
			? Math.max(0, (1 + page) * rowsPerPage - allStations.length)
			: 0

	return (
		<Box sx={{ width: "100%" }}>
			<Paper
				sx={{ width: "100%", mb: 2, pl: 1, boxSizing: "border-box" }}
			>
				<EnhancedTableToolbar numSelected={selected.length} />
				<TableContainer>
					<Table
						sx={{ minWidth: 375 }}
						aria-labelledby="tableTitle"
						size={dense ? "small" : "medium"}
					>
						<EnhancedTableHead
							numSelected={selected.length}
							order={order}
							orderBy={orderBy}
							onSelectAllClick={handleSelectAllClick}
							onRequestSort={handleRequestSort}
							rowCount={allStations.length}
						/>
						<TableBody>
							{stableSort(
								allStations,
								getComparator(order, orderBy)
							)
								.slice(
									page * rowsPerPage,
									page * rowsPerPage + rowsPerPage
								)
								.map(
									(
										{
											departures,
											departure_station_name,
											arrivals,
											departure_station_id,
										},
										index
									) => {
										const labelId = `enhanced-table-checkbox-${index}`

										return (
											<TableRow
												hover
												onClick={() =>
													handleClick(
														departure_station_id
													)
												}
												role="checkbox"
												tabIndex={-1}
												key={departure_station_name}
												className={
													"station-list__row--clickable"
												}
											>
												<TableCell
													component="th"
													id={labelId}
													scope="row"
													padding="none"
												>
													{departure_station_id}
												</TableCell>
												<TableCell
													align="right"
													component="th"
													id={labelId}
													scope="row"
													padding="none"
												>
													{departure_station_name}
												</TableCell>
												<TableCell align="right">
													{departures}
												</TableCell>
												<TableCell align="right">
													{arrivals}
												</TableCell>
											</TableRow>
										)
									}
								)}
							{emptyRows > 0 && (
								<TableRow
									style={{
										height: (dense ? 33 : 53) * emptyRows,
									}}
								>
									<TableCell colSpan={6} />
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component="div"
					count={allStations.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Paper>
			<FormControlLabel
				control={
					<Switch checked={dense} onChange={handleChangeDense} />
				}
				label="Dense padding"
			/>
		</Box>
	)
}
