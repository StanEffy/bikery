import { apiStationsStats } from '../../api/api'

import { Dispatch } from 'redux'
import { ActionTypesStats, ILoadAllStats } from './types'

export const LoadAllStationsStats =
	() => async (dispatch: Dispatch<ILoadAllStats>) => {
		try {
			const { data } = await apiStationsStats.get('/')
			dispatch({
				type: ActionTypesStats.LoadAllStationStats,
				payload: data.data.data,
			})
		} catch (e) {
			console.log(e)
		}
	}
