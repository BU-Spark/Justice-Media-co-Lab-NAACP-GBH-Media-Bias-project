import axios from 'axios'
import {
    REPORT_LIST_REQUEST,
    REPORT_LIST_SUCCESS,
    REPORT_LIST_FAIL,
    REPORT_DETAILS_REQUEST,
    REPORT_DETAILS_SUCCESS,
    REPORT_DETAILS_FAIL
} from '../constants/reportConstants'

export const listReports = () => async (dispatch) => {
    try {
        dispatch({ type: REPORT_LIST_REQUEST })

        const { data } = await axios.get('/api/reports')

        dispatch({
            type: REPORT_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: REPORT_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const listReportDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: REPORT_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/reports/${id}`)

        dispatch({
            type: REPORT_DETAILS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: REPORT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}