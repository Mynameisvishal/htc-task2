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
