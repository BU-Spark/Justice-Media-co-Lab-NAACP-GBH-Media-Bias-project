import {
    REPORT_LIST_REQUEST,
    REPORT_LIST_SUCCESS,
    REPORT_LIST_FAIL,
    REPORT_DETAILS_REQUEST,
    REPORT_DETAILS_SUCCESS,
    REPORT_DETAILS_FAIL
} from '../constants/reportConstants'

export const reportListReducer = (state = { reports: [] }, action) => {
    switch (action.type) {
        case REPORT_LIST_REQUEST:
            return { loading: true, reports: [] }
        case REPORT_LIST_SUCCESS:
            return { loading: false, reports: action.payload }
        case REPORT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const reportDetailsReducer = (state = { report: { reviews: [] } }, action) => {
    switch (action.type) {
        case REPORT_DETAILS_REQUEST:
            return { loading: true, report: {} }
        case REPORT_DETAILS_SUCCESS:
            return { loading: false, report: action.payload }
        case REPORT_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}