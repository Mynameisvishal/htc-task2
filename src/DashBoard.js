import React,{useState,useEffect} from 'react'
import FormComponent from './dashboard/FormComponent'
import ListComponent from './dashboard/ListComponent'

const DashBoard=()=> {
    const [empdetails,setEmpDetails]=useState([]);

    useEffect(()=>{
        setEmpDetails(JSON.parse(localStorage.getItem('employeeData')));
        // console.log("useEffect"+localStorage.getItem('employeeData'));
    },[])

    return (
        <div className="container">
            <div className="row">
                <h1 >DashBoard</h1>
            </div>
           <div className="row">
                <div className="col-md-5">
                    <FormComponent empdetails={empdetails} setEmpDetails={setEmpDetails} />
                </div>            
                <div className="col-md-7">
                    <ListComponent empdetails={empdetails} setEmpDetails={setEmpDetails} />
                </div>    
            </div>           
        </div>
    )
}

export default DashBoard
