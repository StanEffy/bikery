//@ts-nocheck
import { TTripsState } from "../reducers/tripsReducers"
import { TStationsReducers } from "../reducers/stationsReducers"
import { TAlert, TAlertState } from "../reducers/alertReducers"
import { StationsStats } from "../../components/SingleStation/OtherStationStats"

export type Station = {
	Name: string
	Namn?: string
	Nimi?: string
	Osoite: string
	Kaupunki: string
	Stad?: string
	Operaattor?: string
	Kapasiteet: number
	x: number
	y: number
	FID?: number | string
	ID: number
	_id?: string
}
export type Trip = {
	departure: string
	return: string
	departure_station_id: number | undefined
	departure_station_name: string | undefined
	return_station_id: number
	return_station_name: string | undefined
	covered_distance_m: number
	duration_sec: number
}
export type StationStats = {
	departure_station_name: string
	departure_station_id: number
	departures: number
	mean_distance: number
	median_distance: number
	mean_duration: number
	median_durarion: number
	arrivals: number
}

export interface IStationToStationStats {
	station_id: string
	stations_of_return: object
	stations_of_arrival: object
}

export enum ActionTypes {
	LoadAllStations = "LoadAllStations",
	SetActiveStation = "SetActiveStation",
	AddNewStation = "AddNewStation",
}
export enum ActionTypesAlert {
	SetAlert = "SetAlert",
	NullifyAlert = "NullifyAlert",
	SetLoadingTrue = "SetLoadingTrue",
	SetLoadingFalse = "SetLoadingFalse",
}
export enum ActionTypesTrips {
	LoadAllTripsByStation = "LoadAllTripsByStation",
	LoadSomeTripsByStation = "LoadSomeTripsByStation",
	AddNewTrip = "AddNewTrip",
	LoadFilteredTrips = "LoadFilteredTrips",
	ClearActiveTrips = "ClearActiveTrips",
}
export enum ActionTypesStats {
	LoadAllStationStats = "LoadAllStationStats",
	LoadStationPopular = "LoadStationPopular",
}

export interface ILoadAllStations {
	type: ActionTypes.LoadAllStations
	payload: [Station]
}
export interface ILoadStationPopular {
	type: ActionTypesStats.LoadStationPopular
	payload: IStationToStationStats
}
export interface ISetActiveStation {
	type: ActionTypes.SetActiveStation
	payload: Station
}

export interface IAddNewStation {
	type: ActionTypes.AddNewStation
	payload: Station
}

export interface ILoadAllTripsByStation {
	type:
		| ActionTypesTrips.LoadAllTripsByStation
		| ActionTypesTrips.LoadFilteredTrips
		| ActionTypesTrips.LoadSomeTripsByStation
	payload: { trips: [Trip]; stats: StationsStats }
}

export interface IClearActiveTrips {
	type: ActionTypesTrips.ClearActiveTrips
	payload: []
}
export interface IAddNewTrip {
	type: ActionTypesTrips.AddNewTrip
	payload: Trip
}

export interface ILoadAllStats {
	type: ActionTypesStats.LoadAllStationStats
	payload: [StationStats]
}

export type TState = {
	stations: TStationsReducers
	trips: TTripsState
	alert: TAlertState
}

export interface ISetAlert {
	type: ActionTypesAlert.SetAlert
	payload: TAlert
}
export interface INullifyAlert {
	type: ActionTypesAlert.NullifyAlert
}
export interface ISetLoadingFalse {
	type: ActionTypesAlert.SetLoadingFalse
}

export interface ISetLoadingTrue {
	type: ActionTypesAlert.SetLoadingTrue
}
