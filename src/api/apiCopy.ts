// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
//This file is needed in case you want to try it with locally working server
//I struggled a lot with ec2
// may be I will set up variables and different commands for ui
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
