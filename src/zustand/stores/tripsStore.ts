import { create } from "zustand"
import { Trip } from "../../store/actions/types"
import { StationsStats } from "../../components/SingleStation/OtherStationStats"

export type TTripsState = {
	tripsForActiveStation: Trip[]
	mostPopularStations: null | {
		departures: StationsStats
		returns: StationsStats
	}
	filteredTrips: Trip[]
}

type Actions = {
	loadAllTripsByStation: (tripsForActiveStation: Trip[]) => void
	loadFilteredTrips: (popularStations: Trip[]) => void
	clearActiveTrips: () => void
	addNewTrip: (trip: Trip) => void
}

export const useStationsStore = create<TTripsState & Actions>((set) => ({
	tripsForActiveStation: [],
	filteredTrips: [],
	mostPopularStations: null,
	loadAllTripsByStation: (tripsForActiveStation) =>
		set(() => ({ tripsForActiveStation })),
	loadFilteredTrips: (filteredTrips) => set(() => ({ filteredTrips })),
	clearActiveTrips: () =>
		set(() => ({ tripsForActiveStation: [], mostPopularStations: null })),
	addNewTrip: (trip: Trip) => set(() => ({})),
}))
