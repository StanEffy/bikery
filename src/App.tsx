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

import InitialPage from "./components/InitialPage/InitialPage"
import JourneysList from "./components/JourneysList/JourneysList"
import { createTheme, ThemeProvider } from "@mui/material"
import AppAlert from "./components/Alert/Alert"
import Box from "@mui/material/Box"
import { TState } from "./store/actions/types"
import { NullifyAlert } from "./store/actions/alertAction"

import { useStationsStore } from "./zustand/stores/stationsStore"

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

	const alert = useSelector((state: TState) => state.alert)
	const loadAllStations = useStationsStore((state) => state.loadAllStations)

	useEffect(() => {
		loadAllStations()
		//dispatch<any>(LoadAllStationsStats())
		//dispatch<any>(LoadAllStationPopular())
	}, [])

	useEffect(() => {
		if (alert.alert) {
			const timer = setTimeout(() => dispatch<any>(NullifyAlert()), 4500)
			return () => {
				clearTimeout(timer)
			}
		}
	}, [alert])

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
							<AppAlert
								alert={alert.alert}
								visibility={alert.visibility}
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
