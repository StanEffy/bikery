import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { Station, TState } from "../../store/actions/types"
import { useNavigate } from "react-router-dom"
import Map, { Marker } from "react-map-gl"

const MapComponent = () => {
	const allStations = useSelector(
		(state: TState) => state.stations.allStations
	)
	useEffect(() => {
		console.log(allStations)
	}, [])
	const navigate = useNavigate()

	const handleClick = (id: number) => {
		navigate(`/stations/${id}`)
	}

	return (
		<Map
			initialViewState={{
				longitude: 24.93,
				latitude: 60.16,
				zoom: 13,
			}}
			mapboxAccessToken={
				"pk.eyJ1IjoiaG9seWRvbmsiLCJhIjoiY2t3bTV4c2s5MXdqaTJ2bWxqYmNzeXg4ciJ9.9mHUItDBPKx0if6COMXKEg"
			}
			style={{ width: "100%", height: "100vh" }}
			mapStyle="mapbox://styles/mapbox/light-v9"
		>
			{allStations.map((station: Station) => {
				console.log(station)
				return (
					<Marker
						key={`marker-${station.Name}`}
						longitude={station.x}
						latitude={station.y}
						anchor="bottom"
						color="#76c2af"
						onClick={() => handleClick(station.ID)}
					/>
				)
			})}
		</Map>
	)
}

export default MapComponent
