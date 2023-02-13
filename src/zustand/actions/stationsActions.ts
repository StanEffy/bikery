import { apiStations } from "../../api/apiCopy"

export const ZLoadAllStations = async () => {
	console.log("we are here")
	try {
		const { data } = await apiStations.get("/")
		return data
	} catch (e) {
		console.log(e)
	}
}
