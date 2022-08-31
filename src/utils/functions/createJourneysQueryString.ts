import { TFilter } from "../../components/JourneysList/JourneysList"

export default (filter: TFilter) => {
	let str = ""
	if (filter.departure_station_id !== null) {
		str += "departure_station_id=" + filter.departure_station_id?.ID
	}
	if (filter.return_station_id !== null) {
		filter.departure_station_id !== null
			? (str += "&return_station_id=" + filter.return_station_id?.ID)
			: (str += "return_station_id=" + filter.return_station_id?.ID)
	}
	if (filter.covered_distance_m > 0) {
		if (filter.distance_is_greater) {
			str += "&covered_distance_m[gte]=" + filter.covered_distance_m
		} else {
			str += "&covered_distance_m[lte]=" + filter.covered_distance_m
		}
	}
	if (filter.duration_sec > 0) {
		if (filter.duration_is_greater) {
			str += "&duration_sec[gte]=" + filter.duration_sec
		} else {
			str += "&duration_sec[lte]=" + filter.duration_sec
		}
	}
	return str
}
