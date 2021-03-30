import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Row, Col } from 'react-bootstrap'
import Report from '../components/Report'
import { listReports } from '../actions/reportActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Inputs from '../components/Inputs'
import Outputs from '../components/Outputs'
import Diagrams from '../components/Diagrams'

const HomeScreen = () => {

    const dispatch = useDispatch()
    const reportList = useSelector((state) => state.reportList)
    const { loading, error, reports } = reportList

    useEffect(() => {
        dispatch(listReports())
    }, [dispatch])



    return (
        <>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <Row>
                    <Col md={3}>
                        <Inputs />
                    </Col>
                    <Col md={6}>
                        <Diagrams />
                    </Col>
                    <Col md={3}>
                        <Outputs />
                    </Col>
                </Row>
            )}
        </>
    )
}

export default HomeScreen