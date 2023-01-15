import { TFilter } from "../../components/JourneysList/JourneysList"
const dates = {
	may: {
		start: "2021-05-01T00:00:00Z",
		end: "2021-05-31T23:59:59Z",
	},
	june: {
		start: "2021-06-01T00:00:00Z",
		end: "2021-06-30T23:59:59Z",
	},
	july: {
		start: "2021-07-01T00:00:00Z",
		end: "2021-07-30T23:59:59Z",
	},
}
export default (filter: TFilter): string => {
	let str = ""
	if (filter.departure_station_id !== null) {
		str += "departure_station_id=" + filter.departure_station_id?.ID
	}
	if (filter.return_station_id !== null) {
		filter.departure_station_id !== null
			? (str += "&return_station_id=" + filter.return_station_id?.ID)
			: (str += "return_station_id=" + filter.return_station_id?.ID)
	}
	if (parseInt(filter.covered_distance_m) > 0) {
		if (filter.distance_is_greater) {
			str += "&covered_distance_m[gte]=" + filter.covered_distance_m
		} else {
			str += "&covered_distance_m[lte]=" + filter.covered_distance_m
		}
	}
	if (parseInt(filter.duration_sec) > 0) {
		if (filter.duration_is_greater) {
			str += "&duration_sec[gte]=" + filter.duration_sec
		} else {
			str += "&duration_sec[lte]=" + filter.duration_sec
		}
	}
	if (filter.dateFilter) {
		if (filter.dateFilter === "may") {
			str += "&departure[gte]=" + dates.may.start
			str += "&departure[lte]=" + dates.may.end
		} else if (filter.dateFilter === "june") {
			str += "&departure[gte]=" + dates.june.start
			str += "&departure[lte]=" + dates.june.end
		} else if (filter.dateFilter === "july") {
			str += "&departure[gte]=" + dates.july.start
			str += "&departure[lte]=" + dates.july.end
		}
	}
	return str
}
