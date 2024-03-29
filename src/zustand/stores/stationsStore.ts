import { create } from "zustand"
import { IStationToStationStats, Station, StationStats } from "../actions/types"
import { apiStations } from "../../api/apiCopy"

type State = {
	allStations: Station[]
	activeStation: null | Station
	allStationsStats: [StationStats] | []
	popularStations: IStationToStationStats[]
}

type Actions = {
	loadAllStations: () => void
	loadAllStationsStats: (allStationsStats: [StationStats]) => void
	loadStationPopular: (popularStations: IStationToStationStats[]) => void
	setActiveStation: (activeStation: Station) => void
}

export const useStationsStore = create<State & Actions>((set) => ({
	allStations: [],
	activeStation: null,
	allStationsStats: [],
	popularStations: [],
	loadAllStations: async () => {
		const { data } = await apiStations.get("/")
		set(() => ({ allStations: data.data.data }))
	},
	loadAllStationsStats: (allStationsStats: [StationStats]) =>
		set(() => ({ allStationsStats: allStationsStats })),
	loadStationPopular: (popularStations: IStationToStationStats[]) =>
		set(() => ({ popularStations: popularStations })),
	setActiveStation: (activeStation: Station) =>
		set(() => ({ activeStation })),
}))
