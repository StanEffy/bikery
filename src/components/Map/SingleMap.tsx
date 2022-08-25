import React, { useEffect } from "react"
import mapboxgl from "mapbox-gl"

const SingleMap = ({
	x = 60.16,
	y = 24.93,
	st_id,
}: {
	x: number | undefined
	y: number | undefined
	st_id: string | number
}) => {
	useEffect(() => {
		mapboxgl.accessToken =
			"pk.eyJ1IjoiaG9seWRvbmsiLCJhIjoiY2t3bTV4c2s5MXdqaTJ2bWxqYmNzeXg4ciJ9.9mHUItDBPKx0if6COMXKEg"
		const map = new mapboxgl.Map({
			container: "s-map", // container ID
			style: "mapbox://styles/mapbox/streets-v11", // style URL
			center: [x, y], // starting position [lng, lat]
			zoom: 12, // starting zoom// display the map as a 3D globe
		})

		new mapboxgl.Marker().setLngLat([x, y]).addTo(map)
	}, [st_id])
	return <div id={"s-map"} style={{ width: "100%", height: "400px" }} />
}

export default SingleMap
