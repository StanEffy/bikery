
import axios from 'axios';

export const apiStations = axios.create({
    baseURL: 'http://localhost:3001/api/v1/stations/',
    // @ts-ignore
    'Access-Control-Allow-Credentials': true
})

export const apiStationsStats = axios.create({
    baseURL: '/',
    // @ts-ignore
    'Access-Control-Allow-Credentials': true
})

export const apiTrips = axios.create({
    baseURL: '/',
    // @ts-ignore
    'Access-Control-Allow-Credentials': true
})
