import React from 'react'
import { Container } from 'react-bootstrap'
import Navbar from "./Navbar"

export default function Dashboard() {
    return (
        <>
            <Navbar/>
            <Container fluid>
                Content
            </Container>     
        </>
    )
}
