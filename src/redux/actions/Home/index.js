import { START_LOADING, STOP_LOADING, FETCH_HOME_SUCCESS } from "../actionTypes"
import { get_request } from '../../../services/api'


export const Fetch_Home_Data = () => {
    return async (dispatch) => {
        dispatch({ type: START_LOADING })
        const response = await get_request({ target: 'posts' })
        console.log('Home Actions', response)
        dispatch({ type: STOP_LOADING })
        if (response) {
            dispatch({ type: FETCH_HOME_SUCCESS, payload: response })
        }else{
            alert('errorInConnection')
        }
    }
}