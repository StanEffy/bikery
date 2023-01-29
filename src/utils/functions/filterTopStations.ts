// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
const filterTopStations = (objectWithIdKeys) => {
	const arr = []

	for (const key in objectWithIdKeys) {
		arr.push([key, objectWithIdKeys[key]])
	}
	//return top 5 stations
	return arr.sort((a, b) => b[1] - a[1]).slice(0, 5)
}

export default filterTopStations
