import { TAlert } from "../../store/reducers/alertReducers"

// eslint-disable-next-line no-empty-pattern
const handleError = ({}): TAlert => {
	return {
		type: "success",
		message: "message",
	}
}

export default handleError
