export type Station = {
    Name: string,
    Namn?: string,
    Nimi?: string,
    Osoite: string,
    Kaupunki: string,
    Stad?: string,
    Operaattor?: string,
    Kapasiteet: number,
    x: number,
    y: number,
    FID?: number | string,
    ID: number,
    _id?: string
}
export type Trip = {
    departure: string,
    return:   string,
    departure_station_id:  number,
    departure_station_name:  string,
    return_station_id: number,
    return_station_name:  string,
    covered_distance_m: number,
    duration_sec: number,
}
export type StationStats = {
    departure_station_name: string,
    departure_station_id: number,
    departures: number,
    mean_distance: number,
    median_distance: number,
    mean_duration: number,
    median_durarion: number,
    arrivals: number
}

export enum ActionTypes {
    LoadAllStations= "LoadAllStations" ,
    SetActiveStation = "SetActiveStation",
    AddNewStation = "AddNewStation"
}

export enum ActionTypesTrips {
    LoadAllTripsByStation= "LoadAllTripsByStation" ,
    AddNewTrip = "AddNewTrip",
}
export enum ActionTypesStats {
    LoadAllStationStats = "LoadAllStationStats"
}

export interface ILoadAllStations {
    type: ActionTypes.LoadAllStations,
    payload: [Station]
}

export interface  ISetActiveStation {
    type: ActionTypes.SetActiveStation,
    payload: Station
}

export interface  IAddNewStation {
    type: ActionTypes.AddNewStation,
    payload: Station
}

export interface ILoadAllTripsByStation {
    type: ActionTypesTrips.LoadAllTripsByStation,
    payload: [Trip]
}

export interface IAddNewTrip {
    type: ActionTypesTrips.AddNewTrip,
    payload: Trip
}

export interface ILoadAllStats {
    type: ActionTypesStats.LoadAllStationStats,
    payload: [StationStats]
}
