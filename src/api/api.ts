
import axios from 'axios';

export const apiStations = axios.create({
    baseURL: '/',
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
