import React, { createContext, useState} from "react";


interface IPatient{
    name:string
    age:number|null 
    diagnosis:string
}

interface IAction{
    type:string
    payload:any
}

export const PatientContext = createContext<any>({})


export function PatientProvider(props:JSX.ElementChildrenAttribute):JSX.Element{
    const [patient, setPatient] = useState({})

    return <PatientContext.Provider value={{patient, setPatient}}>
        {props.children}
    </PatientContext.Provider>
}