//This file is needed in case you want to try it with locally working server
//I struggled a lot with ec2
// may be I will set up variables and different commands for ui
import axios from 'axios';

export const apiStations = axios.create({
    baseURL: 'http://localhost:3001/api/v1/stations/',
    // @ts-ignore
    'Access-Control-Allow-Credentials': true
})

export const apiStationsStats = axios.create({
    baseURL: 'http://localhost:3001/api/v1/stats/',
    // @ts-ignore
    'Access-Control-Allow-Credentials': true
})

export const apiTrips = axios.create({
    baseURL: 'http://localhost:3001/api/v1/trips/',
    // @ts-ignore
    'Access-Control-Allow-Credentials': true
})
