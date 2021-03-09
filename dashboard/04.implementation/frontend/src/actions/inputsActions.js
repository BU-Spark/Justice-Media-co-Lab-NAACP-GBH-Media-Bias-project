import axios from 'axios'
import {
    INPUT_ANALYZE_FAIL,
    INPUT_ANALYZE_REQUEST,
    INPUT_ANALYZE_SUCCESS,
} from '../constants/inputsConstants'


export const analyzeInputs = (startDate, endDate, terms, location, methodType, uploadFile) => async (dispatch) => {
    try {
        dispatch({
            type: INPUT_ANALYZE_REQUEST,
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const { data } = await axios.post(
            '/api/inputs',
            { startDate, endDate, terms, location, methodType, uploadFile },
            config
        )

        dispatch({
            type: INPUT_ANALYZE_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: INPUT_ANALYZE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

