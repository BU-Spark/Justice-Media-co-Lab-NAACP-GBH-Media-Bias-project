import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listReportDetails } from '../actions/reportActions'

const ReportScreen = ({ history, match }) => {

    const dispatch = useDispatch()

    const reportDetails = useSelector((state) => state.reportDetails)
    const { loading, error, report } = reportDetails
    useEffect(() => {
        dispatch(listReportDetails(match.params.id))
    }, [dispatch, match])


    return (
        <>
            <Link className='btn btn-light my-3' to='/'>
                Go Back
        </Link>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <Row>
                    <h1>ReportScreen</h1>
                </Row>
            )}
        </>
    )
}
export default ReportScreen