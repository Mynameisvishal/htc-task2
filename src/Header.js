import React,{ useContext } from 'react';
import { Button, Nav, Navbar  } from 'react-bootstrap';
import { EmployeeContext } from './reducer/Employee';
import {useSelector,useDispatch} from 'react-redux';
// import { user_reducer } from './reducer';
import * as actionTypes from "./actions/types";
import { clearUser, setUser } from './actions';


const Header=()=> {
    let today = new Date();

    let date=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();
    const {empdetails} = useContext(EmployeeContext);
    const dispatch = useDispatch()
    const loggingData = useSelector(state => state.user.isLogged);
    

    return (
        <div>
            {console.log(loggingData)}
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
                <Nav >
                    <Navbar.Text>
                        {!loggingData ? 
                      <Button  className="mx-3" onClick={()=>dispatch({type: actionTypes.SET_USER})}>Login</Button> :
                      <Button  className="mx-3"  onClick={()=>dispatch({type: actionTypes.CLEAR_USER})}>Logout</Button>
                    }
                    </Navbar.Text>
                </Nav>
                

                

            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header