import React, { useState } from "react"
import { useSelector } from "react-redux"
import { Station, TState } from "../../store/actions/types"
import { useNavigate } from "react-router-dom"
import Map, { Marker, MarkerDragEvent } from "react-map-gl"
import AddStationButton from "../AddStation/AddStationButton"
import ConfirmPinButton from "../AddStation/ConfirmPinButton"
import AddStationDialog from "../AddStation/AddStationDialog"

// added the following 6 lines.
import mapboxgl from "mapbox-gl"
import { useStationsStore } from "../../zustand/stores/stationsStore"

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass =
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default

const MapComponent = () => {
	const [viewState, setViewState] = React.useState({
		longitude: 24.93,
		latitude: 60.16,
		zoom: 13,
	})

	const allStations = useStationsStore((state) => state.allStations)
	console.log(allStations)
	// const allStations = useSelector(
	// 	(state: TState) => state.stations.allStations
	// )

	const navigate = useNavigate()
	const [points, setPoints] = useState({
		x: 24.93,
		y: 60.16,
	})
	const [dialog, setDialogState] = useState(false)

	const [pin, setPin] = useState(false)
	const handleClick = (id: number) => {
		navigate(`/stations/${id}`)
	}

	const setDialogOpen = () => {
		setDialogState(true)
	}
	const setDialogClose = () => {
		setDialogState(false)
	}
	const handleDrag = (e: MarkerDragEvent) => {
		setPoints((prev) => {
			return {
				...prev,
				x: e.lngLat.lng,
				y: e.lngLat.lat,
			}
		})
	}

	return (
		<Map
			{...viewState}
			mapboxAccessToken={
				"pk.eyJ1IjoiaG9seWRvbmsiLCJhIjoiY2t3bTV4c2s5MXdqaTJ2bWxqYmNzeXg4ciJ9.9mHUItDBPKx0if6COMXKEg"
			}
			style={{
				width: "100%",
				height: "calc(100vh - 70px)",
				boxSizing: "border-box",
			}}
			onMove={(evt) => {
				setViewState(evt.viewState)
				setPoints((prev) => {
					return {
						...prev,
						x: evt.viewState.longitude,
						y: evt.viewState.latitude,
					}
				})
			}}
			mapStyle="mapbox://styles/mapbox/light-v9"
		>
			{allStations.map((station: Station, i) => {
				return (
					<Marker
						key={`marker-${station.Name}-${i}`}
						longitude={station.x}
						latitude={station.y}
						anchor="bottom"
						color="#76c2af"
						onClick={() => handleClick(station.ID)}
					/>
				)
			})}
			{pin ? (
				<Marker
					key={"marker-draggable"}
					anchor="bottom"
					longitude={points.x}
					latitude={points.y}
					draggable={true}
					color="#FFC09B"
					scale={1.5}
					onDragEnd={(e) => handleDrag(e)}
				/>
			) : null}
			{pin ? <ConfirmPinButton handleClick={setDialogOpen} /> : null}
			<AddStationButton handleClick={setPin} pin={pin} />
			<AddStationDialog
				open={dialog}
				handleClose={setDialogClose}
				x={points.x}
				y={points.y}
			/>
		</Map>
	)
}

export default MapComponent
