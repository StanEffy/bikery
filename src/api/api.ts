import axios from "axios"

export const apiStations = axios.create({
	baseURL: "/api/v1/stations/",
	"Access-Control-Allow-Credentials": true,
})

export const apiStationsStats = axios.create({
	baseURL: "/api/v1/stats/",
	"Access-Control-Allow-Credentials": true,
})

export const apiTrips = axios.create({
	baseURL: "/api/v1/trips/",
	"Access-Control-Allow-Credentials": true,
})
export const apiStationsPopular = axios.create({
	baseURL: "/api/v1/stationToStation/",
	"Access-Control-Allow-Credentials": true,
})
