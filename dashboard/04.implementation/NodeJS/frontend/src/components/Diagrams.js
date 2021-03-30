import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import Map from '../components/Map'
import Tabular from '../components/Tabular'

const Diagrams = ({ }) => {

    return (
        <>
            <Tabs defaultActiveKey="map" id="diagramTab">
                <Tab eventKey="map" title="Map">
                    <Map />
                </Tab>
                <Tab eventKey="tabular" title="Tabular">
                    <Tabular />
                </Tab>
            </Tabs>

        </>
    )
}

export default Diagrams