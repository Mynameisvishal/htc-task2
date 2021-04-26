import React from 'react';
import { Nav, Navbar  } from 'react-bootstrap';

const Header=()=> {
    let today = new Date();

    let date=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">HTC-TASK</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                </Nav>
                <Navbar.Text className="mx-3">
                Employees: 12
                </Navbar.Text>

                <Navbar.Text className="mx-3">
                Date: {date}
                </Navbar.Text>

            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header