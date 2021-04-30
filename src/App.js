import React,{useState} from 'react'
import './App.css';
import FormComponent from './dashboard/FormComponent';
import ListComponent from './dashboard/ListComponent';
import Header from './Header';
import Post from './Post';
import { EditEmployee, EmployeeContext } from './reducer/Employee';

function App() {

  const initalValue= localStorage.getItem('employeeData') ? JSON.parse(localStorage.getItem('employeeData')) : [];

  const [empdetails,setEmpDetails]=useState(initalValue);
  const [empEdit,setEmpEdit]=useState(0);

  return (
    <div className="App">
      <EmployeeContext.Provider value={{empdetails,setEmpDetails}}>
        <EditEmployee.Provider value={{empEdit,setEmpEdit}}>


        <Header />
        <div className="container">
            <div className="row">
                <h1 >DashBoard</h1>
            </div>
           <div className="row">
                <div className="col-lg-4">
                    <FormComponent/>
                </div>            
                <div className="col-lg-8">
                    <ListComponent />
                </div>    
            </div>   
            <Post />        
        </div>
        </EditEmployee.Provider>
      </EmployeeContext.Provider>
    </div>
  );
}

export default App;
