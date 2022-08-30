import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Station, TState } from "../../store/actions/types"
import { useNavigate } from "react-router-dom"
import Map, { Marker } from "react-map-gl"
import AddStationButton from "./AddStationButton"
import ConfirmPinButton from "./ConfirmPinButton"
import AddStationDialog from "./AddStationDialog"

const MapComponent = () => {
	const [viewState, setViewState] = React.useState({
		longitude: 24.93,
		latitude: 60.16,
		zoom: 13,
	})

	const allStations = useSelector(
		(state: TState) => state.stations.allStations
	)
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
	const handleDrag = (e: any) => {
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
				length={allStations.length}
				x={points.x}
				y={points.y}
			/>
		</Map>
	)
}

export default MapComponent
