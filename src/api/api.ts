
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
    baseURL: '/',
    // @ts-ignore
    'Access-Control-Allow-Credentials': true
})

export const apiTripsByDeparture = async (id: string | undefined) => {
    try {
        const {data} = await apiTrips.get(`/?departure_station_id=${id}`)
        return data.data.data
    }
    catch (e) {
        console.log(e)
    }
}
