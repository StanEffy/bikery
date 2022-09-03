import axios from "axios"

export const apiStations = axios.create({
	baseURL: "https://52.47.198.242/api/v1/stations/",
	"Access-Control-Allow-Credentials": true,
})

export const apiStationsStats = axios.create({
	baseURL: "https://52.47.198.242/api/v1/stats/",
	"Access-Control-Allow-Credentials": true,
})

export const apiTrips = axios.create({
	baseURL: "https://52.47.198.242/api/v1/trips/",
	"Access-Control-Allow-Credentials": true,
})
