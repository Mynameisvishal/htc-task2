import React,{ useContext } from 'react';
import { Nav, Navbar  } from 'react-bootstrap';
import { EmployeeContext } from './reducer/Employee';

const Header=()=> {
    let today = new Date();

    let date=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();
    const {empdetails} = useContext(EmployeeContext);


    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">HTC-TASK</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                </Nav>
                <Nav className="mr-auto">
                    <Navbar.Text className="mx-3">
                    Employees: {empdetails.length}
                    </Navbar.Text>
                </Nav>
                <Nav className="mr-auto">
                    <Navbar.Text className="mx-3">
                    Date: {date}
                    </Navbar.Text>
                </Nav>
                

                

            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header