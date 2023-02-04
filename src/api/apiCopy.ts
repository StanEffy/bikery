// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
//This file is needed in case I want to try it with locally working server
import axios from "axios"

export const apiStations = axios.create({
	baseURL: "http://localhost:3002/api/v1/stations/",
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	"Access-Control-Allow-Credentials": true,
})

export const apiStationsStats = axios.create({
	baseURL: "http://localhost:3002/api/v1/stats/",
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	"Access-Control-Allow-Credentials": true,
})
export const apiStationsPopular = axios.create({
	baseURL: "http://localhost:3002/api/v1/stationToStation/",
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	"Access-Control-Allow-Credentials": true,
})
export const apiTrips = axios.create({
	baseURL: "http://localhost:3002/api/v1/trips/",
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	"Access-Control-Allow-Credentials": true,
})
