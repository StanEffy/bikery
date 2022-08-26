import axios from "axios"

export const apiStations = axios.create({
	baseURL: "http://52.47.198.242:3001/api/v1/stations/",
	// @ts-ignore
	"Access-Control-Allow-Credentials": true,
})

export const apiStationsStats = axios.create({
	baseURL: "http://52.47.198.242:3001/api/v1/stats/",
	// @ts-ignore
	"Access-Control-Allow-Credentials": true,
})

export const apiTrips = axios.create({
	baseURL: "http://52.47.198.242:3001/api/v1/trips/",
	// @ts-ignore
	"Access-Control-Allow-Credentials": true,
})
