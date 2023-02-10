import { create } from "zustand"
import {
	IStationToStationStats,
	Station,
	StationStats,
} from "../store/actions/types"

type State = {
	allStations: Station[]
	activeStation: null | Station
	allStationsStats: [StationStats] | []
	popularStations: IStationToStationStats[]
}

type Actions = {
	loadAllStations: (stations: Station[]) => void
	loadAllStationsStats: (allStationsStats: [StationStats]) => void
	loadStationPopular: (popularStations: IStationToStationStats[]) => void
	setActiveStation: (activeStation: Station) => void
}

const useStore = create<State & Actions>((set) => ({
	allStations: [],
	activeStation: null,
	allStationsStats: [],
	popularStations: [],
	loadAllStations: (stations: Station[]) =>
		set(() => ({ allStations: stations })),
	loadAllStationsStats: (allStationsStats: [StationStats]) =>
		set(() => ({ allStationsStats: allStationsStats })),
	loadStationPopular: (popularStations: IStationToStationStats[]) =>
		set(() => ({ popularStations: popularStations })),
	setActiveStation: (activeStation: Station) =>
		set(() => ({ activeStation })),
}))
