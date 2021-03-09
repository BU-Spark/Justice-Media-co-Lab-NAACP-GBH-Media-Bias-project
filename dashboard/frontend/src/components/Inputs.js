import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useDispatch, useSelector } from 'react-redux'

import { analyzeInputs } from '../actions/inputsActions'

const Inputs = ({ }) => {

    const dispatch = useDispatch()

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState('')
    const [terms, setTerms] = useState('')
    const [location, setLocation] = useState('')
    const [methodType, setMethodType] = useState('')
    const [uploadFile, setUploadFile] = useState('')
    const [message, setMessage] = useState(null)

    const submitHandler = (e) => {
        e.preventDefault()
        setMessage('Analyzed')
        console.log(startDate, endDate, terms, location, methodType, uploadFile)
        //dispatch(analyzeInputs(startDate, endDate, terms, location, methodType, uploadFile))
    }

    return (
        <>
            <h2>Inputs</h2>

            <Form onSubmit={submitHandler}>
                <Form.Group controlId='startDate'>
                    <Form.Label>Start date:</Form.Label>
                    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                </Form.Group>

                <Form.Group controlId='endDate'>
                    <Form.Label>End date:</Form.Label>
                    <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
                </Form.Group>

                <Form.Group controlId='terms'>
                    <Form.Label>Terms:</Form.Label>
                    <Form.Control
                        type='terms'
                        placeholder='Enter terms:'
                        value={terms}
                        onChange={(e) => setTerms(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='location'>
                    <Form.Label>Location:</Form.Label>
                    <Form.Control
                        type='location'
                        placeholder='Enter location:'
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form>
                    <Form.Group>
                        <Form.File id="uploadFile" label="Upload" onChange={(e) => setUploadFile(e.target.value)} />
                    </Form.Group>
                </Form>

                <Form.Group as={Col} controlId="methodType">
                    <Form.Label>Method Of Analysis</Form.Label>
                    <Form.Control as="select" defaultValue="Choose..." onChange={(e) => setMethodType(e.target.value)}>
                        <option>Sentment Analysis</option>
                        <option>Topic Modeling</option>
                        <option>Entity Reognition</option>
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Analyze
          </Button>
            </Form>
        </>
    )
}

export default Inputs