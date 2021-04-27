import React,{useContext} from 'react';
import { Icon } from 'semantic-ui-react';
import { EditEmployee, EmployeeContext } from '../reducer/Employee';



const ListComponent=()=> {
    const {empdetails,setEmpDetails} = useContext(EmployeeContext);
    const {empEdit,setEmpEdit} = useContext(EditEmployee);

    const handleDelete = (e)=>{
        const confirmation= window.confirm("Do you want to delete the entry?");
        if(confirmation){    

            const timestamp = e.target.id;
            const result=empdetails.filter(element => element.time != timestamp);
            setEmpDetails(result)
            localStorage.setItem('employeeData',JSON.stringify(result));
        }
    }

    const handleEdit = (e)=>{
        const timestamp = e.target.id;
        setEmpEdit(timestamp)
        
    }


    const value=(data) => (
        data.map((stored,key)=>(
            <tr key={key}>
                <th scope="row">{stored.username}</th>
                <td>{stored.empid}</td>
                <td>{stored.email}</td>
                <td>{stored.phone}</td>
                <td>
                    {stored.selectedDate}
                    </td>
                <td>
                    <Icon name='delete' id={stored.time} onClick={handleDelete} />
                    <Icon name='edit' id={stored.time} onClick={handleEdit}/>
                    </td>
            </tr>
        ))
    );      

    return (
        <div>
           <h4>Employee Details</h4>
            <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">Username</th>
                <th scope="col">Empid</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Joining Date</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {console.log("state data is below")}
                {/* its getting updated here */}
                {console.log(empdetails)}
                {/* but not here */}
                {empdetails && value(empdetails)}
            </tbody>
            </table> 

        </div>
    )
}

export default ListComponent