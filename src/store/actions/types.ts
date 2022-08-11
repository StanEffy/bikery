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
    FID: number,
    ID: number
}

export enum ActionTypes {
    LoadAllStations= "LoadAllStations" ,
    SetActiveStation = "SetActiveStation",
    AddNewStation = "AddNewStation"
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
