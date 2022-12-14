import "./App.css"

import React from "react"
import Header from "./components/Header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SingleStation from "./components/SingleStation/SingleStation"
import Map from "./components/Map/Map"
import StationList from "./components/StationsList/StationList"
import AddTrip from "./components/AddTrip/AddTrip"
import AddStationPin from "./components/AddStation/AddStationPin"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { LoadAllStations } from "./store/actions/stationsActions"
import { LoadAllStationsStats } from "./store/actions/stationsStatsActions"
import InitialPage from "./components/InitialPage/InitialPage"
import JourneysList from "./components/JourneysList/JourneysList"
import { createTheme, ThemeProvider } from "@mui/material"
import AppAlert from "./components/Alert/Alert"
import Box from "@mui/material/Box"

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

	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<header className="App-header">
					<Router>
						<Header />
						<Box sx={{ position: "relative", width: "100%" }}>
							<AppAlert
								type={"success"}
								message={"Checking how alert goes"}
								visibility={true}
							/>
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
