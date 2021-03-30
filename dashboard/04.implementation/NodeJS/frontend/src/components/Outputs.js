import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Form, DropdownButton, Dropdown } from 'react-bootstrap'


const Outputs = ({ }) => {

    const [datasetSize, setDatasetSize] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDatee] = useState('')
    const [message, setMessage] = useState(null)

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const submitHandler = (e) => {
        e.preventDefault()
        setMessage('Analyzed')
    }

    return (
        <>
            <h2>Outputs</h2>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='datasetSize'>
                    <Form.Label>Dataset size:</Form.Label>
                    <Form.Control
                        type='datasetSize'
                        placeholder='In thousands'
                        value={datasetSize}
                        onChange={(e) => setDatasetSize(e.target.value)}
                    ></Form.Control>
                </Form.Group>

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

                {userInfo ? (<h1>HISTORY</h1>) : (<h1> </h1>)}

                <DropdownButton id="dropdown-item-button" title="Download">
                    <Dropdown.ItemText>choose type:</Dropdown.ItemText>
                    <Dropdown.Item as="button">JSON</Dropdown.Item>
                    <Dropdown.Item as="button">scv</Dropdown.Item>
                    <Dropdown.Item as="button">xls</Dropdown.Item>
                </DropdownButton>

            </Form>
        </>
    )
}

export default Outputs