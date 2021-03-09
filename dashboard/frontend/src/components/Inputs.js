import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'

const Inputs = ({ }) => {

    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDatee] = useState('')
    const [terms, setTerms] = useState('')
    const [location, setLocation] = useState('')
    const [message, setMessage] = useState(null)

    const submitHandler = (e) => {
        e.preventDefault()
        setMessage('Analyzed')
    }

    return (
        <>
            <h2>Inputs</h2>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='startDate'>
                    <Form.Label>Start date:</Form.Label>
                    <Form.Control
                        type='startDate'
                        placeholder=''
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='endDate'>
                    <Form.Label>End date:</Form.Label>
                    <Form.Control
                        type='endDate'
                        placeholder=''
                        value={endDate}
                        onChange={(e) => setEndDatee(e.target.value)}
                    ></Form.Control>
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
                        <Form.File id="uploadFile" label="Upload" />
                    </Form.Group>
                </Form>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Method Of Analysis</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
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