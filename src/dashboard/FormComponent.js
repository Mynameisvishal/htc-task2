import React,{useState,useContext,useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
// import validator from 'validator';

import 'react-datepicker/dist/react-datepicker.css';
import { EditEmployee, EmployeeContext } from '../reducer/Employee';


const FormComponent=()=> {
    const { empdetails,setEmpDetails } = useContext(EmployeeContext);
    const {empEdit,setEmpEdit} = useContext(EditEmployee);
    const [selectedDate,setSelectedDate] = useState(null);
    const [username,setUsername] = useState("");
    const [empid,setEmpId] = useState( 0);
    const [phone,setPhone] = useState( 0);
    const [empindex,setEmpIndex] = useState( 0);
    const [email,setEmail] = useState("");
    const [editingEmloyee,setEditingEmployee] = useState(false);

    // const [errors,setErros] = useState([]);

    useEffect(()=>{
        if(empEdit > 0){
            setEditingEmployee(true);
            const getIndex = (element) => element.time == empEdit;
            const index = empdetails.findIndex(getIndex);
            setEmpIndex(index);
            const edituser = empdetails[index];
            setUsername(edituser?.username);
            setSelectedDate(null);
            setEmail(edituser?.email);
            setEmpId(edituser?.empid);
            setPhone(edituser?.phone);
        // setIndex(index);
        }
    },[empEdit])

    const reset=()=>{
        setSelectedDate(null);
        setEmail("");
        setUsername("");
        setEmpId(0);
        setPhone(0);
    }

    // const handleInputError = (errors, inputName) => {
    //     return errors.some(error => error.message.toLowerCase().includes(inputName))
    //       ? "error"
    //       : "";
    //   };

    const statechange = (copyData)=>{
        setEmpDetails(copyData);

    }

    const handleSubmit =  event => {
        event.preventDefault();
        // if (!validator.isEmail(email)) {
        //     console.log("invalid mail");
        //     errors.push("invalid email");
        //     console.log(handleInputError(errors,'email'));
        //   } 
        const storedvalue = JSON.parse(localStorage.getItem('employeeData'));
        const currentDate = new Date(); const timestamp = currentDate. getTime();
        var dateInString = selectedDate.toString();
        dateInString = dateInString.slice(4,15);

        
        if(editingEmloyee){
            var empData = {
                username,
                email,
                empid,
                phone,
                selectedDate:dateInString,
                joinDate:selectedDate,
                time: timestamp
            };
            console.log(empdetails[empindex]);
            var copyData = empdetails;
            copyData[empindex] = empData;
            statechange(copyData);
            localStorage.setItem('employeeData',JSON.stringify(empdetails));
        }else{
            var empData = [{
                username,
                email,
                empid,
                phone,
                selectedDate:dateInString,
                joinDate:selectedDate,
                time: timestamp
            }];
            var result = storedvalue? storedvalue.concat(empData): empData;
            // if(storedvalue)
            // var result = storedvalue.concat(empData);
            // else
            // var result = empData;
            setEmpDetails(result);
            localStorage.setItem('employeeData',JSON.stringify(result));

        }
        
       setEditingEmployee(false);
        reset();
    }
        

    return (
        <div>
           <Form >
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>UserName</Form.Label>
                    <Form.Control type="text" value={username } onChange={(e)=>setUsername(e.target.value)} placeholder="Username" required/>
                </Form.Group>
                <Form.Group controlId="formBasicId">
                    <Form.Label>Empid</Form.Label>
                    <Form.Control type="number" value={empid===0 ? "" :empid} onChange={(e)=>setEmpId(e.target.value)} placeholder="Enter your Employee id" required />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group controlId="formBasicPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" value={phone===0 ? '': phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Enter your Phone Number" required />
                </Form.Group>
                <Form.Group controlId="formBasicDate">
                    <Form.Label >Joining Date</Form.Label>
                     <DatePicker 
                    //  className="row"
                     selected={selectedDate} 
                     fluid
                     dateFormat='MM/dd/yyyy'
                     onChange={date => setSelectedDate(date)}
                     maxDate={new Date()}
                     isClearable
                     showYearDropdown
                     scrollableMonthYearDropdown
                     placeholderText="Select a date"
                    calendarClassName="rasta-stripes"
                    popperModifiers={{
                        offset: {
                          enabled: true,
                          offset: "0px, 0px"
                        },
                        preventOverflow: {
                          enabled: true,
                          escapeWithReference: false,
                          boundariesElement: "scrollParent"
                        }
                      }}
                     required
                     />
                </Form.Group>

               
                <Button variant="primary" onClick={()=>reset} type="reset">
                    Reset
                </Button>
                <Button variant="success" onClick={handleSubmit} type="submit">
                    Submit
                </Button>
            </Form> 
        </div>
    )
}
export default FormComponent