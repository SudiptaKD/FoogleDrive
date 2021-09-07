import React from "react"
import { Navbar, Nav, Row,Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import driveLogo from "./google drive.svg.png"

export default function NavbarComponent() {
  return (
    <Navbar bg="secondary" variant="dark" expand="sm">
      <Row  style={{marginLeft:'20px', width:'100%'}}>
          <Col xl={10} lg={10} md={10} sm={9} xs={8} >
            <Navbar.Brand as={Link} to="/">
                <img src={driveLogo}
                width="30"
                height="30"
                alt="logo" />
            </Navbar.Brand>
            <Navbar.Brand as={Link} to="/">
              Foogle Drive
            </Navbar.Brand>
          </Col>
          <Col xl={2} lg={2} md={2} sm={3} xs={4} >
            <Nav  style={{marginRight:'20px'}}>
              <Nav.Link as={Link} to="/user">
                Profile
              </Nav.Link>
            </Nav>
          </Col>
      </Row>
      
      {/* <Nav>
        <Nav.Link as={Link} to="/user">
          Profile
        </Nav.Link>
      </Nav> */}
    </Navbar>
  )
}
