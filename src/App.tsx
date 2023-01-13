import "./App.css"

import React from "react"
import Header from "./components/Header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SingleStation from "./components/SingleStation/SingleStation"
import Map from "./components/Map/Map"
import StationList from "./components/StationsList/StationList"
import AddTrip from "./components/AddTrip/AddTrip"
import AddStationPin from "./components/AddStation/AddStationPin"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { LoadAllStations } from "./store/actions/stationsActions"
import { LoadAllStationsStats } from "./store/actions/stationsStatsActions"
import InitialPage from "./components/InitialPage/InitialPage"
import JourneysList from "./components/JourneysList/JourneysList"
import { createTheme, ThemeProvider } from "@mui/material"
import AppAlert from "./components/Alert/Alert"
import Box from "@mui/material/Box"
import { TState } from "./store/actions/types"

function App() {
	const dispatch = useDispatch()

	const theme = createTheme({
		palette: {
			primary: {
				main: "#76c2af",
			},
			secondary: {
				main: "#FFC09B",
			},
		},
	})

	useEffect(() => {
		dispatch<any>(LoadAllStations())
		dispatch<any>(LoadAllStationsStats())
	}, [])

	const alert = useSelector((state: TState) => state.alert)
	console.log(alert)

	useEffect(() => {
		console.log("alert has changed!")
	}, [alert])
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore

	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<header className="App-header">
					<Router>
						<Header />
						<Box
							sx={{
								position: "relative",
								width: "100%",
								top: "-70px",
							}}
						>
							{alert !== null ? (
								<AppAlert
									type={alert?.alert?.type}
									message={alert?.alert?.message}
									visibility={alert.visibility}
								/>
							) : null}
						</Box>

						<Routes>
							<Route path={"/"} element={<InitialPage />} />
							<Route
								path={"/stations"}
								element={<StationList />}
							/>
							<Route
								path={"/stations/:id"}
								element={<SingleStation />}
							/>
							<Route path={"/map"} element={<Map />} />
							<Route
								path={"/journeys"}
								element={<JourneysList />}
							/>
							<Route path={"/add_trip"} element={<AddTrip />} />
							<Route
								path={"/add_station"}
								element={<AddStationPin />}
							/>
						</Routes>
					</Router>
				</header>
			</ThemeProvider>
		</div>
	)
}

export default App
