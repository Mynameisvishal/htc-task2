import React, { useReducer, createContext, useEffect } from 'react';

// reducer
const EmployeeReducer = (state, action) => {
    switch (action.type) {
        case 'ADDEMPLOYEE':
            return {state:action.payload.result} ;
        case 'EMPLOYEE':
            return {state:action.payload.storedData} ;
        default:
            return state;
    }
};

// const data = [
//     {sno:"1", name :"Thara",date:"001", Gender :"Female", Education :"B.E", Address:"#11 GST road Guindy, Chennai, Tamil nadu", Languages:"English, Tamil" },
//     {sno:"2", name :"John",date:"002", Gender :"Male", Education :"B.E", Address:"#11 GST road Guindy, Chennai, Tamil nadu", Languages:"English, Tamil" },
//     {sno:"3", name :"Smith",date:"003", Gender :"Male", Education :"B.E", Address:"#11 GST road Guindy, Chennai, Tamil nadu", Languages:"English, Tamil" },
//     {sno:"4", name :"Eswar",date:"004", Gender :"Male", Education :"B.E", Address:"#11 GST road Guindy, Chennai, Tamil nadu", Languages:"Tamil" },
//     {sno:"5", name :"David",date:"005", Gender :"Male", Education :"B.E", Address:"#11 GST road Guindy, Chennai, Tamil nadu", Languages:"English, Tamil" },
//     {sno:"6", name :"Kumar",date:"006", Gender :"Male", Education :"B.E", Address:"#11 GST road Guindy, Chennai, Tamil nadu", Languages:"English, Tamil" },
// ];
// state
// const initialState = {
//     employees: localStorage.getItem('employeeData') ? JSON.parse(localStorage.getItem('employeeData')) : null
// };
const initialState = null;

// create context
const AuthContext = createContext();

// context provider
const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(EmployeeReducer, initialState);

    useEffect(() => {
        var check = localStorage.getItem("employeeData") ? true : false;
        if(check){
            const storedData = JSON.parse(localStorage.getItem("employeeData"));
            console.log("storedData");
            console.log(storedData);
            dispatch({
                type:"EMPLOYEE",
                payload:storedData
            })
        }
        console.log("reducer data"+ state);
        // else{
        //    localStorage.setItem("empdata",JSON.stringify(data));
        //    dispatch({
        //     type:"EMPLOYEE",
        //     payload:data
        // });
        // }  
    }, []);

    const value = { state, dispatch };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// export
export { AuthContext, AuthProvider };
